import { createGlobalStyle } from "styled-components";
import { addDecorator} from '@storybook/react'
import {ThemeProvider} from '@eduact/student-theme'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

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
`;
export const ThemeDecorator = (storyFn) => (
  <ThemeProvider>
    {/* <Reset /> */}
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(ThemeDecorator);

