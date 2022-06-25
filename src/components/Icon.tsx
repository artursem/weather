type IconProps = {
	condition: string;
	isBig?: boolean;
};

const Icon = ({ condition, isBig }: IconProps) => {
	const size = isBig === false ? '@2x' : '@4x';
	return <img src={`http://openweathermap.org/img/wn/${condition}${size}.png`} alt='icon' />;
};

export default Icon;
