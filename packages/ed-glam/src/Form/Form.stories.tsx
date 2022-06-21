import React from 'react'
import { Meta, Story } from '@storybook/react'
import { RaisedButton } from '@Components/Buttons/RaisedButton'
import Form, { FormProps } from '@Components/Form/Form'
import TextInput from '@Components/InputFields/TextInput'
import TextInputValidationMessage from '@Components/InputFields/TextInputValidationMessage/TextInputValidationMessage'
import PhoneInput from '@Components/InputFields/PhoneInput'

const meta: Meta = {
	title: 'General/Form',
	component: Form,
	parameters: {
		controls: {
			exclude: ['theme', 'as', 'forwardedAs'],
		},
	},
}
export default meta

const Template: Story<FormProps> = ({ children, ...props }) => (
	<Form formHeader="Welcome back!" {...props}>
		<TextInput type="email" placeholder="Email" required />
		<TextInput type="password" placeholder="Password" required showPasswordIcon />
		<RaisedButton type="button" variant="primary" outlined={false} width="100%" marginTop={4}>
			Log in
		</RaisedButton>
	</Form>
)

const TemplateWithValidation: Story<FormProps> = ({ children, ...props }) => (
	<Form formHeader="Welcome back!" {...props}>
		<TextInput type="email" placeholder="Email" required />
		<TextInputValidationMessage>Email is required</TextInputValidationMessage>
		<TextInput type="password" placeholder="Password" required showPasswordIcon />
		<TextInputValidationMessage>Password is required</TextInputValidationMessage>
		<RaisedButton type="button" variant="primary" outlined={false} width="100%" marginTop={2}>
			Log in
		</RaisedButton>
	</Form>
)

const RegistrationTemplate: Story<FormProps> = ({ children, ...props }) => (
	<Form formHeader="Let's get you signed up" {...props}>
		<TextInput type="email" placeholder="Email" required />
		<TextInput placeholder="Name" required />
		<PhoneInput placeholder="Phone Number" required />
		<TextInput type="password" placeholder="Password" required showPasswordIcon />
		<TextInput type="password" placeholder="Confirm Password" required showPasswordIcon />

		<RaisedButton type="button" variant="primary" outlined={false} width="100%" marginTop={2}>
			Sign up
		</RaisedButton>
	</Form>
)

export const Default = Template.bind({})
Default.args = {
	marginX: 'auto',
}
Default.argTypes = {
	formHeader: {
		type: 'string',
		defaultValue: 'Welcome back!',
	},
	marginX: { type: 'string', defaultValue: 'auto' },
	paddingTop: { type: 'string', defaultValue: '32px' },
	paddingBottom: { type: 'string', defaultValue: '20px' },
	paddingX: { type: 'string', defaultValue: '20px' },
	marginY: { type: 'string', defaultValue: '16px' },
}

export const FormWithValidation = TemplateWithValidation.bind({})
FormWithValidation.args = {
	marginX: 'auto',
}
FormWithValidation.argTypes = Default.argTypes

export const RegistrationForm = RegistrationTemplate.bind({})
RegistrationForm.args = {
	marginX: 'auto',
}
