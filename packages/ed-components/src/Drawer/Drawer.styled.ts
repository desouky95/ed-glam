import styled from 'styled-components';
import {
	color,
	backgroundColor,
	BackgroundColorProps,
	ColorProps,
	layout,
	position,
	PositionProps,
	variant,
} from 'styled-system';
import { BaseDrawerProps, DrawerProps } from './Drawer.types';

export const DrawerWrapper = styled.div<
	BaseDrawerProps & BackgroundColorProps & PositionProps
>`
	left: ${(props) => (props.drawerPosition === 'left' ? '0' : '')};
	top: ${(props) => (props.drawerPosition === 'top' ? '0' : '')};
	right: ${(props) => (props.drawerPosition === 'right' ? '0' : '')};
	bottom: ${(props) => (props.drawerPosition === 'bottom' ? '0' : '')};
	transition-delay: 400ms;
	transform: ${(props) => {
		if (props.open) {
			return 'translate(0)';
		}
		switch (props.drawerPosition) {
			case 'bottom':
				return 'translateY(100%)';
			case 'top':
				return 'translateY(-100%)';
			case 'right':
				return 'translateX(100%)';
			default:
				return 'translateX(-100%)';
		}
	}};
	transition: transform ease-in-out 300ms;
	${variant({ prop: 'variant', scale: 'backgrounds' })};
	${layout};
	height: ${(props) =>
		props.drawerPosition === 'left' || props.drawerPosition === 'right'
			? '100%'
			: ''};
	width: ${(props) =>
		props.drawerPosition === 'top' || props.drawerPosition === 'bottom'
			? '100%'
			: ''};
	${color};
	${position};
`;
