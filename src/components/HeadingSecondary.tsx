import { FC } from 'react';
import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react';

const HeadingSecondary: FC<HeadingProps> = (props) => {
	return (
		<ChakraHeading {...props} as='h2' fontSize='1.2rem'>
			{props.children}
		</ChakraHeading>
	);
};

export default HeadingSecondary;
