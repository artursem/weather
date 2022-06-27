import { useCallback, useEffect } from 'react';
import useRequest from './hooks/useRequest';
import useCurrentPosition from './hooks/useCurrentPosition';
import { Query, Status } from './types/app-types';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import theme from 'src/theme';
import { Card, ArrowUp } from './components';
import Layout from './sections/Layout';
import LocationForm from './sections/LocationForm';
import CurrentWeather from './sections/CurrentWeather';
import DisplayForecast from './sections/DisplayForecast';

export const App = () => {
	const { fetchWeather, forecast, current, status } = useRequest();
	const { currentLocation, currentStatus } = useCurrentPosition();
	const handleSearch = (location: Query) => {
		fetchWeather(location);
	};

	const handleCurrentLocation = useCallback(() => {
		fetchWeather(currentLocation);
	}, [currentLocation, fetchWeather]);

	useEffect(() => {
		if (currentStatus === Status.idle) {
			handleCurrentLocation();
		}
	}, [currentStatus]);

	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<LocationForm onSearch={handleSearch} onCurrentLocation={handleCurrentLocation} />
				{status === Status.loading && (
					<Card>
						<Spinner />
					</Card>
				)}
				{status === Status.empty && (
					<Card>
						<ArrowUp />
						Pick location
					</Card>
				)}
				{status === Status.error && <Card>Error</Card>}
				{status === 'idle' && <CurrentWeather current={current} />}
				{status === 'idle' && <DisplayForecast forecast={forecast} />}
			</Layout>
		</ChakraProvider>
	);
};
