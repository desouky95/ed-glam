import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from './Avatar';

export default {
	title: 'Utilities/Avatar',
	component: Avatar,
	argTypes: {
		img: {
			type: 'string',
			control: {
				type: 'file',
			},
		},
		avatarSize: {
			control: { type: 'radio' },
			defaultValue: 'small',
		},
	},
} as ComponentMeta<typeof Avatar>;

export const AvatarTemplate: ComponentStory<typeof Avatar> = ({
	img,
	...props
}) => <Avatar img={img} {...props} />;

AvatarTemplate.storyName = 'Default Avatar';
