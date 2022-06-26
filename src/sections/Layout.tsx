import { FC, ReactNode } from 'react';
import { Stack, Box } from 'src/components';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	// add RWD
	return (
		<Box
			width='100%'
			display='flex'
			flexDirection='row'
			justifyContent='center'
			alignItems='stretch'
		>
			<Stack dir='column' mx='1rem' my='1rem' w='700px' minH='100vh'>
				{children}
			</Stack>
		</Box>
	);
};

export default Layout;
