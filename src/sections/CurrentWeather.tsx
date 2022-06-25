import React from 'react';
import { Card, Heading, HeadingSecondary, List, ListItem } from 'src/components';

type CurrentWeatherProps = {
	city: string;
	temp: number;
	icon: string;
};

const CurrentWeather = ({ city, icon, temp }: CurrentWeatherProps) => {
	return (
		<Card dir='column' alignItems='center'>
			<Heading>{city}</Heading>
			<img src='http://openweathermap.org/img/wn/10d@2x.png' alt='icon' />
			<HeadingSecondary>30*C</HeadingSecondary>
			<List>
				<ListItem>Morning temperature: </ListItem>
				<ListItem>Day temperature: </ListItem>
				<ListItem>Night temperature: </ListItem>
				<ListItem>Humidity: </ListItem>
			</List>
		</Card>
	);
};

export default CurrentWeather;
