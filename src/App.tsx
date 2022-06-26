import useRequest from './hooks/useRequest';
import { Query, Status } from './types/app-types';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Layout from './sections/Layout';
import LocationForm from './sections/LocationForm';
import { Card } from './components';
import CurrentWeather from './sections/CurrentWeather';

export const App = () => {
	const { fetchWeather, forecast, current, status } = useRequest();

	const handleSearch = (location: Query) => {
		console.log(location);
		fetchWeather(location);
	};
	let content;

	console.log('status:', status);
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<LocationForm onSearch={handleSearch} />
				{status === Status.loading && <Card>loading...</Card>}

				{status === 'idle' && <CurrentWeather current={current} />}
			</Layout>
		</ChakraProvider>
	);
};
