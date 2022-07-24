import { Orientation } from '@eduact/student-theme';
import { HTMLProps, ReactElement, ReactNode } from 'react';

export type StepperProps = {
	orientation?: Orientation;
	children: Array<ReactElement<StepperItemProps>>;
	initStep?: number;
	onChange?: (value: number) => void;
	clickable?: boolean;
};

export type StepperItemUIProps = {
	isSelected?: boolean;
	finished?: boolean;
	index?: number;
	isLast?: boolean;
};

export type StepperItemProps = {
	tooltip?: string;
	icon?: React.ReactNode;
} & StepperItemUIProps &
	Pick<React.HTMLProps<HTMLDivElement>, 'onClick' | 'disabled'>;
