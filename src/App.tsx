import { ChakraProvider, theme } from '@chakra-ui/react';
// import Layout from './sections/Layout';
import Layout from './sections/Layout';
import LocationForm from './sections/LocationForm';

export const App = () => (
	<ChakraProvider theme={theme}>
		<Layout>
			<LocationForm />
		</Layout>
	</ChakraProvider>
);
