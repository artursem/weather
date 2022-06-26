import useRequest from './hooks/useRequest';
import { Query } from './types/app-types';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Layout from './sections/Layout';
import LocationForm from './sections/LocationForm';

export const App = () => {
	const { fetchWeather, forecast, status } = useRequest();

	const handleSearch = (location: Query) => {
		fetchWeather(location);
	};
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<LocationForm onSearch={handleSearch} />
			</Layout>
		</ChakraProvider>
	);
};
