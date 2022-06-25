import { FC } from 'react';
import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

const Input: FC<InputProps> = (props) => {
	return <ChakraInput {...props} id='weatherInput' />;
};

export default Input;
