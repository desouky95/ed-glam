const NumberFormatter = (
	number: number | string,
	options?: Intl.NumberFormatOptions
) => {
	if (!Number(number)) throw new Error('Invalid number');

	const lang = document.documentElement.lang;

	return Intl.NumberFormat([lang], options).format(Number(number));
};

export default NumberFormatter;
