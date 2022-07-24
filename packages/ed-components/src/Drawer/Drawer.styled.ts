import styled from 'styled-components';
import { layout, variant } from 'styled-system';
import { BaseDrawerProps, DrawerProps } from './Drawer.types';

export const DrawerWrapper = styled.div<BaseDrawerProps>`
	position: fixed;
	left: ${(props) => (props.position === 'left' ? '0' : '')};
	top: ${(props) => (props.position === 'top' ? '0' : '')};
	right: ${(props) => (props.position === 'right' ? '0' : '')};
	bottom: ${(props) => (props.position === 'bottom' ? '0' : '')};
	transition-delay: 400ms;
	transform: ${(props) => {
		if (props.open) {
			return 'translate(0)';
		}
		switch (props.position) {
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
	${layout}
	height: ${(props) =>
		props.position === 'left' || props.position === 'right' ? '100%' : ''};
	width: ${(props) =>
		props.position === 'top' || props.position === 'bottom' ? '100%' : ''};
`;
