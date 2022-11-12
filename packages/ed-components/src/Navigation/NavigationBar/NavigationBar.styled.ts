import { Color } from '@eduact/student-theme';
import { Popper } from '../../Utils/Popper/Popper';
import styled from 'styled-components';
import { variant } from 'styled-system';

export const StyledNavItem = styled.div<{ selected?: boolean }>`
	font-size: 1.5rem;
	color: ${({ selected, theme }) =>
		selected ? theme.colors.primary : theme.colors.dark};
	span {
		color: inherit;
	}
`;
export const NavigationBarContainer = styled.div<{ color: Color }>`
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	padding: 0.781rem 0;
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: fit-content;
	${variant({ prop: 'color', scale: 'backgrounds' })};
	box-shadow: -4px -2px 4px 0 rgba(0, 0, 0, 0.16);
`;

export const StyledPopper = styled(Popper)`
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.spanishGray};
`;
