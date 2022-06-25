import { FC, ReactNode } from 'react';
import { Stack } from 'src/components';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	// add RWD
	return (
		<Stack dir='column' mx='2rem' my='1rem'>
			{children}
		</Stack>
	);
};

export default Layout;
