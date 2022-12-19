import { number } from 'prop-types';
import {
	ButtonColors,
	Colors,
	ITheme,
	Color,
	ButtonColor,
	Backgrounds,
} from './theme.types';

export const getBackgrounds = (theme: ITheme): Backgrounds => {
	const { colors } = theme;
	let backgrounds = {} as Backgrounds;

	Object.entries(colors).forEach(([key, value]) => {
		backgrounds[key as Color] = {
			backgroundColor: value,
		};
	});
	return backgrounds;
};
