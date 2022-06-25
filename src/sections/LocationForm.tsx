import React from 'react';
import { Input, Stack, Button, Form } from 'src/components';

const LocationForm = () => {
	return (
		<Stack dir='horizontal'>
			<Form>
				<Input type='text' id='locationInput' />
				<Button type='submit'>go</Button>
				<Button type='button'>gps</Button>
			</Form>
		</Stack>
	);
};

export default LocationForm;
