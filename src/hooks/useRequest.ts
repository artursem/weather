import { useState, useCallback } from 'react';
import { Status, Geo, Method, Forecast } from 'src/types/app-types';
import { fetchByCity } from 'src/services/fetchByCity';
import { fetchByLocation } from 'src/services/fetchByLocation';

type Query = {
	value: Geo | string;
	method: Method;
};

const initialForecast: Forecast = {
	city: '',
	icon: '',
	morningTemp: 0,
	dayTemp: 0,
	nightTemp: 0,
	humidity: 0,
};

const useRequest = () => {
	const [forecast, setForecast] = useState(initialForecast);
	const [status, setStatus] = useState(Status.idle);

	const fetchWeather = useCallback(async ({ value, method }: Query) => {
		setStatus(Status.loading);
		let data;
		if (method === Method.byCity && typeof value === 'string') {
			data = fetchByCity(value);
		}
		if (method === Method.byLocation && typeof value === 'object') {
			data = fetchByLocation(value);
		}
		// if error status.error
		// format data into Forecast
	}, []);

	return { forecast, status, fetchWeather };
};

export default useRequest;
