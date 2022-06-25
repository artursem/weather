import { FC } from 'react';
import { BoxProps } from '@chakra-ui/react';
import Box from './Box';

const Card: FC<BoxProps> = (props) => {
	return (
		<Box border='1px solid gray' borderRadius='10px' {...props}>
			{props.children}
		</Box>
	);
};

export default Card;
