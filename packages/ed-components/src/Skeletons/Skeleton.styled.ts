import styled, { keyframes } from 'styled-components';
import {
	background,
	BackgroundProps,
	layout,
	LayoutProps,
} from 'styled-system';

export const StyledWrapper = styled.div<LayoutProps & BackgroundProps>`
	overflow: hidden;
	background: #eee;
	height: unset;
	min-height: 30vh;
	padding: 1rem 0;
	${layout}
	${background}
`;

export const SkeletonLoadingAnimation = keyframes`
	        0% {
          transform: skewX(-10deg) translateX(-100%);
        }
        100% {
          transform: skewX(-10deg) translateX(200%);
        }
`;
