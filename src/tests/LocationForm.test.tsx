import { screen } from '@testing-library/react';
import { render } from 'src/test-utils';
import LocationForm from 'src/sections/LocationForm';

test('LocationForm component renders form', () => {
	render(<LocationForm />);
	const input = screen.getByRole('textbox');
	const searchBtn = screen.getByRole('button', { name: /go/i });
	const gpsBtn = screen.getByRole('button', { name: /gps/i });
	expect(input).toBeInTheDocument();
	expect(gpsBtn).toBeInTheDocument();
	expect(searchBtn).toBeInTheDocument();
});
