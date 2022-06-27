import { useState } from 'react';
import { Method, Query } from 'src/types/app-types';

const useCurrentPosition = () => {
	const [location, setLocation] = useState<Query>({
		method: Method.byLocation,
		geo: { lat: 0, lon: 0 },
	});

	const success = (position: GeolocationPosition) => {
		const newQuery: Query = {
			method: Method.byLocation,
			geo: { lat: position.coords.latitude, lon: position.coords.longitude },
		};
		setLocation(newQuery);
	};
	const failure = (err: GeolocationPositionError) => {};

	navigator.geolocation.getCurrentPosition(success, failure);

	return location;
};
export default useCurrentPosition;
