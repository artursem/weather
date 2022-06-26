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
			border='1px solid'
			borderColor='gray.700'
			backgroundColor='blackAlpha.100'
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
