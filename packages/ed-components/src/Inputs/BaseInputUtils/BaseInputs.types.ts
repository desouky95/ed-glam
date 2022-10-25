import { Color } from '@eduact/student-theme';
import { Control, Path, UseFormRegister } from 'react-hook-form';
import { Property } from 'csstype';
export type InputBaseError = {
	error?: boolean;
	helperText?: string;
	withHelperText?: boolean;
};
export type InputBaseUIProps = {
	background?: Color | Property.Background;
};
enum DateTimeInputTypes {
	'datetime-local',
	'date',
	'month',
	'time',
	'week',
}

export const isDatetime = (string: unknown): string is DateTimeInputTypes => {
	return typeof string === 'string' && string in DateTimeInputTypes;
};
export type DateTimeInput =
	| 'datetime-local'
	| 'date'
	| 'month'
	| 'time'
	| 'week';
