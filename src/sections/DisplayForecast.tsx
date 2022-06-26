import { Forecast } from 'src/types/app-types';
import { Card, List } from 'src/components';
import DisplayDay from './DisplayDay';

type DisplayForecastProps = {
	forecast: Forecast[];
};

const DisplayForecast = (props: DisplayForecastProps) => {
	const list = props.forecast.map((dayStats, index) => {
		return <DisplayDay key={index} forecast={dayStats} date={index} />;
	});
	return (
		<Card>
			<List width='100%' display='flex' flexDirection='column'>
				{list}
			</List>
		</Card>
	);
};

export default DisplayForecast;
