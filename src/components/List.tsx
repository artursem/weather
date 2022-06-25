import { FC } from 'react';
import { List as ChakraList, ListProps } from '@chakra-ui/react';

const List: FC<ListProps> = (props) => {
	return (
		<ChakraList {...props} as='h1'>
			{props.children}
		</ChakraList>
	);
};

export default List;
