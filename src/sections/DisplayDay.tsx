import { Forecast } from 'src/types/app-types';
import { HeadingSecondary, ListItem } from 'src/components';
import { getDayOfTheWeek } from 'src/utils/get-day';
import { Box } from '@chakra-ui/react';
type DisplayDayProps = {
	forecast: Forecast;
	date: number;
};

const DisplayDay = ({ forecast, date }: DisplayDayProps) => {
	const { day, humidity, maxTemp, minTemp, meanTemp, modeTemp, morning, night } = forecast;
	return (
		<ListItem mb='25' width='100%'>
			<HeadingSecondary>{getDayOfTheWeek(date)}</HeadingSecondary>
			<Box
				display='flex'
				justifyContent='space-between'
				width='100%'
				flexDirection={{ base: 'column', md: 'row' }}
			>
				<Box>
					<Box>Night temperature: {night}&deg;C</Box>
					<Box>Morning temperature: {morning}&deg;C</Box>
					<Box>Day temperature: {day}&deg;C</Box>
					<Box>Humidity: {humidity}%</Box>
				</Box>
				<Box>
					<Box>Min. temperature: {minTemp}&deg;C</Box>
					<Box>Max. temperature: {maxTemp}&deg;C</Box>
					<Box>Mean temperature: {meanTemp}&deg;C</Box>
					<Box>Mode temperature: {modeTemp}&deg;C</Box>
				</Box>
			</Box>
		</ListItem>
	);
};

export default DisplayDay;
