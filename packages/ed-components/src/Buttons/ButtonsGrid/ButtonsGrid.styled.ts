import { HTMLProps } from 'react';
import styled from 'styled-components';
import { ButtonGridUIProps } from './ButtonsGrid.types';
export const ButtonGridItemStyled = styled.button<ButtonGridUIProps>`
	padding: 0.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0;
	border-radius: 3px;
	background: ${(props) =>
		props.isSelected && !props.withBorder
			? props.theme.colors.maxBluePurple
			: props.theme.colors.light};
	box-shadow: ${(props) =>
		props.isSelected && props.withBorder
			? `0 0 0 2px ${props.theme.colors.maxBluePurple}`
			: ''};
	cursor: pointer;
	min-height: 4rem;
	color: ${(props) =>
		props.isSelected && !props.withBorder
			? props.theme.colors.light
			: props.theme.colors.dark};
	* {
		color: ${(props) =>
			props.isSelected ? props.theme.colors.light : ''} !important;
	}
`;
