import React from 'react';
import styled, { keyframes } from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, variant } from 'styled-system';

const SkeletonTitle: React.FC<LayoutProps & SpaceProps> = ({ ...props }) => {
	return (
		<StyledSkeletonTitleWrapper {...props}>
			<StyledSkeletonTitle />
		</StyledSkeletonTitleWrapper>
	);
};
const loading = keyframes`
	        0% {
          transform: skewX(-10deg) translateX(-100%);
        }
        100% {
          transform: skewX(-10deg) translateX(200%);
        }
`;
const StyledSkeletonTitleWrapper = styled.div<LayoutProps & SpaceProps>`
	/* padding: 1rem 0; */
	max-width: 15rem;
	width: 15rem;
	overflow: hidden;
	background: #eee;
	height: 2rem;
	${layout};
	${space};
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
