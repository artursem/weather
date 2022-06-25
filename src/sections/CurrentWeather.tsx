import React from 'react';
import { Box } from 'src/components';

type CurrentWeatherProps = {
	city: string;
	temp: number;
	icon: string;
};

const CurrentWeather = (props: CurrentWeatherProps) => {
	return <Box>CurrentWeather</Box>;
};

export default CurrentWeather;
