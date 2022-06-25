import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme } from '@chakra-ui/react';

export const App = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign='center' fontSize='xl'>
			hello world
		</Box>
	</ChakraProvider>
);
