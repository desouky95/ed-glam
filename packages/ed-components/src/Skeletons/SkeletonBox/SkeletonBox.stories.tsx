import { ComponentMeta, ComponentStory } from '@storybook/react';
import SkeletonBox from './SkeletonBox';

export default {
	title: 'Skeletons/Box',
	component: SkeletonBox,
	argTypes: {},
} as ComponentMeta<typeof SkeletonBox>;

export const SkeletonBoxDefault: ComponentStory<typeof SkeletonBox> = ({
	children,
	...args
}) => {
	return <SkeletonBox borderRadius={15} {...args} />;
};
