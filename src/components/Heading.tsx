import { FC } from 'react';
import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react';

const Heading: FC<HeadingProps> = (props) => {
	return (
		<ChakraHeading {...props} as='h1'>
			{props.children}
		</ChakraHeading>
	);
};

export default Heading;
