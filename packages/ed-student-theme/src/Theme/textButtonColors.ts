import { number } from 'prop-types';
import {
	ButtonColors,
	Colors,
	ITheme,
	Color,
	ButtonColor,
	TextButtonColors,
} from './theme.types';

export const getTextButtonColors = (theme: ITheme): TextButtonColors => {
	const { colors } = theme;

	let textButtonColors = {} as TextButtonColors;

	Object.entries(colors).forEach(([key, value]) => {
		textButtonColors[key as Color] = {
			color: value,
		};
	});
	return textButtonColors;
};
