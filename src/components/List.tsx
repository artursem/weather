import { FC } from 'react';
import { List as ChakraList, ListProps } from '@chakra-ui/react';

const List: FC<ListProps> = (props) => {
	return (
		<ChakraList {...props} mb='-2rem'>
			{props.children}
		</ChakraList>
	);
};

export default List;
