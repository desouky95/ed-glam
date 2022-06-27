import { createGlobalStyle } from "styled-components";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "@eduact/student-theme";
import { createGlobalFont, Fonts } from "@eduact/ed-system";
import { Cairo, Montserrat ,AvantGarde } from "@eduact/ed-fonts";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const fonts = {
  fonts: {
    Cairo: { normal: Cairo.CairoRegular },
    AvantGarde: {
      normal: AvantGarde.AvantGardeRegular,
    },
    Montserrat : {
      normal : Montserrat.normal,
      bold: Montserrat.MontserratBold,
			bolder: Montserrat.MontserratBlack,
			light: Montserrat.MontserratLight,
			'500': Montserrat.MontserratMedium,
			'100': Montserrat.MontserratThin,
			'200': Montserrat.MontserratExtraLight,
			'300': Montserrat.MontserratLight,
			'400': Montserrat.MontserratNormal,
			'600': Montserrat.MontserratSemiBold,
			'700': Montserrat.MontserratBold,
			'800': Montserrat.MontserratExtraBold,
			'900': Montserrat.MontserratBlack,
    }
  },
};

const GlobalStyles = createGlobalStyle`
${createGlobalFont("AvantGarde", fonts)};
${createGlobalFont("Montserrat", fonts)};
${createGlobalFont("Cairo", fonts)};
  * {
    box-sizing: border-box;

	}

  html ,body , #root{
	  padding : 0;
	  margin : 0;
	  min-height: 100% !important;

	img {
		max-width: 100%;
	}
}
html ,body {
	  font-family: 'Montserrat';
	  overflow-x : clip;
  }
  html[dir="rtl"],body[dir="rtl"]{
	  font-family : 'Cairo';
	  direction : rtl;
	  svg {
		transform : rotate(180deg);
	  }
  }
`;
export const ThemeDecorator = (storyFn) => (
  <ThemeProvider>
    {/* <Reset /> */}
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(ThemeDecorator);
