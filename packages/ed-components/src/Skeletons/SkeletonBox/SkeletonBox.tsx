import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
	background,
	BackgroundProps,
	border,
	BorderProps,
	layout,
	LayoutProps,
	shadow,
	ShadowProps,
	space,
	SpaceProps,
	variant,
} from 'styled-system';
import { SkeletonProps } from '../Skeleton.types';

type Props = LayoutProps &
	SpaceProps &
	BorderProps &
	BackgroundProps &
	ShadowProps &
	SkeletonProps;
const SkeletonTitle: React.FC<Props> = ({ isLoading, children, ...props }) => {
	if (isLoading)
		return (
			<StyledSkeletonTitleWrapper {...props}>
				<StyledSkeletonTitle />
			</StyledSkeletonTitleWrapper>
		);
	return <>{children}</>;
};
const loading = keyframes`
	        0% {
          transform: skewX(-10deg) translateX(-100%);
        }
        100% {
          transform: skewX(-10deg) translateX(200%);
        }
`;
const StyledSkeletonTitleWrapper = styled.div<Omit<Props, 'isLoading'>>`
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: #eee;
	height: 2rem;
	${layout};
	${space};
	${border};
	${background}
	${shadow}
`;
const StyledSkeletonTitle = styled.div`
	width: 100%;
	height: 100%;
	::before {
		content: '';
		position: absolute;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.9),
			transparent
		);
		width: 50%;
		height: 100%;
		top: 0;
		left: 0;
	}
	animation: ${loading} 2s infinite;
`;
export default SkeletonTitle;
