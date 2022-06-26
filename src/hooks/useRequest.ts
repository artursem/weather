import { useState, useCallback } from 'react';
import { Status, Method, Forecast, Current, Query } from 'src/types/app-types';
import { fetchByCity } from 'src/services/fetchByCity';
import { fetchByLocation } from 'src/services/fetchByLocation';
import { formatForecast } from 'src/utils/format-forecast';
import temp from 'src/utils/temp';

const initialForecast: Forecast[] = [
	{
		night: 0,
		morning: 0,
		day: 0,
		humidity: 0,
		minTemp: 0,
		maxTemp: 0,
		meanTemp: 0,
		modeTemp: 0,
	},
];

const initialCurrent: Current = {
	city: '',
	icon: '10d',
	temp: 0,
	humidity: 0,
};

const useRequest = () => {
	const [current, setCurrent] = useState(initialCurrent);
	const [forecast, setForecast] = useState(initialForecast);
	const [status, setStatus] = useState(Status.empty);

	const fetchWeather = useCallback(async ({ city, geo, method }: Query) => {
		setStatus(Status.loading);
		let data;
		if (method === Method.byCity && !!city) {
			data = await fetchByCity(city);
		}
		if (method === Method.byLocation && !!geo) {
			data = await fetchByLocation(geo);
		}
		if (data instanceof Error) {
			setStatus(Status.error);
			return;
		}
		const currentWeather: Current = {
			city: data.city.name,
			icon: data.list[0].weather[0].icon,
			humidity: data.list[0].main.humidity,
			temp: temp(data.list[0].main.temp),
		};
		setCurrent(currentWeather);
		setForecast(formatForecast(data));
		setStatus(Status.idle);
	}, []);

	return { current, forecast, status, fetchWeather };
};

export default useRequest;
