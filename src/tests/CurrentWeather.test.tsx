import { screen } from '@testing-library/react';
import { render } from 'src/test-utils';
import CurrentWeather from 'src/sections/CurrentWeather';

test('Component renders data', () => {
	render(<CurrentWeather city='Wrocław' icon='' temp={30} />);

	const cityHeader = screen.getByRole('heading', { name: /wrocław/i });
	const icon = screen.getByRole('img', { name: /icon/i });
	const morningTemp = screen.getByText(/morning/i);
	const dayTemp = screen.getByText(/day/i);
	const nightTemp = screen.getByText(/night/i);
	const humidity = screen.getByText(/humidity/i);

	expect(cityHeader).toBeInTheDocument();
	expect(icon).toBeInTheDocument();
	expect(morningTemp).toBeInTheDocument();
	expect(dayTemp).toBeInTheDocument();
	expect(nightTemp).toBeInTheDocument();
	expect(humidity).toBeInTheDocument();

	// a. Minimum value
	// b. Maximum value
	// c. Mean value
	// d. Mode value
});
