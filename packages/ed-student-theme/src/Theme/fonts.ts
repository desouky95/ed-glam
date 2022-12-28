import { MediaQuery } from './theme.types';

export const fontSizes: number[] = [10, 12, 14];

export type FontScale = 't1' | 't2' | 't3' | 't4' | 't5';

export type FontBx = `${MediaQuery}-${FontScale}`;

export type FontAliases = 'body' | 'display' | 'button' | FontBx;

export type FontSizesAliases = {
	[key in FontAliases]?: number | string;
};
export const fontSizesAliases: FontSizesAliases = {
	button: 0.875,
	'small-t1': '0.5rem',
	'small-t2': '0.625rem',
	'small-t3': '0.75rem',
	'small-t4': '0.875rem',
	'small-t5': '1rem',
	'medium-t1': '1.125rem',
	'medium-t2': '1.25rem',
	'medium-t3': '1.375rem',
	'medium-t4': '1.5rem',
	'medium-t5': '1.625rem',
	'large-t1': '1.75rem',
	'large-t2': '1.875rem',
	'large-t3': '2rem',
	'large-t4': '2.125rem',
};
