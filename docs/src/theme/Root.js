import { ThemeProvider } from '@eduact/student-theme';
import React from 'react';

export default function Root({ children }) {
	return (
		<>
			<ThemeProvider>{children}</ThemeProvider>
		</>
	);
}
