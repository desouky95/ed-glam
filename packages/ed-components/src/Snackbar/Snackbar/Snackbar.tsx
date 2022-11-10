import { Color, XPosition, YPosition } from '@eduact/student-theme';
import React from 'react';
import { animated, Spring } from 'react-spring';
import styled from 'styled-components';
import { variant } from 'styled-system';

export type SnackbarProps = {
	text: string;
	icon?: JSX.Element;
} & SnackbarBaseProps;
type SnackbarBaseProps = {
	horizontal?: XPosition;
	vertical?: YPosition;
	variant?: Color;
};
const Snackbar: React.FC<SnackbarProps> = ({
	variant = 'primary',
	horizontal = 'right',
	...props
}) => {
	const getTransitionDirection = () => {
		if (horizontal === 'right') return 'translateX(-100%)';
		if (horizontal === 'left') return 'translateX(100%)';
	};
	return (
		<Spring from={{}} to={{}}>
			{(styles) => (
				<animated.div style={styles}>
					<StyledSnackbar variant={variant} horizontal={horizontal} {...props}>
						{props.icon && (
							<>
								<SnackbarIconWrapper>{props.icon}</SnackbarIconWrapper>
							</>
						)}
						<span>{props.text}</span>
					</StyledSnackbar>
				</animated.div>
			)}
		</Spring>
	);
};

export default Snackbar;

const SnackbarIconWrapper = styled.div<SnackbarBaseProps>`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: transparent;
	margin: 0 0.5rem;
	border-width: 2px;
	border-style: solid;
	border-color: ${(props) =>
		props.theme.buttonColors?.[props.variant ?? 'primary']?.color};
	display: grid;
	place-content: center;
`;
const StyledSnackbar = styled.div<SnackbarBaseProps>`
	position: fixed;
	z-index: 99999;
	margin: 1rem;
	padding: 1rem;
	min-width: 19rem;
	border-radius: 50px;
	${variant({ prop: 'variant', scale: 'buttonColors' })}
	display: flex;
	align-items: center;
	justify-content: flex-start;
	top: ${(props) => {
		if (!props.vertical) {
			return '0';
		}
		if (props.vertical === 'top') return '0';
	}};
	bottom: ${(props) => {
		if (props.vertical === 'bottom') return '0';
	}};
	left: ${(props) => {
		if (!props.horizontal) {
			return '0';
		}
		if (props.horizontal === 'center') return '50%';
		if (props.horizontal === 'left') return '0';
	}};
	transform: ${(props) =>
		props.horizontal === 'center' ? 'translateX(-50%)' : ''};

	right: ${(props) => {
		if (props.horizontal === 'right') {
			return '0';
		}
	}};
`;
