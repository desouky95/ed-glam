import { MediaQuery } from './theme.types';

export type Radii = {
	[key in MediaQuery]: number;
};

export const radii: Radii = {
	small: 20,
	medium: 30,
	large: 40,
	xlarge: 50,
};
