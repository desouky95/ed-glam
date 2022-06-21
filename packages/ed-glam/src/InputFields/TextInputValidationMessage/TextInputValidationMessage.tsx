import React from 'react'
import { StyledValidationMessage } from '@Components/InputFields/TextInputValidationMessage/TextInputValidationMessage.styled'

type Props = {}

const TextInputValidationMessage: React.FC<Props> = ({ children }) => {
	return <StyledValidationMessage>{children}</StyledValidationMessage>
}

export default TextInputValidationMessage
