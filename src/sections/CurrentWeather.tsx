import Forecast from 'src/types/app-types';
import { Card, Heading, HeadingSecondary, List, ListItem, Icon } from 'src/components';

const CurrentWeather = ({ city, icon, dayTemp, morningTemp, humidity, nightTemp }: Forecast) => {
	return (
		<Card dir='column' alignItems='center'>
			<Heading>{city}</Heading>
			<Icon condition={icon} isBig={true} />
			<HeadingSecondary>30*C</HeadingSecondary>
			<List>
				<ListItem>Morning temperature: {morningTemp}&deg;C</ListItem>
				<ListItem>Day temperature: {dayTemp}&deg;C</ListItem>
				<ListItem>Night temperature: {nightTemp}&deg;C</ListItem>
				<ListItem>Humidity: {humidity}%</ListItem>
			</List>
		</Card>
	);
};

export default CurrentWeather;
