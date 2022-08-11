import { RechargeMethod } from '@eduact/utils';
import { HTMLAttributes, HTMLProps } from 'react';

export type ButtonGridValue = {
	value?: any;
	args?: {
		method: RechargeMethod;
	};
};

export type ButtonGridUIProps = {
	isSelected?: boolean;
	withBorder?: boolean;
} & Omit<HTMLAttributes<HTMLButtonElement>, 'value' | 'onClick'>;
export type ButtonGridProps = ButtonGridUIProps & {
	value: ButtonGridValue;
	onClick?: (value: ButtonGridValue) => void;
};

export interface ButtonsGridComposition {
	Item: React.FC<ButtonGridProps>;
}

export type ButtonsGridProps = {
	onChange?: (value: ButtonGridValue | undefined) => void;
	value: ButtonGridValue;
	withBorder?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'>;
