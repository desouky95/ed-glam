import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon, Icons } from './Icons';
import { FlexLayout } from '@eduact/ed-system';
export default {
	title: 'Icons',
	component: Icon,
	argTypes: {
		size: {
			type: 'string',
		},
	},
} as ComponentMeta<typeof Icon>;

export const IconsDefault: ComponentStory<typeof Icon> = (args) => {
	return (
		<FlexLayout flexWrap={'wrap'} gridGap="1rem">
			<Icon {...args}>
				<Icons.ChevronLeft />
			</Icon>
			<Icon color="orange" {...args}>
				<Icons.ChevronRight />
			</Icon>
			<Icon {...args}>
				<Icons.Warning />
			</Icon>
			<Icon {...args}>
				<Icons.DoubleArrowUp />
			</Icon>
			<Icon {...args}>
				<Icons.RightArrow />
			</Icon>
			<Icon {...args}>
				<Icons.Activity />
			</Icon>
			<Icon {...args}>
				<Icons.User />
			</Icon>
			<Icon {...args}>
				<Icons.Dashboard />
			</Icon>
			<Icon {...args}>
				<Icons.Settings />
			</Icon>
		</FlexLayout>
	);
};
