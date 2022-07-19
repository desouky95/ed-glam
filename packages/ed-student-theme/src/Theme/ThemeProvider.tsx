import React, { createContext, useState } from "react";
import {
  DefaultTheme,
  ThemeProvider as SThemeProvider,
} from "styled-components";
import { Theme } from "./theme";

type ThemeTogglerOptions = {
  theme: DefaultTheme;
  setTheme: React.Dispatch<DefaultTheme>;
};
export const ThemeContextProvider =
  createContext<ThemeTogglerOptions | null>(null);

const ThemeProviderWrapper: React.FC = ({ children }) => {
  const [defaultTheme, setTheme] = useState(Theme);

  return (
    <ThemeContextProvider.Provider
      value={{ theme: defaultTheme, setTheme: setTheme }}
    >
      <SThemeProvider theme={defaultTheme}>{children}</SThemeProvider>
    </ThemeContextProvider.Provider>
  );
};

export const ThemeProvider = ThemeProviderWrapper;
