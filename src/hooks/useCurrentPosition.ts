import { useState } from 'react';
import { Method, Query, Status } from 'src/types/app-types';

const useCurrentPosition = () => {
	const [currentStatus, setCurrentStatus] = useState(Status.empty);
	const [currentLocation, setCurrentLocation] = useState<Query>({
		method: Method.byLocation,
		geo: { lat: 0, lon: 0 },
	});

	const success = (position: GeolocationPosition) => {
		const newQuery: Query = {
			method: Method.byLocation,
			geo: { lat: position.coords.latitude, lon: position.coords.longitude },
		};
		setCurrentStatus(Status.idle);
		setCurrentLocation(newQuery);
	};
	const failure = (err: GeolocationPositionError) => {
		setCurrentStatus(Status.error);
	};

	navigator.geolocation.getCurrentPosition(success, failure);

	return { currentLocation, currentStatus };
};
export default useCurrentPosition;
