import { FC } from 'react';
import { Stack as ChakraStack, StackProps } from '@chakra-ui/react';

const Stack: FC<StackProps> = (props) => {
	return <ChakraStack {...props}>{props.children}</ChakraStack>;
};

export default Stack;
