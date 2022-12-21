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
	return {
		small: {
			width: 33,
			height: 33,
			minWidth: 33,
			minHeight: 33,
		},
		medium: {
			width: 55,
			height: 55,
			minWidth: 55,
			minHeight: 55,
		},
		large: {
			width: 77,
			height: 77,
			minWidth: 77,
			minHeight: 77,
		},
		xlarge: {
			width: 100,
			height: 100,
			minHeight: 100,
			minWidth: 100,
		},
	};
};

export const getAvatarShapes = (theme: ITheme): AvatarShapes => {
	const { avatarShapes } = theme;
	return {
		circle: {
			borderRadius: '50%',
		},
		square: {
			borderRadius: '10px',
		},
	};
};
