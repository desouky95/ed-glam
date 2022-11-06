import { Color } from '@eduact/student-theme';
import React from 'react';
import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, variant } from 'styled-system';

type ChipUIProps = LayoutProps &
	SpaceProps & {
		bg?: Color;
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
	padding: 5px 10px;
	border-radius: 10px;
	border-bottom-right-radius: 0;
	font-weight: 600;
	color: ${(props) => props.theme.colors.light};
	line-height: 1.19;
	font-size: 1rem;
	text-align: center;
	cursor: pointer;
	${space};
	${layout}
	${variant({
		prop: 'bg',
		scale: 'backgrounds',
	})}
`;
