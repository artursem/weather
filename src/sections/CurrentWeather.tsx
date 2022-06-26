import { Current } from 'src/types/app-types';
import { Card, Heading, HeadingSecondary, Icon } from 'src/components';

type CurrentWeatherProps = {
	current: Current;
};

const CurrentWeather = (props: CurrentWeatherProps) => {
	const { city, icon, temp, humidity } = props.current;
	return (
		<Card flexDirection='column' alignItems='center' justifyContent='center'>
			<Heading>{city}</Heading>
			<Icon condition={icon} isBig={true} />
			<HeadingSecondary>{temp}&deg;C</HeadingSecondary>
			<p>Humidity: {humidity}%</p>
		</Card>
	);
};

export default CurrentWeather;
