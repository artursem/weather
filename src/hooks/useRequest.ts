import { useState, useCallback } from 'react';
import { Status, Method, Forecast, Query } from 'src/types/app-types';
import { fetchByCity } from 'src/services/fetchByCity';
import { fetchByLocation } from 'src/services/fetchByLocation';
import { formatData } from 'src/utils/format-data';

const initialForecast: Forecast[] = [
	{
		city: '',
		icon: '',
		morningTemp: 0,
		dayTemp: 0,
		nightTemp: 0,
		humidity: 0,
	},
];

const useRequest = () => {
	const [forecast, setForecast] = useState(initialForecast);
	const [status, setStatus] = useState(Status.idle);

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
		console.log(formatData(data));

		// if error status.error
		// format data into Forecast
	}, []);

	return { forecast, status, fetchWeather };
};

export default useRequest;
