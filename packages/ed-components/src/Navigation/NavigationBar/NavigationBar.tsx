import { Color } from '@eduact/student-theme';
import { Placement } from '@popperjs/core';
import { Icon } from '../../Icons';
import { Popper } from '../../Utils/Popper/Popper';
import React, { HTMLProps, useState } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import {
	NavigationBarContainer,
	StyledNavItem,
	StyledPopper,
} from './NavigationBar.styled';

type NavigationBarItemProps = {
	label: string;
	icon: JSX.Element;
	selected?: boolean;
	value: string | number;
	popperPlacement?: Placement;
} & Omit<React.HTMLProps<HTMLDivElement>, 'as' | 'ref' | 'children'>;

const NavigationBarItem: React.VoidFunctionComponent<
	NavigationBarItemProps
> = ({ icon, label, popperPlacement = 'top', ...props }) => {
	return (
		<StyledPopper title={label} placement={popperPlacement}>
			<StyledNavItem {...props}>{icon}</StyledNavItem>
		</StyledPopper>
	);
};
interface NavigationBarComposition {
	Item: React.VoidFunctionComponent<NavigationBarItemProps>;
}
type NavigationBarProps = {
	color?: Color;
	value: string | number;
	children: Array<React.ReactElement<NavigationBarItemProps>>;
	onChange?: (value: string | number) => void;
	popperPlacement?: Placement;
} & Omit<HTMLProps<HTMLDivElement>, 'ref' | 'as'>;
const NavigationBar: React.FC<NavigationBarProps> &
	NavigationBarComposition = ({
	color = 'light',
	children,
	onChange,
	value,
	popperPlacement = 'top',
	...props
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	return (
		<NavigationBarContainer color={color} {...props}>
			{React.Children.map<
				React.ReactElement<NavigationBarItemProps>,
				React.ReactElement<NavigationBarItemProps>
			>(children, (child, index) => {
				return React.cloneElement(child, {
					...child.props,
					onClick: (e: any) => {
						child.props.onClick?.(e);
						onChange?.(child.props.value as string | number);
					},
					selected: value === child.props.value,
					popperPlacement,
				});
			})}
		</NavigationBarContainer>
	);
};
NavigationBar.Item = NavigationBarItem;
export default NavigationBar;
