import { ComponentMeta } from '@storybook/react'
import { Colors, Theme } from '@eduact/student-theme'
import { IoIosAdd } from 'react-icons/io'
import TextButton from './TextButton'

export default {
	component: TextButton,
	title: 'Buttons/TextButton',
	parameters: {
		controls: {
			exclude: ['as', 'theme', 'forwardedAs', 'ref'],
		},
	},
	argTypes: {
		variant: {
			defaultValue: 'primary',
			type: 'string',
			control: { type: 'select' },
			options: Object.keys(Colors),
		},
		label: {
			defaultValue: 'Text Button',
			type: 'string',
		},
	},
} as ComponentMeta<typeof TextButton>

export const Button = ({ ...args }) => (
	<TextButton variant={args.variant}>
		<IoIosAdd />
		{args.label}
	</TextButton>
)
Button.storyName = 'Text Button'
