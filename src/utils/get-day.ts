export const getDayOfTheWeek = (i: number) => {
	if (i === 0) {
		return 'Tomorrow';
	}
	let day = new Date();
	day.setDate(day.getDate() + i + 1);
	const nameDay = Intl.DateTimeFormat(navigator.language, {
		weekday: 'long',
	}).format(day);
	return nameDay;
};
