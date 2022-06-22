import { Theme } from "@eduact/student-theme";
// console.log(Theme)
import { ThemeProvider } from "styled-components";
export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const ThemeDecorator = (storyFn) => {
  console.log(storyFn);
  return (
    <ThemeProvider theme={Theme}>
      {/* <Reset /> */}
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  );
};
// addDecorator(ThemeDecorator)
