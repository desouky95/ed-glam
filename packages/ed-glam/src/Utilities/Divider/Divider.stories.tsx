import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Divider } from '.'

export default {
	title: 'Utilities/Divider',
	component: Divider,
} as ComponentMeta<typeof Divider>

export const AvatarTemplate: ComponentStory<typeof Divider> = ({ ...props }) => (
	<div style={{ height: '20vh', width: '20vh' }}>
		Name
		<Divider {...props} />
		Name
	</div>
)

AvatarTemplate.storyName = 'Default Divider'
