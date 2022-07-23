import { css, FlattenSimpleInterpolation } from "styled-components";
import { get, merge } from "lodash";
import { Breakpoint, Color, Colors, FontAliases, FontFamily, Fonts, MaterialIconFontFace, MaterialIconsType, MediaQuery, Shapes, Spaces, TableLayout } from "./theme.types";
import { Mode } from "fs";




const breakpoints = ["40rem", "52rem", "64rem", "80rem"];

const breakpointsInPx = {
  sm: 0,
  default: 0,
  md: 832,
  lg: 1024,
  xl: 1280,
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
      direction?: "rtl" | "ltr";
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
    [key in FontAliases]?: number;
  };
  space: {
    [key in Spaces]: number[];
  };
  fontFamilies: {
    main: string;
  };
  avatarSizes: {
    [key in MediaQuery]?: {
      width: number;
      height: number;
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
      width: string;
      height: string;
      r: string;
      fontSize: string;
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
  direction: "rtl" | "ltr";
}

export const Theme: ITheme = {
  colors: Colors,
  modes: {
    rtl: {
      direction: "rtl",
    },
    ltr: {
      direction: "ltr",
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
  },
  breakpoints: aliasBreakpoints,
  breakpointsInPx: breakpointsInPx,
  mediaQueries: {
    small :`@media only screen and (max-width : ${aliasBreakpoints.md})`,
    medium: `@media only screen and (min-width : ${aliasBreakpoints.md})`,
    large: `@media only screen and (min-width : ${aliasBreakpoints.lg})`,
    xlarge: `@media only screen and (min-width : ${aliasBreakpoints.xl})`,
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
  },
  space: {
    margin: [],
    "margin-bottom": [10, 12, 14],
  },
  fontFamilies: {
    main: "Montserrat",
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
      borderRadius: "50%",
    },
    square: {
      borderRadius: "10px",
    },
  },

  tableLayout: {
    fixed: {
      tableLayout: "fixed",
    },
    auto: {
      tableLayout: "auto",
    },
  },
  buttonSizes: {
    small: {
      padding: "0.5rem 2rem",
    },
    medium: {
      padding: "1.125rem 2rem",
    },
    large: {
      padding: "1.125rem 2rem",
    },
  },
  direction: "ltr",
  circularProgressColors: {
    primary: {
      stroke: Colors.primary,
    },
  },
  stepperIconSizes: {
    small: {
      width: "1.406rem",
      height: "1.406rem",
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
      height: "30px",
      width: "30px",
      r: "13",
      fontSize: "0.5rem",
    },
    medium: {
      height: "40px",
      width: "40px",
      r: "18",
      fontSize: "0.75rem",
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

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}

export const generateMaterialIconsFontFaces = (
  material_icons: MaterialIconFontFace
) => {
  let css_string = "";
  const familyBaseName = "Material Icons";
  const getTypeName = (type: string) => {
    return material_icons[type as MaterialIconsType]?.mapped_name ?? ` ${type}`;
  };

  Object.keys(material_icons).forEach((type) => {
    const src = material_icons[type as MaterialIconsType]?.src;
    const typeFamilyName = `${familyBaseName}${
      getTypeName(type).length > 0 ? ` ${getTypeName(type)}` : ""
    }`;
    const typeClassName = `.material-icons${`${
      getTypeName(type).length > 0 ? "-" : ""
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
  let styles = "";
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
