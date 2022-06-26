interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	sea_level: number;
	grnd_level: number;
	humidity: number;
	temp_kf: number;
}

interface Weather {
	dt: number;
	main: Main;
	weather: [
		{
			id: number;
			main: string;
			description: string;
			icon: string;
		}
	];
	clouds: {
		all: number;
	};
	wind: {
		speed: number;
		deg: number;
		gust: number;
	};
	visibility: number;
	pop: number;
	sys: {
		pod: number;
	};
	dt_txt: string;
}

interface ForecastResponse {
	cod: string;
	message: number;
	cnt: number;
	list: Weather[];
	city: {
		id: number;
		name: string;
		coord: {
			lat: number;
			lon: number;
		};
		country: string;
		population: number;
		timezone: number;
		sunrise: number;
		sunset: number;
	};
}

export default ForecastResponse;
