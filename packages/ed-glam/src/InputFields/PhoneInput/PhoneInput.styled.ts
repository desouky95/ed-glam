import styled from 'styled-components'
import TextInput, { TextInputProps } from '@Components/InputFields/TextInput'
import { flexbox } from 'styled-system'

export const PhoneInputContainer = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	align-items: center;
`

export const StyledCountryNumber = styled(TextInput)<TextInputProps>`
	flex-grow: unset;
	${flexbox}
`

export const HorizontalDivider = styled.div`
	border-left: 1px solid #e0e0e0;
	width: 1px;
	height: 25px;
	background-color: gray;
	/* margin-bottom: 16px; */
	/* position: absolute; */
	left: 40px;
	bottom: 26px;
`

export const PhoneTextInput = styled(TextInput)<{ register: any }>`
	margin-left: 16px;
`
