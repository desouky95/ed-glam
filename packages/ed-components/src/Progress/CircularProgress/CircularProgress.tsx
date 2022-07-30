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
	...props
}) => {
	return (
		<StyledWrapper color={color} size={size} {...props}>
			<ProgressSvg>
				<FullCircle />
				<ProgressCircle />
			</ProgressSvg>
			<PercentLabel>{props.progress}%</PercentLabel>
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
		r: var(--radius);
		cx: var(--cords);
		cy: var(--cords);
		stroke-width: calc(var(--stroke-width) * 1px);
	}
`;
const ProgressCircle = styled.circle`
	stroke-dasharray: var(--arc-length);
	stroke-dashoffset: var(--arc-offset);
	stroke: var(--stroke-color);
	stroke-linecap: round;
	transition: all ease-in-out 200ms;
`;
const FullCircle = styled.circle`
	stroke-dashoffset: var(--arc-length);
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
	/* --stroke-width: 4; */
	--cords: calc(var(--size) / 2);
	--radius: calc(var(--cords) - var(--stroke-width));
	--arc-length: calc(2 * 3.14 * var(--radius));
	--arc-offset: calc(
		var(--arc-length) * ((100 - ${(props) => props.progress}) / 100)
	);
	--stroke-color: ${(props) => props.theme.colors[props.color ?? 'primary']};
	${FullCircle} {
		stroke: ${(props) =>
			rgba(props.theme.colors[props.color ?? 'primary'], 0.2)};
	}
`;
export const PercentLabel = styled.label`
	position: absolute;
	font-family: 'AvantGarde';
	width: fit-content;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-size: inherit;
`;
export default CircularProgress;
