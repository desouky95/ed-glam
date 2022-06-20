import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Theme } from "./theme";

type ThemeTogglerOptions = {
  theme: DefaultTheme;
  setTheme: React.Dispatch<DefaultTheme>;
};
export const ThemeContextProvider = createContext<ThemeTogglerOptions | null>(
  null
);

const ThemeProviderWrapper: React.FC = ({ children }) => {
  const [defaultTheme, setTheme] = useState(Theme);

  return (
    <ThemeContextProvider.Provider
      value={{ theme: defaultTheme, setTheme: setTheme }}
    >
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </ThemeContextProvider.Provider>
  );
};

export default ThemeProviderWrapper;
