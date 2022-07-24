import React, { memo } from 'react';
import { GridLayout } from '@eduact/ed-system';
import { RechargeMethod } from '@eduact/utils';
import { ButtonGridItemStyled } from './ButtonsGrid.styled';
import {
	ButtonGridProps,
	ButtonGridValue,
	ButtonsGridComposition,
	ButtonsGridProps,
} from './ButtonsGrid.types';

const ButtonGridItem: React.FC<ButtonGridProps> = ({
	children,
	value,
	isSelected = false,
	onClick,
	withBorder,
}) => {
	return (
		<ButtonGridItemStyled
			withBorder={withBorder}
			onClick={() => onClick && onClick(value)}
			isSelected={isSelected}
		>
			{children}
		</ButtonGridItemStyled>
	);
};

const ButtonsGrid: React.FC<ButtonsGridProps> & ButtonsGridComposition = ({
	children,
	onChange,
	value,
	withBorder,
}) => {
	return (
		<GridLayout
			width="100%"
			gridTemplateColumns={'repeat(2,1fr)'}
			gridTemplateRows={'1fr'}
		>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					let isSelected = false;
					const childValue = child.props.value as ButtonGridValue;
					if (value.value) {
						if (value.args) {
							if (
								value.args.method === childValue.args?.method &&
								value.value == childValue.value
							) {
								isSelected = true;
							}
						} else {
							if (value.value == childValue.value) {
								isSelected = true;
							}
						}
					}

					return React.cloneElement(
						child as React.ReactElement<ButtonGridProps>,
						{
							value: child.props.value,
							onClick: (btnValue: ButtonGridValue) => {
								let canBeSelected = true;

								if (btnValue.args?.method) {
									if (
										btnValue.args.method === value.args?.method &&
										btnValue.value === value.value
									) {
										canBeSelected = false;
									}
								} else {
									if (btnValue.value === value.value) {
										canBeSelected = false;
									}
								}
								if (canBeSelected) {
									onChange && onChange(btnValue);
								} else {
									onChange && onChange(undefined);
								}
							},
							isSelected: isSelected,
							withBorder,
						}
					);
				}
			})}
		</GridLayout>
	);
};

ButtonsGrid.Item = ButtonGridItem;

export default ButtonsGrid;
