import React from 'react'
import { ComponentMeta } from '@storybook/react'
import TextInput from './TextInput'

export default {
	title: 'Inputs/TextInput',
	component: TextInput,
	argTypes: {
		type: {
			control: { type: 'select' },
			defaultValue: 'text',
			options: ['text', 'number', 'password', 'email'],
		},
		placeholder: { defaultValue: 'Text input sample', type: 'string' },
		required: {
			defaultValue: false,
			type: 'boolean',
		},
		isDirty: {
			defaultValue: false,
			type: 'boolean',
		},
		showPasswordIcon: {
			defaultValue: false,
			type: 'boolean',
		},
		width: { defaultValue: '100%', type: 'string' },
	},
} as ComponentMeta<typeof TextInput>

export const Default = ({ ...args }) => <TextInput {...args} />

export const TextField = {
	title: 'TextField',
	component: TextInput,
	args: { placeholder: 'Text input sample' },
}

export const PasswordField = {
	title: 'PasswordField',
	args: {
		placeholder: 'Enter your password',
		type: 'password',
	},
} as ComponentMeta<typeof TextInput>

export const PasswordWithIcon = {
	title: 'PasswordWithIcon',
	args: {
		placeholder: 'Enter your password',
		showPasswordIcon: true,
	},
} as ComponentMeta<typeof TextInput>

export const NumberField = {
	title: 'NumberField',
	args: {
		placeholder: 'Enter a number',
		type: 'number',
	},
} as ComponentMeta<typeof TextInput>
