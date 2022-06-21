import { Meta, Story } from '@storybook/react'
import PhoneInput, { PhoneInputProps } from '@Components/InputFields/PhoneInput/PhoneInput'

const meta: Meta = {
	title: 'Inputs/PhoneInput',
	component: PhoneInput,
	parameters: {
		controls: {
			exclude: ['theme', 'as', 'forwardedAs'],
		},
	},
}
export default meta

const Template: Story<PhoneInputProps> = args => <PhoneInput {...args} />

export const Default = Template.bind({})
Default.args = {
	value: '01248594409',
}
