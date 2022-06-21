import React from 'react'
import TextInput, { TextInputProps } from '@Components/InputFields/TextInput'
import { PhoneInputContainer, StyledCountryNumber, PhoneTextInput, HorizontalDivider } from './PhoneInput.styled'
import Error from '@Components/Utilities/Error/Error'

export type PhoneInputProps = {} & Omit<TextInputProps, 'showPasswordIcon'>

const PhoneInput: React.FC<PhoneInputProps> = React.forwardRef(({ register, error, ...props }, ref) => {
	return (
		<PhoneInputContainer>
			<StyledCountryNumber flexGrow={'unset'} width="42px" value="+2" onChange={null} disabled />
			<HorizontalDivider />
			<TextInput marginLeft="16px" width="100%" {...props} type="number" ref={ref} {...props} />
			<Error error={error} />
		</PhoneInputContainer>
	)
})

export default PhoneInput
