export type Spaces = 'margin' | 'margin-bottom';

export type ThemeSpace = {
	[key in Spaces]: number[];
};

export const space: ThemeSpace = {
	margin: [],
	'margin-bottom': [10, 12, 14],
};
