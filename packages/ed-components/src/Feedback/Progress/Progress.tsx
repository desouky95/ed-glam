import { Color } from '@eduact/student-theme';
import React from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

export type ProgressProps = {
	variant?: ResponsiveValue<Color>;
} & Omit<React.HTMLProps<HTMLProgressElement>, 'ref' | 'as'> & {
		ref?: React.MutableRefObject<HTMLProgressElement | null>;
	};
const Progress: React.VoidFunctionComponent<ProgressProps> = ({
	variant = 'primary',
	...props
}) => {
	return (
		<StyledProgress
			data-percent={props.value}
			variant={variant}
			{...props}
		></StyledProgress>
	);
};

const StyledProgress = styled.progress<{ variant?: ResponsiveValue<Color> }>`
	appearance: none;
	position: relative;
	&::-webkit-progress-bar {
		background: #e5e5e5;
		border-radius: 15px;
		overflow: hidden;
	}
	&::-webkit-progress-value {
		width: 50%;
		background: red;
		${variant({ scale: 'backgrounds', prop: 'variant' })}
		border-radius: 15px;
	}
	&::after {
		content: attr(data-percent) '%';
		position: absolute;
		top: 50%;
		right: 2%;
		font-size: 0.75rem;
		transform: translateY(-50%);
	}
`;

export default Progress;
