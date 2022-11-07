import { Color } from '@eduact/student-theme';
import React from 'react';
import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, variant } from 'styled-system';

type ChipUIProps = LayoutProps &
	SpaceProps & {
		bg?: Color;
		clipped?: boolean;
	};
export type ChipProps = React.HTMLAttributes<HTMLSpanElement> &
	ChipUIProps & {
		label: string;
	};
const Chip: React.FC<ChipProps> = ({ bg = 'primary', label, ...props }) => {
	return (
		<StyledChip bg={bg} {...props}>
			{label}
		</StyledChip>
	);
};

export default Chip;

const StyledChip = styled.span<ChipUIProps>`
	padding: 1px 4px;
	${({ theme }) => `${theme.mediaQueries.large}{
		padding: 5px 10px;
		font-size : 1rem;
	}`}
	border-radius: 10px;
	border-bottom-right-radius: ${(props) => props.clipped && '0'};
	font-weight: 600;
	color: ${(props) => props.theme.colors.light};
	line-height: 1.19;
	font-size: 0.625rem;
	text-align: center;
	cursor: pointer;
	${space};
	${layout}
	${variant({
		prop: 'bg',
		scale: 'backgrounds',
	})}
`;
