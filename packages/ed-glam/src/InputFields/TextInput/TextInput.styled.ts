import styled from 'styled-components'
import { flex, FlexProps, layout, LayoutProps, space, SpaceProps } from 'styled-system'

export const InputIconsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

export const RequiredAsteriskStyled = styled.p`
	position: relative;
	top: 4px;
	display: block;
	color: #ff8532;
`

export const TextInputContainerStyled = styled.div<LayoutProps>`
	${layout};
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 16px 0;
	border-bottom: 1px solid #e0e0e0;
	padding-right: 8px;
`

export const TextInputStyled = styled.input<SpaceProps>`
	${space};
	width: 100%;
	border: none;
	padding: 20px 0;
	padding: 10px 0;
	background-color: transparent;
	font-size: 16px;

	// hide number arrows for chrome
	::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	// hide number arrows for mozilla
	-moz-appearance: textfield;

	::placeholder {
		color: #d8d8d8;
		opacity: 1;
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: #d8d8d8;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: #d8d8d8;
	}

	:focus {
		outline: none;
	}
	/* ::-webkit-calendar-picker-indicator {
		display: none;
	} */
`
export const TextInputWrapper = styled.div<FlexProps>`
	flex-grow: 1;
	position: relative;
	${flex}
`
export const TextInputLabel = styled.label<{ placeholder?: string }>`
	font-size: 0.625rem;
	visibility: ${props => (props.placeholder ? 'visible' : 'hidden')};
`
