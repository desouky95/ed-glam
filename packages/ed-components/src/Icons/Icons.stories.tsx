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
				<Icons.Activity />
			</Icon>
			<Icon {...args}>
				<Icons.AppRegistration />
			</Icon>

			<Icon {...args}>
				<Icons.ArrowForward />
			</Icon>
			<Icon {...args}>
				<Icons.Bolt />
			</Icon>
			<Icon {...args}>
				<Icons.Bookmark />
			</Icon>
			<Icon {...args}>
				<Icons.Check />
			</Icon>
			<Icon {...args}>
				<Icons.ChevronLeft />
			</Icon>
			<Icon {...args}>
				<Icons.ChevronLess />
			</Icon>
			<Icon {...args}>
				<Icons.ChevronMore />
			</Icon>
			<Icon {...args}>
				<Icons.ChevronRight />
			</Icon>
			<Icon {...args}>
				<Icons.CircleCheck />
			</Icon>
			<Icon {...args}>
				<Icons.ClassBookmark />
			</Icon>
			<Icon {...args}>
				<Icons.Close />
			</Icon>
			<Icon {...args}>
				<Icons.Dashboard />
			</Icon>
			<Icon {...args}>
				<Icons.DoubleArrowUp />
			</Icon>
			<Icon {...args}>
				<Icons.EyeIcon />
			</Icon>
			<Icon {...args}>
				<Icons.EyeoffIcon />
			</Icon>
			<Icon {...args}>
				<Icons.Filter />
			</Icon>
			<Icon {...args}>
				<Icons.Magnifier />
			</Icon>
			<Icon {...args}>
				<Icons.NotStarted />
			</Icon>
			<Icon {...args}>
				<Icons.RightArrow />
			</Icon>
			<Icon {...args}>
				<Icons.Settings />
			</Icon>
			<Icon {...args}>
				<Icons.SwapVertically />
			</Icon>
			<Icon {...args}>
				<Icons.User />
			</Icon>
			<Icon {...args}>
				<Icons.UserRejected />
			</Icon>
			<Icon {...args}>
				<Icons.UserVerified />
			</Icon>
			<Icon {...args}>
				<Icons.Warning />
			</Icon>
			<Icon {...args}>
				<Icons.WideClose />
			</Icon>
		</FlexLayout>
	);
};
