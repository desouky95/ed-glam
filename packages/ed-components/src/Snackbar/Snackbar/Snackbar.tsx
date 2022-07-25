import { Color, XPosition, YPosition } from '@eduact/student-theme';
import Spacer from '@src/Spacer';
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
	...props
}) => {
	return (
		<Spring from={{ opacity: '0' }} to={{ opacity: '1' }}>
			{(styles) => (
				<animated.div style={styles}>
					<StyledSnackbar variant={variant} {...props}>
						{props.icon && (
							<>
								<SnackbarIconWrapper>{props.icon}</SnackbarIconWrapper>
								<Spacer mx="0.5rem" />
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
