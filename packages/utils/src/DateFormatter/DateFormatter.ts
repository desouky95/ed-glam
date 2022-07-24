type FormatterOptions = {
	format?: '12H' | '24H';
	separator?: '-' | '/';
	withTime?: boolean;
} & Intl.DateTimeFormatOptions;

function DateFormatter(date?: Date, options?: FormatterOptions): string {
	if (!date) throw new Error("Date isn't provided");
	const _newDate = new Date(date);
	let locale = localStorage.getItem('lang');
	const mappedLocale = !locale ? 'en-US' : locale === 'ar' ? 'ar-EG' : 'en-US';

	const _parsedDate = new Intl.DateTimeFormat([mappedLocale], {
		hour12: options?.hour12,
		day: options?.day ?? 'numeric',
		month: options?.month ?? 'numeric',
		year: options?.year,
		hour: options?.withTime ? 'numeric' : undefined,
	}).format(_newDate);
	return _parsedDate;
}

export default DateFormatter;
export { DateFormatter };
