import { css, FlattenSimpleInterpolation } from 'styled-components';
import { get, merge } from 'lodash';
import {
	Breakpoint,
	Color,
	Colors,
	FontAliases,
	FontFamily,
	Fonts,
	MaterialIconFontFace,
	MaterialIconsType,
	MediaQuery,
	Shapes,
	Spaces,
	TableLayout,
	Mode,
	ITheme,
} from './theme.types';
import { getButtonColors } from './buttonColors';
import { getTextButtonColors } from './textButtonColors';
import { getBackgrounds } from './backgrounds';
import { radii } from './radii';
import { getFontFamily } from './fontFamily';
import { getAvatarShapes, getAvatarSizes } from './avatars';
import { tableLayouts } from './tableLayout';
import { getButtonSizes } from './buttonSizes';
import {
	circularProgressSizes,
	getCircularProgressColors,
} from './circularProgress';
import { getStepperIconsColors, stepperIconSizes } from './stepper';
import {
	aliasBreakpoints,
	breakpointsInPx,
	mediaQueries,
} from './mediaQueries';
import { DocumentDir, getThemeDirection } from './direction';
import { fontSizes, fontSizesAliases } from './fonts';
import { space } from './space';

export const Theme: ITheme = {
	colors: Colors,

	buttonColors: {
		primary: {
			color: Colors.light,
			background: Colors.primary,
			borderColor: Colors.primary,
		},
		purple: {
			color: Colors.light,
			background: Colors.purple,
			borderColor: Colors.purple,
		},
		dark: {
			color: Colors.light,
			background: Colors.dark,
			borderColor: Colors.dark,
		},
		maxBluePurple: {
			color: Colors.light,
			background: Colors.maxBluePurple,
			borderColor: Colors.maxBluePurple,
		},
		independence: {
			color: Colors.light,
			background: Colors.independence,
			borderColor: Colors.independence,
		},
		spanishGray: {
			color: Colors.light,
			background: Colors.spanishGray,
			borderColor: Colors.spanishGray,
		},
		princetonOrange: {
			color: Colors.light,
			background: Colors.princetonOrange,
			borderColor: Colors.princetonOrange,
		},
		silver: {
			color: Colors.light,
			background: Colors.silver,
			borderColor: Colors.silver,
		},
		purpleNavy: {
			color: Colors.light,
			background: Colors.purpleNavy,
			borderColor: Colors.purpleNavy,
		},
		green: {
			color: Colors.light,
			background: Colors.green,
			borderColor: Colors.green,
		},
		lightRed: {
			color: Colors.light,
			background: Colors.lightRed,
			borderColor: Colors.lightRed,
		},
		orange: {
			color: Colors.light,
			background: Colors.orange,
			borderColor: Colors.orange,
		},
		red: {
			color: Colors.light,
			background: Colors.red,
			borderColor: Colors.red,
		},
		light: {
			color: Colors.dark,
			background: Colors.light,
			borderColor: Colors.light,
		},
		cultured: {
			color: Colors.dark,
			background: Colors.cultured,
			borderColor: Colors.cultured,
		},
		platinum: {
			color: Colors.dark,
			background: Colors.platinum,
			borderColor: Colors.platinum,
		},
		lavender: {
			color: Colors.dark,
			background: Colors.lavender,
			borderColor: Colors.lavender,
		},
		darkCultured: {
			color: Colors.dark,
			background: Colors.darkCultured,
			borderColor: Colors.darkCultured,
		},
		yellow: {
			color: Colors.dark,
			background: Colors.yellow,
			borderColor: Colors.yellow,
		},
		darkSilver: {
			color: Colors.dark,
			background: Colors.darkSilver,
			borderColor: Colors.darkSilver,
		},
	},
	textButtonColors: {
		primary: {
			color: Colors.primary,
		},
		cultured: {
			color: Colors.cultured,
		},
		dark: {
			color: Colors.dark,
		},
		light: {
			color: Colors.light,
		},
		platinum: {
			color: Colors.platinum,
		},
		purple: {
			color: Colors.purple,
		},
		maxBluePurple: {
			color: Colors.maxBluePurple,
		},
		independence: {
			color: Colors.independence,
		},
		spanishGray: {
			color: Colors.spanishGray,
		},
		princetonOrange: {
			color: Colors.princetonOrange,
		},
		darkCultured: {
			color: Colors.darkCultured,
		},
		lavender: {
			color: Colors.lavender,
		},
		yellow: {
			color: Colors.yellow,
		},
		red: {
			color: Colors.red,
		},
		orange: {
			color: Colors.orange,
		},
		darkSilver: { color: Colors.darkSilver },
		purpleNavy: { color: Colors.purpleNavy },
		silver: { color: Colors.silver },
	},
	backgrounds: {
		cultured: {
			backgroundColor: Colors.cultured,
		},
		dark: {
			backgroundColor: Colors.dark,
		},
		light: {
			backgroundColor: Colors.light,
		},
		maxBluePurple: {
			backgroundColor: Colors.maxBluePurple,
		},
		platinum: {
			backgroundColor: Colors.platinum,
		},
		primary: {
			backgroundColor: Colors.primary,
		},
		purple: {
			backgroundColor: Colors.purple,
		},
		independence: {
			backgroundColor: Colors.independence,
		},
		spanishGray: {
			backgroundColor: Colors.spanishGray,
		},
		princetonOrange: {
			backgroundColor: Colors.princetonOrange,
		},
		darkCultured: {
			backgroundColor: Colors.darkCultured,
		},
		lavender: {
			backgroundColor: Colors.lavender,
		},
		yellow: {
			backgroundColor: Colors.yellow,
		},
		red: {
			backgroundColor: Colors.red,
		},
		purpleNavy: {
			backgroundColor: Colors.purpleNavy,
		},
		silver: {
			backgroundColor: Colors.silver,
		},
		darkSilver: {
			backgroundColor: Colors.darkSilver,
		},
		orange: {
			backgroundColor: Colors.orange,
		},
		green: {
			backgroundColor: Colors.green,
		},
		lightRed: {
			backgroundColor: Colors.lightRed,
		},
	},
	breakpoints: aliasBreakpoints,
	breakpointsInPx: breakpointsInPx,
	mediaQueries: {
		small: `@media screen and (max-width : ${aliasBreakpoints.md})`,
		medium: `@media screen and (min-width : ${aliasBreakpoints.md})`,
		large: `@media screen and (min-width : ${aliasBreakpoints.lg})`,
		xlarge: `@media screen and (min-width : ${aliasBreakpoints.xl})`,
		min: (value: number) => `@media screen and (min-width : ${value}px)`,
		max: (value: number) => `@media screen and (max-width : ${value}px)`,
	},
	borderRadii: radii,
	fontSizes: [10, 12, 14],
	fontSizesAliases: {
		button: 0.875,
		'small-t1': '0.5rem',
		'small-t2': '0.625rem',
		'small-t3': '0.75rem',
		'small-t4': '0.875rem',
		'small-t5': '1rem',
		'medium-t1': '1.125rem',
		'medium-t2': '1.25rem',
		'medium-t3': '1.375rem',
		'medium-t4': '1.5rem',
		'medium-t5': '1.625rem',
		'large-t1': '1.75rem',
		'large-t2': '1.875rem',
		'large-t3': '2rem',
		'large-t4': '2.125rem',
	},
	space: {
		margin: [],
		'margin-bottom': [10, 12, 14],
	},
	fontFamilies: {
		main: 'Montserrat',
	},
	avatarSizes: {
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
	},
	avatarShapes: {
		circle: {
			borderRadius: '50%',
		},
		square: {
			borderRadius: '10px',
		},
	},

	tableLayout: {
		fixed: {
			tableLayout: 'fixed',
		},
		auto: {
			tableLayout: 'auto',
		},
	},
	buttonSizes: {
		small: {
			padding: '0.5rem 2rem',
		},
		medium: {
			padding: '1.125rem 2rem',
		},
		large: {
			padding: '1.125rem 2rem',
		},
	},
	direction: (document.documentElement.dir as DocumentDir) ?? 'ltr',
	circularProgressColors: {
		primary: {
			stroke: Colors.primary,
		},
	},
	circularProgressSizes: {
		small: {
			'--size': '30',
			width: '30px',
			height: '30px',
			fontSize: '0.5rem',
			'--stroke-width': '3',
		},
		medium: {
			'--size': '40',
			width: '40px',
			height: '40px',
			fontSize: '0.75rem',
			'--stroke-width': '4',
		},
		large: {
			'--size': '50',
			width: '50px',
			height: '50px',
			fontSize: '0.75rem',
			'--stroke-width': '4',
		},
		xlarge: {
			'--size': '100',
			width: '100px',
			height: '100px',
			fontSize: '1rem',
			'--stroke-width': '4',
		},
	},
	stepperIconSizes: {
		small: {
			width: '1.406rem',
			height: '1.406rem',
		},
	},
	stepperIconColors: {
		primary: {
			background: Colors.primary,
			borderColor: Colors.primary,
		},
		princetonOrange: {
			background: Colors.princetonOrange,
			borderColor: Colors.princetonOrange,
		},
		spanishGray: {
			background: Colors.spanishGray,
			borderColor: Colors.spanishGray,
		},
	},
};

