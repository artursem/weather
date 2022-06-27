import { FormEvent, useState } from 'react';
import { Method, Query } from 'src/types/app-types';
import { Input, Stack, Button, Form, PinAlt, Search } from 'src/components';

type LocationFormProps = {
	onSearch: (query: Query) => void;
};

const LocationForm = ({ onSearch }: LocationFormProps) => {
	const [locationInput, setLocationInput] = useState('');
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if (locationInput.length === 0) {
			return;
		}
		onSearch({ method: Method.byCity, city: locationInput });
	};
	const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
		setLocationInput(event.currentTarget.value);
	};
	return (
		<Stack dir='horizontal'>
			<Form onSubmit={handleSubmit}>
				<Input type='text' id='locationInput' value={locationInput} onChange={handleInputChange} />
				<Button type='submit' aria-label='Search'>
					<Search />
				</Button>
				<Button type='button' aria-label='Weather for current location'>
					<PinAlt />
				</Button>
			</Form>
		</Stack>
	);
};

export default LocationForm;
