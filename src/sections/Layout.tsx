import { FC, ReactNode } from 'react';
import { Stack } from 'src/components';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return <Stack dir='column'>{children}</Stack>;
};

export default Layout;
