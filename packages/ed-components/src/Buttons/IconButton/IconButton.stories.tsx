import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Colors } from '@eduact/student-theme'
import { IoMdAdd } from 'react-icons/io'
import IconButton from './IconButton'

export default {
	title: 'Buttons/Icon Button',
	component: IconButton,

	argTypes: {
		variant: {
			control: {
				type: 'select',
			},
			defaultValue: 'primary',
			options: Object.keys(Colors),
		},
		size: {
			defaultValue: 16,
			control: {
				type: 'range',
			},
		},
		icon: {
			table: {
				disable: true,
			},
		},
	},
} as ComponentMeta<typeof IconButton>

const IconTemplate: ComponentStory<typeof IconButton> = ({ icon, tooltip, variant, size }) => {
	return <IconButton icon={<IoMdAdd />} size={size} variant={variant} tooltip={tooltip} />
}

export const IconButtonStory = IconTemplate.bind({})
IconButtonStory.args = {
	icon: <IoMdAdd />,
	variant: 'primary',
}
IconButtonStory.storyName = 'Icon Button'

export const IconButtonWithTooltip = IconButtonStory.bind({})
IconButtonWithTooltip.argTypes = {
	...IconButtonStory.argTypes,
	tooltip: {
		defaultValue: 'Tooltip',
	},
}
