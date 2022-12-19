import { ITheme, MediaQuery } from './theme.types';

export type ThemeButtonSizes = {
	[key in MediaQuery]?: {
		padding: string;
	};
};

export const getButtonSizes = (theme: ITheme): ThemeButtonSizes => {
	const { buttonSizes } = theme;

	return buttonSizes;
};
