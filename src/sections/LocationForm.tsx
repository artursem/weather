import { FormEvent, useState } from 'react';
import { Input, Stack, Button, Form } from 'src/components';

const LocationForm = () => {
	const [locationInput, setLocationInput] = useState('');
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log(locationInput);
	};
	const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
		setLocationInput(event.currentTarget.value);
	};
	return (
		<Stack dir='horizontal'>
			<Form onSubmit={handleSubmit}>
				<Input type='text' id='locationInput' value={locationInput} onChange={handleInputChange} />
				<Button type='submit'>go</Button>
				<Button type='button'>gps</Button>
			</Form>
		</Stack>
	);
};

export default LocationForm;
