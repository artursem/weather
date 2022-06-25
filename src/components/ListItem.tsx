import { FC } from 'react';
import { ListItem as ChakraListItem, ListItemProps } from '@chakra-ui/react';

const ListItem: FC<ListItemProps> = (props) => {
	return (
		<ChakraListItem {...props} as='h1'>
			{props.children}
		</ChakraListItem>
	);
};

export default ListItem;
