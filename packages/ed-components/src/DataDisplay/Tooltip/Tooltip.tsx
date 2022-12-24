import { Color } from '@eduact/student-theme';
import { Popper, PopperProps } from '../../Utils/Popper';
import React from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

type TooltipUIProps = { variant?: ResponsiveValue<Color> };
export type TooltipProps = {} & PopperProps & TooltipUIProps;
const Tooltip: React.VoidFunctionComponent<TooltipProps> = ({
	children,
	placement = 'auto',
	title,
	variant = 'darkSilver',
}) => {
	return (
		<StyledTooltip variant={variant} title={title} placement={placement}>
			{children}
		</StyledTooltip>
	);
};

const StyledTooltip = styled(Popper)<TooltipUIProps>`
	/* position: relative; */
	.popper-element {
		/* position: absolute; */
		/* margin: 1rem; */
		width: fit-content;
		border-radius: 5px;
		font-size: 0.625rem;
		padding: 0.25rem;
		${variant({ scale: 'buttonColors', prop: 'variant' })}
	}
`;
export default Tooltip;
