import { createGlobalStyle } from "styled-components";
import { addDecorator } from "@storybook/react";
import { createGlobalFont, Fonts } from "@eduact/ed-system";
import { ThemeProvider } from "@eduact/student-theme";
const { Cairo, AvantGarde, Montserrat } = require("@eduact/ed-fonts");
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
    Cairo: {
      500: Cairo.CairoMedium,
    },
    Montserrat: {
      500: Montserrat.MontserratMedium,
    },
    AvantGarde: {
      normal: AvantGarde.AvantGardeRegular,
    },
  },
};

const GlobalStyles = createGlobalStyle`
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
  ${createGlobalFont("Cairo", fonts)};
  ${createGlobalFont("Montserrat", fonts)};
  ${createGlobalFont("AvantGarde", fonts)};
`;
export const ThemeDecorator = (storyFn) => (
  <ThemeProvider>
    {/* <Reset /> */}
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(ThemeDecorator);