type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
	  }
	: T;
export const createTheme = (options: DeepPartial<ITheme>) => {
	let theme = {} as ITheme;
	theme.colors = Colors;
	theme.borderRadii = radii;
	theme.tableLayout = tableLayouts;
	theme.circularProgressSizes = circularProgressSizes;
	theme.stepperIconSizes = stepperIconSizes;
	theme.mediaQueries = mediaQueries;
	theme.breakpoints = aliasBreakpoints;
	theme.breakpointsInPx = breakpointsInPx;
	theme.fontSizes = fontSizes;
	theme.fontSizesAliases = fontSizesAliases;
	theme.space = space;
	theme = merge({}, theme, options);
	theme.fontFamilies = getFontFamily(theme);
	theme.buttonSizes = getButtonSizes(theme);
	theme.avatarShapes = getAvatarShapes(theme);
	theme.avatarSizes = getAvatarSizes(theme);
	theme.buttonColors = getButtonColors(theme);
	theme.textButtonColors = getTextButtonColors(theme);
	theme.backgrounds = getBackgrounds(theme);
	theme.circularProgressColors = getCircularProgressColors(theme);
	theme.stepperIconColors = getStepperIconsColors(theme);
	theme.direction = getThemeDirection();

	theme = merge({}, theme, options);
	return theme;
};
declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}

