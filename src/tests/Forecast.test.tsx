import { screen } from '@testing-library/react';
import { render } from 'src/test-utils';
// import CurrentWeather from 'src/sections/CurrentWeather';
import DisplayForecast from 'src/sections/DisplayForecast';

test('Component renders data', () => {
	render(
		<DisplayForecast
			forecast={[
				{
					night: 0,
					morning: 0,
					day: 0,
					humidity: 0,
					minTemp: 0,
					maxTemp: 0,
					meanTemp: 0,
					modeTemp: 0,
				},
			]}
		/>
	);

	const heading = screen.getByRole('heading', { name: /tomorrow/i });
	const nightTemp = screen.getByText(/night temperature/i);
	const morningTemp = screen.getByText(/morning temperature/i);
	const humidity = screen.getByText(/humidity/i);
	const minTemp = screen.getByText(/min. temperature/i);
	const maxTemp = screen.getByText(/max. temperature/i);
	const meanTemp = screen.getByText(/mean temperature/i);
	const modeTemp = screen.getByText(/mode temperature/i);

	expect(heading).toBeInTheDocument();
	expect(nightTemp).toBeInTheDocument();
	expect(morningTemp).toBeInTheDocument();
	expect(humidity).toBeInTheDocument();
	expect(minTemp).toBeInTheDocument();
	expect(maxTemp).toBeInTheDocument();
	expect(meanTemp).toBeInTheDocument();
	expect(modeTemp).toBeInTheDocument();
});
