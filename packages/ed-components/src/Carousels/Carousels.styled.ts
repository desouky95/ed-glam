import { Color } from '@eduact/student-theme';
import styled from 'styled-components';

export const NavIcon = styled.div<{ color: Color }>`
	font-size: 2rem;
	place-items: center;
	color: ${(props) => props.theme.colors[props.color]};
	cursor: pointer;
	/* display: none; */
	display: grid;
	${({ theme }) => `${theme.mediaQueries.large}{
		margin: 0 2rem;
	}`}
`;
