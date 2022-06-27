import { screen } from '@testing-library/react';
import { render } from 'src/test-utils';
import CurrentWeather from 'src/sections/CurrentWeather';

test('Component renders data', () => {
	render(<CurrentWeather current={{ city: 'Wrocław', icon: '10d', temp: 30, humidity: 30 }} />);

	const cityHeader = screen.getByRole('heading', { name: /wrocław/i });
	const icon = screen.getByRole('img', { name: /icon/i });
	const temp = screen.getByText(/30°C/i);
	const humidity = screen.getByText(/humidity/i);

	expect(cityHeader).toBeInTheDocument();
	expect(icon).toBeInTheDocument();
	expect(temp).toBeInTheDocument();
	expect(humidity).toBeInTheDocument();
});
