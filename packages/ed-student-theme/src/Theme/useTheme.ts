import { useContext } from "react";
import { ThemeContextProvider } from "./ThemeProvider";

export const useTheme = () => {
  const context = useContext(ThemeContextProvider);
  if (!context) {
    throw new Error("No ThemeProvider found !!!");
  }
  return { ...context };
};
