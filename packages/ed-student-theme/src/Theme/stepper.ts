import { Color, ITheme, MediaQuery } from '@eduact/student-theme';

export type StepperIconSizes = {
	[Key in MediaQuery]?: {
		width: string;
		height: string;
	};
};

export type StepperIconColors = {
	[Key in Color]?: {
		background: string;
		borderColor: string;
	};
};
export const stepperIconSizes = {
	small: {
		width: '1.406rem',
		height: '1.406rem',
	},
};
export const getStepperIconsColors = (theme: ITheme): StepperIconColors => {
	const { colors } = theme;
	let stepperIconColors = {} as StepperIconColors;

	Object.entries(colors).forEach(([key, value]) => {
		stepperIconColors[key as Color] = {
			background: value,
			borderColor: value,
		};
	});

	return stepperIconColors;
};
