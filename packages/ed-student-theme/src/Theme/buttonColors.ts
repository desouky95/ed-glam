import { number } from 'prop-types';
import { ButtonColors, ITheme, Color, ButtonColor } from './theme.types';

export const getButtonColors = (theme: ITheme): ButtonColors => {
	const { colors } = theme;
	let buttonColors = {} as ButtonColors;
	const defaultLight = { color: colors.light };
	const defaultDark = { color: colors.dark };

	return {
		primary: {
			...defaultLight,
			background: colors.primary,
			borderColor: colors.primary,
		},
		purple: {
			...defaultLight,
			background: colors.purple,
			borderColor: colors.purple,
		},
		dark: {
			...defaultLight,
			background: colors.dark,
			borderColor: colors.dark,
		},
		maxBluePurple: {
			...defaultLight,
			background: colors.maxBluePurple,
			borderColor: colors.maxBluePurple,
		},
		independence: {
			...defaultLight,
			background: colors.independence,
			borderColor: colors.independence,
		},
		spanishGray: {
			...defaultLight,
			background: colors.spanishGray,
			borderColor: colors.spanishGray,
		},
		princetonOrange: {
			...defaultLight,
			background: colors.princetonOrange,
			borderColor: colors.princetonOrange,
		},
		silver: {
			...defaultLight,
			background: colors.silver,
			borderColor: colors.silver,
		},
		purpleNavy: {
			...defaultLight,
			background: colors.purpleNavy,
			borderColor: colors.purpleNavy,
		},
		green: {
			...defaultLight,
			background: colors.green,
			borderColor: colors.green,
		},
		lightRed: {
			...defaultLight,
			background: colors.lightRed,
			borderColor: colors.lightRed,
		},
		orange: {
			...defaultLight,
			background: colors.orange,
			borderColor: colors.orange,
		},
		red: {
			...defaultLight,
			background: colors.red,
			borderColor: colors.red,
		},
		light: {
			...defaultDark,
			background: colors.light,
			borderColor: colors.light,
		},
		cultured: {
			...defaultDark,
			background: colors.cultured,
			borderColor: colors.cultured,
		},
		platinum: {
			...defaultDark,
			background: colors.platinum,
			borderColor: colors.platinum,
		},
		lavender: {
			...defaultDark,
			background: colors.lavender,
			borderColor: colors.lavender,
		},
		darkCultured: {
			...defaultDark,
			background: colors.darkCultured,
			borderColor: colors.darkCultured,
		},
		yellow: {
			...defaultDark,
			background: colors.yellow,
			borderColor: colors.yellow,
		},
		darkSilver: {
			...defaultDark,
			background: colors.darkSilver,
			borderColor: colors.darkSilver,
		},
	};
};
