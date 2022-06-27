import { screen } from '@testing-library/react';
import { render } from 'src/test-utils';
import LocationForm from 'src/sections/LocationForm';

test('LocationForm component renders form', () => {
	render(<LocationForm onSearch={jest.fn} />);
	const input = screen.getByRole('textbox');
	const searchBtn = screen.getByRole('button', { name: /search/i });
	const gpsBtn = screen.getByRole('button', { name: /weather for current location/i });
	expect(input).toBeInTheDocument();
	expect(gpsBtn).toBeInTheDocument();
	expect(searchBtn).toBeInTheDocument();
});
