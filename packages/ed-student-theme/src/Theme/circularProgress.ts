import { Color, ITheme, MediaQuery } from './theme.types';

export type CircularProgressColors = {
	[Key in Color]?: {
		stroke: string;
	};
};
export type CircularProgressSizes = {
	[Key in MediaQuery]?: {
		'--size': string;
		width: string;
		height: string;
		fontSize: string;
		'--stroke-width': string;
	};
};
export const getCircularProgressColors = (
	theme: ITheme
): CircularProgressColors => {
	const { colors } = theme;

	let circularProgressColors = {} as CircularProgressColors;
	Object.entries(colors).forEach(([key, value]) => {
		circularProgressColors[key as Color] = {
			stroke: value,
		};
	});
	return circularProgressColors;
};

export const circularProgressSizes = {
	small: {
		'--size': '30',
		width: '30px',
		height: '30px',
		fontSize: '0.5rem',
		'--stroke-width': '3',
	},
	medium: {
		'--size': '40',
		width: '40px',
		height: '40px',
		fontSize: '0.75rem',
		'--stroke-width': '4',
	},
	large: {
		'--size': '50',
		width: '50px',
		height: '50px',
		fontSize: '0.75rem',
		'--stroke-width': '4',
	},
	xlarge: {
		'--size': '100',
		width: '100px',
		height: '100px',
		fontSize: '1rem',
		'--stroke-width': '4',
	},
};
