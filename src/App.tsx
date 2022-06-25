import { ChakraProvider, theme } from '@chakra-ui/react';
import { Box } from './components';

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign='center' fontSize='xl'>
			hello world
		</Box>
	</ChakraProvider>
);
