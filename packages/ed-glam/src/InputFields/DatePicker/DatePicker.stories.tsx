import { Meta, Story } from '@storybook/react'
import DatePicker from '@Components/InputFields/DatePicker/DatePicker'

const meta: Meta = {
	title: 'Inputs/DatePicker',
	component: DatePicker,
	argTypes: {
		width: { type: 'string', defaultValue: '100%' },
	},
}
export default meta

const Template: Story = args => <DatePicker {...args} />

export const Default = Template.bind({})
