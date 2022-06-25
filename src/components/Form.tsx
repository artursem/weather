import { FC } from 'react';
import { Stack } from './';
const Form: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<form>
			<Stack direction='row' justifyContent='stretch' alignItems='center' height='3rem'>
				{children}
			</Stack>
		</form>
	);
};

export default Form;
