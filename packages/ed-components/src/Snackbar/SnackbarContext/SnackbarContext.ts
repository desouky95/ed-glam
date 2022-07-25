import { Color, XPosition, YPosition } from '@eduact/student-theme';
import { createContext } from 'react';

export type OpenSnackbarOptions = {
	timeout?: number;
	text: string;
	variant?: Color;
	vertical?: YPosition;
	horizontal?: XPosition;
	icon?: JSX.Element;
};
export type SnackbarContextArgs = {
	openSnackbar: (options: OpenSnackbarOptions) => void;
};

export const SnackbarContext = createContext<SnackbarContextArgs | null>(null);
