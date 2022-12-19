import { ITheme } from './theme.types';

export type ThemeFontFamily = {
	main: string;
};

export const fontFamily: ThemeFontFamily = {
	main: 'Montserrat',
};

export const getFontFamily = (theme: ITheme): ThemeFontFamily => {
	const { fontFamilies } = theme;
	return fontFamilies;
};
