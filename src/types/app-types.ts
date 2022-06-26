export interface Forecast {
	night: number;
	morning: number;
	day: number;
	humidity: number;
	minTemp: number;
	maxTemp: number;
	meanTemp: number;
	modeTemp: number;
}

export interface Current {
	city: string;
	temp: number;
	icon: string;
	humidity: number;
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
	empty = 'empty',
	idle = 'idle',
	loading = 'loading',
	error = 'error',
}
