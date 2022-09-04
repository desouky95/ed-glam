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
export type DocumentDir = 'ltr' | 'rtl';
export type MediaQuery = 'small' | 'medium' | 'large' | 'xlarge';
type FontScale = 't1' | 't2' | 't3' | 't4' | 't5';
export type FontBx = `${MediaQuery}-${FontScale}`;
export type Shapes = 'circle' | 'square';
export type FontAliases = 'body' | 'display' | 'button' | FontBx;
export type Spaces = 'margin' | 'margin-bottom';
export type Mode = 'light' | 'dark' | 'rtl' | 'ltr';

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
