import { createGlobalStyle, css } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { createGlobalFont, Fonts } from '@eduact/ed-system';
import { Theme, ThemeProvider } from '@eduact/student-theme';
// import { ThemeProvider } from "styled-components";
const { Cairo, AvantGarde, Montserrat, Roboto } = require('@eduact/ed-fonts');
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
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
		Roboto: {
			100: Roboto.RobotoThin,
			300: Roboto.RobotoLight,
			400: Roboto.RobotoRegular,
			normal: Roboto.RobotoRegular,
			500: Roboto.RobotoMedium,
			700: Roboto.RobotoBold,
			bold: Roboto.RobotoBold,
			900: Roboto.RobotoBlack,
			bolder: Roboto.RobotoBlack,
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
  ${createGlobalFont('Cairo', fonts)};
  ${createGlobalFont('Montserrat', fonts)};
  ${createGlobalFont('AvantGarde', fonts)};
  ${createGlobalFont('Roboto', fonts)};
`;
export const ThemeDecorator = (storyFn) => (
	<ThemeProvider>
		<GlobalStyles />
		{storyFn()}
	</ThemeProvider>
);

addDecorator(ThemeDecorator);
