import { Color, MediaQuery, ResponsiveVal } from '@eduact/student-theme';
import { cssVar, rgba } from 'polished';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { ProgressProps } from '../Progress.types';

export type CircularProgressProps = {
	size: ResponsiveVal<MediaQuery>;
	color?: Color;
} & ProgressProps;
const CircularProgress: React.FC<CircularProgressProps> = ({
	size = 'small',
	color = 'primary',
	overallProgress = 100,
	...props
}) => {
	return (
		<StyledWrapper
			color={color}
			overallProgress={overallProgress}
			size={size}
			{...props}
		>
			<ProgressSvg>
				<FullCircle />
				<ProgressCircle />
			</ProgressSvg>
			<PercentLabel>{props.label ?? `${props.progress}%`}</PercentLabel>
		</StyledWrapper>
	);
};

const ProgressSvg = styled.svg`
	transform: rotate(-90deg);
	transform-origin: 50% 50%;
	width: calc(var(--size) * 1px);
	height: calc(var(--size) * 1px);
	fill: transparent;
	circle {
		fill: none;
		r: calc(var(--radius) * 1px);
		cx: calc(var(--cords) * 1px);
		cy: calc(var(--cords) * 1px);
		stroke-width: calc(var(--stroke-width) * 1px);
	}
`;
const ProgressCircle = styled.circle`
	stroke-dasharray: calc(var(--arc-length) * 1px);
	stroke-dashoffset: calc(var(--arc-offset) * 1px);
	stroke: var(--stroke-color);
	stroke-linecap: round;
	transition: all ease-in-out 200ms;
`;
const FullCircle = styled.circle`
	stroke-dashoffset: calc(var(--arc-length) * 1px);
`;
export const PercentLabel = styled.label`
	position: absolute;
	font-family: 'AvantGarde';
	/* width: fit-content; */
	display: flex;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-size: inherit;
`;
const StyledWrapper = styled.div<CircularProgressProps>`
	position: relative;
	${({ theme }) => `${theme.mediaQueries.large}{
		${variant({
			prop: 'size',
			scale: 'circularProgressSizes',
		})}

    }`}
	${variant({ prop: 'size', scale: 'circularProgressSizes' })};
	transition : stoke ease-in-out 200ms;
	--cords: calc(var(--size) / 2);
	--radius: calc(var(--cords) - var(--stroke-width));
	--arc-length: calc(2 * 3.14 * var(--radius));
	--arc-offset: ${(props) => {
		return `calc(
			var(--arc-length) * ((${props.overallProgress} - ${props.progress}) / ${props.overallProgress})
			);`;
	}} 
	--stroke-color: ${(props) => props.theme.colors[props.color ?? 'primary']};
	${FullCircle} {
		stroke: ${(props) => rgba(props.theme.colors[props.color ?? 'primary'], 0.2)};
	}
	${PercentLabel}{
		width : ${(props) => props.label && '100%'};
		display : ${(props) => props.label && 'flex'};
		justify-content : ${(props) => props.label && 'center'}
	}
`;
export default CircularProgress;
