export default interface Forecast {
	city: string;
	icon: string;
	morningTemp: number;
	dayTemp: number;
	nightTemp: number;
	humidity: number;
	// maxTemp: number;
	// minTemp: number;
	// meanTemp: number;
	// modeTemp: number;
}

export interface Geo {
	lat: number;
	lon: number;
}
