export interface Forecast {
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

export enum Method {
	byCity = 'byCity',
	byLocation = 'byLocations',
}

export interface Query {
	geo?: Geo;
	city?: string;
	method: Method;
}

export enum Status {
	idle,
	loading,
	error,
}
