import { FC } from 'react';
import { BoxProps } from '@chakra-ui/react';
import Box from './Box';

const Card: FC<BoxProps> = (props) => {
	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			border='1px solid #444'
			borderRadius='10px'
			minH='5rem'
			p='1rem'
			{...props}
		>
			{props.children}
		</Box>
	);
};

export default Card;
