export type FontFamily =
	| 'Montserrat'
	| 'Mulish'
	| 'Cairo'
	| 'AvantGarde'
	| 'Roboto';

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

export type MaterialIconsType =
	| 'Regular'
	| 'Outlined'
	| 'Round'
	| 'Sharp'
	| 'TwoTone';

export type MaterialIconFontFace = {
	[key in MaterialIconsType]?: {
		src: string;
		mapped_name?: string;
	};
};
