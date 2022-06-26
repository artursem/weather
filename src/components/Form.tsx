import { FormEvent, ReactNode } from 'react';
import { Stack } from './';

type FormProps = {
	children: ReactNode;
	onSubmit: (event: FormEvent) => void;
};

const Form = ({ children, onSubmit }: FormProps) => {
	return (
		<form onSubmit={onSubmit}>
			<Stack direction='row' justifyContent='stretch' alignItems='center' height='3rem'>
				{children}
			</Stack>
		</form>
	);
};

export default Form;
