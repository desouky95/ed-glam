import React, { useEffect, useState } from 'react'
import ShowPasswordIcon from './PasswordIcon'
import {
	TextInputContainerStyled,
	TextInputStyled,
	RequiredAsteriskStyled,
	InputIconsContainer,
	TextInputWrapper,
	TextInputLabel,
} from './TextInput.styled'
import { FlexProps, SpaceProps, WidthProps } from 'styled-system'
import { useTranslation } from 'react-i18next'
import Error from '@Components/Utilities/Error/Error'
import styled from 'styled-components'

export type TextInputType = 'text' | 'password' | 'number' | 'email' | 'date'

export type TextInputProps = {
	showPasswordIcon?: boolean
	required?: boolean
	isDirty?: boolean
	withLabel?: boolean
	error?: any
} & React.ComponentProps<typeof TextInputStyled> &
	WidthProps &
	FlexProps

const TextInput: React.FC<TextInputProps> = React.forwardRef<unknown, TextInputProps>(
	(
		{
			type = 'text',
			width = 'auto',
			required = false,
			placeholder = '',
			showPasswordIcon = false,
			isDirty,
			defaultValue,
			withLabel = false,
			disabled = false,
			error,
			...props
		},
		ref
	) => {
		const [showPassword, setShowPassword] = useState<boolean>(false)
		const [textInputType, setTextInputType] = useState<TextInputType>('text')
		const [t] = useTranslation('inputs')
		useEffect(() => {
			setTextInputType(type)
		}, [type])

		useEffect(() => {
			if (showPasswordIcon) setTextInputType(showPassword ? 'text' : 'password')
		}, [showPassword])

		const toggleShowPassword = () => {
			setShowPassword(!showPassword)
		}
		return (
			<TextInputWrapper {...props}>
				{withLabel && <TextInputLabel placeholder={t(placeholder)}>{t(placeholder)}</TextInputLabel>}
				<TextInputContainerStyled width={width}>
					<TextInputStyled
						disabled={disabled}
						ref={ref}
						type={textInputType}
						placeholder={t(`${placeholder.toString().toLowerCase()}`)}
						{...props}
					/>
					<InputIconsContainer>
						{showPasswordIcon && <ShowPasswordIcon show={showPassword} clickEvent={toggleShowPassword} />}
						{required && !isDirty && <RequiredAsteriskStyled>*</RequiredAsteriskStyled>}
					</InputIconsContainer>
				</TextInputContainerStyled>
				<TextInputError error={error} />
			</TextInputWrapper>
		)
	}
)

export default TextInput

const TextInputError = styled(Error)`
	position: absolute;
	top: 100%;
	margin: 0.3rem 0;
`
