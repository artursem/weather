import ForecastResponse from 'src/types/api-types';
import convertFtoC from 'src/utils/temp';

type Measure = {
	day: string;
	icon: string;
	temp: number;
	humidity: number;
};

type Day = Measure[];

export const formatForecast = (data: ForecastResponse) => {
	const formatedArr = data.list.map((day) => {
		return {
			day: new Date(day.dt * 1000).toISOString().split('T')[0],
			icon: day.weather[0].icon,
			temp: day.main.temp,
			humidity: day.main.humidity,
		};
	});

	const separateIntoDays = (arr: any) => {
		return arr.reduce((acc: any, cur: any) => {
			acc[cur['day']] = [...(acc[cur['day']] || []), cur];
			return acc;
		}, {});
	};

	const getStats = (day: Day) => {
		const allTemps = day.map((measure: Measure) => measure.temp);

		const meanTemp = Math.floor(
			allTemps.reduce((acc: number, val: number) => {
				return acc + val;
			}, 0) / allTemps.length
		);

		const mode = (arr: number[]) => {
			const mode: any = {};
			let max = 0,
				count = 0;
			for (let i = 0; i < arr.length; i++) {
				const item = arr[i];
				if (mode[item]) {
					mode[item]++;
				} else {
					mode[item] = 1;
				}
				if (count < mode[item]) {
					max = item;
					count = mode[item];
				}
			}
			return max;
		};

		const stats = {
			night: convertFtoC(Math.floor(day[0].temp)),
			morning: convertFtoC(Math.floor(day[0].temp)),
			day: convertFtoC(Math.floor(day[4].temp)),
			humidity: day[4].humidity,
			minTemp: convertFtoC(Math.min(...allTemps)),
			maxTemp: convertFtoC(Math.max(...allTemps)),
			meanTemp: convertFtoC(meanTemp),
			modeTemp: convertFtoC(mode(allTemps)),
		};
		return stats;
	};

	const separatedDays = separateIntoDays(formatedArr);
	const allValues: any = Object.values(separatedDays);
	const valuesToStats = allValues.slice(1).map((val: any) => getStats(val));
	return valuesToStats;
};
