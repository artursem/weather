import { FC } from 'react';
import { BoxProps, useColorModeValue } from '@chakra-ui/react';
import Box from './Box';

const Card: FC<BoxProps> = (props) => {
	const bg = useColorModeValue('whiteAlpha.400', 'blackAlpha.100');
	const border = useColorModeValue('gray.400', 'gray.700');
	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			border='1px solid'
			borderColor={border}
			backgroundColor={bg}
			borderRadius='5px'
			minH='5rem'
			p='1rem'
			{...props}
		>
			{props.children}
		</Box>
	);
};

export default Card;
