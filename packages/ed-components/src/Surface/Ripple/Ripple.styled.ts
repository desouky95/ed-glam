import { mixBlendMode, MixBlendModeProps } from '@eduact/ed-system';
import { Color } from '@eduact/student-theme';
import { rgba } from 'polished';
import styled, { css, keyframes } from 'styled-components';

type RippleUIProps = {
	color: Color;
} & MixBlendModeProps;
const RippleAnimation = keyframes`

	0%   { transform: translate(-100%, -100%); }
	80%  { transform: translate(-100%, -100%) scale(50); }
	100% { transform: translate(-100%, -100%) scale(50); opacity: 0; }

`;

const FadeAnimation = keyframes`
	0%   { opacity: 1; }
	100% { opacity: 0; }
`;

export const StyledRipple = styled.span<RippleUIProps>`
	background-color: ${(props) => rgba(props.theme.colors[props.color], 0.2)};
	width: 1rem;
	height: 1rem;
	position: absolute;
	border-radius: 50%;
	transform: translateX(-100%) translateY(-100%);
	z-index: 0;
	animation: ${RippleAnimation} 1250ms ease-out forwards,
		${FadeAnimation} 1500ms ease-out forwards;
	${mixBlendMode}
`;

export const RippleWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;
	top: 0;
	left: 0;
	border-radius: inherit;
`;
