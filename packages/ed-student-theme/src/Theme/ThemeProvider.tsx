import React, { createContext, useContext, useState } from 'react';
import {
	DefaultTheme,
	ThemeProvider as SThemeProvider,
} from 'styled-components';
import { Theme } from './theme';

type ThemeTogglerOptions = {
	theme: DefaultTheme;
	// setTheme: React.Dispatch<DefaultTheme>;
};
export const ThemeContextProvider = createContext<ThemeTogglerOptions | null>(
	null
);

const ThemeProviderWrapper: React.FC<ThemeTogglerOptions> = ({
	children,
	theme,
}) => {
	return (
		<ThemeContextProvider.Provider value={{ theme }}>
			<SThemeProvider theme={theme}>{children}</SThemeProvider>
		</ThemeContextProvider.Provider>
	);
};

export const useEdTheme = () => {
	const context = useContext(ThemeContextProvider);
	if (!context) throw new Error('No ThemeProvider found !!!');
	return context.theme;
};
export const ThemeProvider = ThemeProviderWrapper;
