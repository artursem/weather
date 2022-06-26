import useRequest from './hooks/useRequest';
import { Query, Status } from './types/app-types';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Layout from './sections/Layout';
import LocationForm from './sections/LocationForm';
import { Card } from './components';
import CurrentWeather from './sections/CurrentWeather';
import DisplayForecast from './sections/DisplayForecast';

export const App = () => {
	const { fetchWeather, forecast, current, status } = useRequest();

	const handleSearch = (location: Query) => {
		console.log(location);
		fetchWeather(location);
	};
	console.log(forecast);
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<LocationForm onSearch={handleSearch} />
				{status === Status.loading && <Card>loading...</Card>}
				{status === 'idle' && <CurrentWeather current={current} />}
				{status === 'idle' && <DisplayForecast forecast={forecast} />}
			</Layout>
		</ChakraProvider>
	);
};
