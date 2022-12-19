import { TableLayout } from './theme.types';

export type ThemeTableLayouts = {
	[key in TableLayout]: {
		tableLayout: TableLayout;
	};
};

export const tableLayouts: ThemeTableLayouts = {
	fixed: {
		tableLayout: 'fixed',
	},
	auto: {
		tableLayout: 'auto',
	},
};
