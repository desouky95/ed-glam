import { css, FlattenSimpleInterpolation } from 'styled-components';
import { get, merge } from 'lodash';
import {
	Breakpoint,
	Color,
	Colors,
	DocumentDir,
	FontAliases,
	FontFamily,
	Fonts,
	MaterialIconFontFace,
	MaterialIconsType,
	MediaQuery,
	Shapes,
	Spaces,
	TableLayout,
} from './theme.types';
import { Mode } from 'fs';

const breakpoints = ['640px', '769px', '1201px', '1441px'];

const breakpointsInPx = {
	sm: 0,
	default: 0,
	md: 768,
	lg: 1200,
	xl: 1440,
};

const aliasBreakpoints: { [key in Breakpoint]?: string } = {
	// sm: '',
	// default: '',
	md: breakpoints[1],
	// md: '48rem',
	lg: breakpoints[2],
	// lg: '64rem',
	xl: breakpoints[3],
};

interface ITheme {
	colors: {
		[key in Color]: string;
	};
	modes: {
		[key in Mode]?: {
			colors?: {
				[key in Color]?: string;
			};
			buttonColors?: {
				[key in Color]?: {
					background: string;
					color: string;
					borderColor: string;
				};
			};
			textButtonColors?: {
				[key in Color]?: {
					color: string;
				};
			};

			backgrounds?: {
				[key in Color]: {
					backgroundColor: string;
				};
			};
			circularProgressColors?: {
				[Key in Color]?: {
					stroke: string;
				};
			};
			direction?: 'rtl' | 'ltr';
		};
	};
	buttonColors?: {
		[key in Color]?: {
			background: string;
			color: string;
			borderColor: string;
		};
	};
	textButtonColors?: {
		[key in Color]?: {
			color: string;
		};
	};
	backgrounds?: {
		[key in Color]: {
			backgroundColor: string;
		};
	};

	breakpoints: {
		[key in Breakpoint]?: string;
	};
	breakpointsInPx: { [key in Breakpoint]: number };
	mediaQueries: {
		[key in MediaQuery]?: string;
	};
	borderRadii: {
		[key in MediaQuery]: number;
	};
	fontSizes: number[];
	fontSizesAliases: {
		[key in FontAliases]?: number | string;
	};
	space: {
		[key in Spaces]: number[];
	};
	fontFamilies: {
		main: string;
	};
	avatarSizes: {
		[key in MediaQuery]?: {
			width: number | string;
			height: number | string;
			minWidth: number;
			minHeight: number;
		};
	};
	avatarShapes: {
		[key in Shapes]: {
			borderRadius: string;
		};
	};
	tableLayout: {
		[key in TableLayout]: {
			tableLayout: TableLayout;
		};
	};
	buttonSizes: {
		[key in MediaQuery]?: {
			padding: string;
		};
	};
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

export const Theme: ITheme = {
	colors: Colors,
	modes: {
		rtl: {
			direction: 'rtl',
		},
		ltr: {
			direction: 'ltr',
		},
	},
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
		maxBluePurple: {
			color: Colors.light,
			background: Colors.maxBluePurple,
			borderColor: Colors.maxBluePurple,
		},
		lavender: {
			color: Colors.dark,
			background: Colors.lavender,
			borderColor: Colors.lavender,
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
	},
	borderRadii: {
		small: 20,
		medium: 30,
		large: 40,
		xlarge: 50,
	},
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
			width: '6.25em',
			height: '6.25em',
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
};
export const getTheme = (mode?: Mode) => {
	if (!mode) return Theme;
	return merge({}, Theme, {
		colors: get(Theme.modes[mode], mode, Theme.modes[mode]?.colors),
		buttonColors: get(Theme.modes[mode], mode, Theme.modes[mode]?.buttonColors),
		textButtonColors: get(
			Theme.modes[mode],
			mode,
			Theme.modes[mode]?.textButtonColors
		),
		backgrounds: get(Theme.modes[mode], mode, Theme.modes[mode]?.backgrounds),
		direction: get(Theme.modes[mode], mode, Theme.modes[mode]?.direction),
		circularProgressColors: get(
			Theme.modes[mode],
			mode,
			Theme.modes[mode]?.circularProgressColors
		),
	});
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
