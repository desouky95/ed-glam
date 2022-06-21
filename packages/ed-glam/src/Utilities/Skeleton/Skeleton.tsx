import { Color } from '@eduact/student-theme'
import { lighten, rgba } from 'polished'
import React from 'react'
import styled, { css, isStyledComponent, keyframes, AnyStyledComponent } from 'styled-components'
import { borderRadius, BorderRadiusProps, layout, LayoutProps, space, SpaceProps } from 'styled-system'
import SkeletonTitle from './Components/SkeletonTitle'

type Props = {
	isLoading: boolean
	inheritChild?: boolean
	color?: Color
} & LayoutProps &
	BorderRadiusProps &
	SpaceProps

const Skeleton: React.FC<Props> = ({ isLoading, children, inheritChild, ...props }) => {
	if (inheritChild && isLoading) {
		return (
			<StyledWrapper {...props}>
				<StyledSkeleton>{children}</StyledSkeleton>
			</StyledWrapper>
		)
	}
	if (isLoading)
		return (
			<StyledWrapper {...props}>
				<StyledSkeleton />
			</StyledWrapper>
		)
	return <>{children}</>
}

const loading = keyframes`
	        0% {
          transform: skewX(-10deg) translateX(-100%);
        }
        100% {
          transform: skewX(-10deg) translateX(200%);
        }
`
const StyledWrapper = styled.div<LayoutProps & BorderRadiusProps & SpaceProps & { color?: Color }>`
	overflow: hidden;
	background: ${props => (props.color ? props.theme.colors[props.color] : props.theme.colors.darkCultured)};
	${layout}
	${borderRadius}
	${space}
`
const StyledSkeleton = styled.div`
	* {
		background: none;
		content: '';
		opacity: 0;
	}
	width: 100%;
	height: 100%;
	/* background-size: 200% 200%; */
	::before {
		content: '';
		position: absolute;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
		width: 50%;
		height: 100%;
		top: 0;
		left: 0;
	}
	animation: ${loading} 2s infinite;
`

export default Skeleton
