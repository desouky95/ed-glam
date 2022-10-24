import styled from 'styled-components';
import {
	background,
	BackgroundProps,
	layout,
	LayoutProps,
	space,
	SpaceProps,
	variant,
} from 'styled-system';
import { InputBaseError } from '../BaseInputUtils';
import { InputBaseUIProps } from '../BaseInputUtils/BaseInputs.types';

export const InputBaseWrapper = styled.div<SpaceProps & LayoutProps>`
	${space};
	${layout};
	font-family: 'Roboto';
	font-size: 16px;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	font-weight: 500;
`;
export const InputWrapper = styled.div<InputBaseError>`
	display: flex;
	align-items: center;
	border-bottom: 0.6px solid ${(props) => props.theme.colors.silver};
	padding: 6px 0;
	border-bottom-color: ${(props) =>
		props.error ? props.theme.colors.princetonOrange : ''};
`;
export const StyledInput = styled.input<
	InputBaseError & InputBaseUIProps & BackgroundProps
>`
	flex: 1;
	width: 100%;
	border: none;
	font: inherit;
	--color: ${(props) => props.theme.colors.silver};
	outline: var(--color);
	font-size: 10px;

	&::placeholder {
		color: var(--color);
	}
	${({ theme }) => `${theme.mediaQueries.medium}{
		font-size : 16px;
	}`}
	${background};
	${variant({ prop: 'background', scale: 'backgrounds' })}
`;
