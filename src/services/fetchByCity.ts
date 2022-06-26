export const fetchByCity = async (city: string) => {
	if (city.trim().length === 0) {
		return;
	}

	try {
		console.log('try');
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_KEY}`
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
