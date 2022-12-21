import { ITheme, MediaQuery } from './theme.types';

export type ThemeButtonSizes = {
	[key in MediaQuery]?: {
		padding: string;
	};
};

export const getButtonSizes = (theme: ITheme): ThemeButtonSizes => {
	return {
		small: {
			padding: '0.5rem 2rem',
		},
		medium: {
			padding: '1.125rem 2rem',
		},
		large: {
			padding: '1.125rem 2rem',
		},
	};
};
