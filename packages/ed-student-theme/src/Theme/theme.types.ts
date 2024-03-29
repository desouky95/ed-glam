import { AvatarShapes, AvatarSizes } from './avatars';
import { ThemeButtonSizes } from './buttonSizes';
import { DocumentDir } from './direction';
import { ThemeFontFamily } from './fontFamily';
import { FontSizesAliases } from './fonts';
import { MediaQueries, MediaQueriesFnx } from './mediaQueries';
import { ThemeSpace } from './space';
import { ThemeTableLayouts } from './tableLayout';

export const Colors = {
	primary: '#5AC0FC',
	light: '#FFF',
	dark: '#000',
	cultured: '#F9FAFC',
	darkCultured: '#F3F3F3',
	silver: '#c4c4c4',
	darkSilver: '#757575',
	platinum: '#e6e6e6',
	purple: '#6C63FF',
	maxBluePurple: '#B5B1FF',
	independence: '#3f3d56',
	spanishGray: '#979797',
	princetonOrange: '#FF8532',
	lavender: '#F0EFFF',
	yellow: '#ffdd6d',
	orange: '#F55F44',
	red: '#dc3545',
	purpleNavy: '#575A89',
	green: '#00d66b',
	lightRed: '#ff3100',
};

export type Breakpoint = 'default' | 'sm' | 'md' | 'lg' | 'xl';
export type BreakpointInPx = 832 | 1024 | 1280;

export type MediaQuery = 'small' | 'medium' | 'large' | 'xlarge';
export type MediaQueriesFns = 'max' | 'min';
type FontScale = 't1' | 't2' | 't3' | 't4' | 't5';
export type FontBx = `${MediaQuery}-${FontScale}`;
export type Shapes = 'circle' | 'square';
export type FontAliases = 'body' | 'display' | 'button' | FontBx;
export type Spaces = 'margin' | 'margin-bottom';
export type Mode = 'rtl' | 'ltr';

export type TableLayout = 'fixed' | 'auto';
export type Orientation = 'horizontal' | 'vertical';
export interface TableLayoutProps {
	tableLayout?: TableLayout;
}

export type FontFamily = 'Montserrat' | 'Mulish' | 'Cairo' | 'AvantGarde';
export type MaterialIconsType =
	| 'Regular'
	| 'Outlined'
	| 'Round'
	| 'Sharp'
	| 'TwoTone';
export type FontWeight =
	| 'normal'
	| '500'
	| 'bold'
	| 'bolder'
	| 'light'
	| '400'
	| '300'
	| '200'
	| '100'
	| 'lighter'
	| '800'
	| '700'
	| '600'
	| '900';
export interface Fonts {
	fonts: {
		[key in FontFamily]: {
			[key in FontWeight]?: any;
		};
	};
}
export type MaterialIconFontFace = {
	[key in MaterialIconsType]?: {
		src: string;
		mapped_name?: string;
	};
};

export type ResponsiveVal<T> = T | { [key in Breakpoint]?: T };

export type Color = keyof typeof Colors;

export type XPosition = 'left' | 'right' | 'center';
export type YPosition = 'top' | 'bottom';
export type Position = XPosition | YPosition;
export type AxisPosition = {
	vertical: YPosition;
	horizontal: XPosition;
};

export type ButtonColor = {
	background: string;
	color: string;
	borderColor: string;
};
export type ButtonColors = {
	[key in Color]?: ButtonColor;
};
export type TextButtonColor = {
	color: string;
};
export type TextButtonColors = {
	[key in Color]?: {
		color: string;
	};
};

export type Backgrounds = {
	[key in Color]: {
		backgroundColor: string;
	};
};

export type Background = {
	backgroundColor: string;
};

export interface ITheme {
	colors: {
		[key in Color]: string;
	};

	buttonColors?: ButtonColors;
	textButtonColors?: {
		[key in Color]?: {
			color: string;
		};
	};
	backgrounds?: Backgrounds;

	breakpoints: {
		[key in Breakpoint]?: string;
	};
	breakpointsInPx: { [key in Breakpoint]: number };
	mediaQueries: MediaQueries & MediaQueriesFnx;
	borderRadii: {
		[key in MediaQuery]: number;
	};
	fontSizes: number[];
	fontSizesAliases: FontSizesAliases;
	space: ThemeSpace;
	fontFamilies: ThemeFontFamily;
	avatarSizes: AvatarSizes;
	avatarShapes: AvatarShapes;
	tableLayout: ThemeTableLayouts;
	buttonSizes: ThemeButtonSizes;
	circularProgressColors: {
		[Key in Color]?: {
			stroke: string;
		};
	};
	circularProgressSizes: {
		[Key in MediaQuery]?: {
			'--size': string;
			width: string;
			height: string;
			fontSize: string;
			'--stroke-width': string;
		};
	};
	stepperIconSizes: {
		[Key in MediaQuery]?: {
			width: string;
			height: string;
		};
	};
	stepperIconColors: {
		[Key in Color]?: {
			background: string;
			borderColor: string;
		};
	};
	direction: DocumentDir;
}
