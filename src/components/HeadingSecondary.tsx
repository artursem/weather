import { FC } from 'react';
import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react';

const HeadingSecondary: FC<HeadingProps> = (props) => {
	return (
		<ChakraHeading {...props} as='h2'>
			{props.children}
		</ChakraHeading>
	);
};

export default HeadingSecondary;
