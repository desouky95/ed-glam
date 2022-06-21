import { Meta, Story } from '@storybook/react'
import Dropdown, { DropdownProps, DropdownItem } from '@Components/InputFields/Dropdown/index'

const meta: Meta = {
	title: 'Inputs/Dropdown',
	component: Dropdown,
	parameters: {
		controls: {
			exclude: ['children'],
		},
	},
}
export default meta

const Template: Story<DropdownProps> = ({ children, ...props }) => (
	<Dropdown {...props}>
		<DropdownItem value="option1" onClick={() => {}}>
			Option sample 1
		</DropdownItem>
		<DropdownItem value="option 2" onClick={() => {}}>
			Option sample 2
		</DropdownItem>
		<DropdownItem value="option 3" onClick={() => {}}>
			Option sample 3
		</DropdownItem>
	</Dropdown>
)

export const Default = Template.bind({})
Default.argTypes = {
	width: { type: 'string', defaultValue: '100%' },
	selectedItemLabel: {
		control: { type: 'select' },
		defaultValue: 'Option sample 1',
		options: ['Option sample 1', 'Option sample 2', 'Option sample 3'],
	},
}

const Template2Options = Array.from({ length: 15 }).map((_, index) => `Option ${index + 1}`)
const Template2: Story<DropdownProps> = ({ children, ...props }) => (
	<Dropdown {...props}>
		{Template2Options.map(value => (
			<DropdownItem onClick={() => {}} value={value}>
				{value}
			</DropdownItem>
		))}
	</Dropdown>
)
export const DropdownWithScroll = Template2.bind({})
DropdownWithScroll.argTypes = {
	width: { type: 'string', defaultValue: '100%' },
	selectedItemLabel: {
		control: { type: 'select' },
		defaultValue: 'Option 1',
		options: Template2Options,
	},
}
