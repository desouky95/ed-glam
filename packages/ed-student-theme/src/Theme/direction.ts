import { ITheme } from './theme.types';

export type DocumentDir = 'ltr' | 'rtl';

export const getThemeDirection = (): DocumentDir => {
	return 'ltr';
};