export const generateMaterialIconsFontFaces = (
	material_icons: MaterialIconFontFace
) => {
	let css_string = '';
	const familyBaseName = 'Material Icons';
	const getTypeName = (type: string) => {
		return material_icons[type as MaterialIconsType]?.mapped_name ?? ` ${type}`;
	};

	Object.keys(material_icons).forEach((type) => {
		const src = material_icons[type as MaterialIconsType]?.src;
		const typeFamilyName = `${familyBaseName}${
			getTypeName(type).length > 0 ? ` ${getTypeName(type)}` : ''
		}`;
		const typeClassName = `.material-icons${`${
			getTypeName(type).length > 0 ? '-' : ''
		}${getTypeName(type).toLocaleLowerCase()}`}`;
		const typeCss = `
		@font-face {
		  font-family: "${typeFamilyName}";
		  font-style: normal;
		  font-weight: 400;
		  src: url(${src}) ;
		}
		${typeClassName}{
		  font-family: "${typeFamilyName}";
		  font-weight: normal;
		  font-style: normal;
		  // font-size: 24px;
		  line-height: 1;
		  letter-spacing: normal;
		  text-transform: none;
		  display: inline-block;
		  white-space: nowrap;
		  word-wrap: normal;
		  direction: ltr;
		  -webkit-font-feature-settings: "liga";
		  -webkit-font-smoothing: antialiased;
		}
	  `;
		css_string += typeCss;
	});
	return css`
		${css_string}
	`;
};

export const createGlobalFont = (
	font: FontFamily,
	fontWeightsSrc: Fonts
): FlattenSimpleInterpolation => {
	const weights = fontWeightsSrc.fonts[font];
	let styles = '';
	Object.keys(weights).forEach((weight, index) => {
		styles += `@font-face {
	    font-family : '${font}';
      	src: url(${Object.values(weights)[index]});
	    font-weight : ${weight};
	  }`;
	});
	return css`
		${styles}
	`;
};
