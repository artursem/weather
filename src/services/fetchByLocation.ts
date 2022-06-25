import { Geo } from 'src/types/app-types';

export const fetchByLocation = async (geo: Geo) => {
	const { lat, lon } = geo;
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_KEY}`
		);

		if (!response.ok) {
			throw new Error('No valid response');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
};
