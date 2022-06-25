import { FC } from 'react';
import { Box as ChakraBox, BoxProps } from '@chakra-ui/react';

const Box: FC<BoxProps> = (props) => {
	return <ChakraBox {...props}>{props.children}</ChakraBox>;
};

export default Box;
