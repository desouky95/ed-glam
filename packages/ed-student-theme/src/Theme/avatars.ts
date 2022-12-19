import { ITheme, MediaQuery, Shapes } from './theme.types';

export type AvatarSizes = {
	[key in MediaQuery]?: {
		width: number;
		height: number;
		minWidth: number;
		minHeight: number;
	};
};
export type AvatarShapes = {
	[key in Shapes]: {
		borderRadius: string;
	};
};

export const getAvatarSizes = (theme: ITheme): AvatarSizes => {
	const { avatarSizes } = theme;
	return avatarSizes;
};

export const getAvatarShapes = (theme: ITheme): AvatarShapes => {
	const { avatarShapes } = theme;
	return avatarShapes;
};
