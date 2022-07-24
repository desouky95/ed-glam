import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkeletonTitle } from '../SkeletonTitle';
import SkeletonCarousel from './SkeletonCarousel';

export default {
	title: 'Skeletons/Carousel',
	argTypes: {
		numberOfItems: {
			defaultValue: 4,
			type: 'number',
		},
		isLoading: {
			type: 'boolean',
			defaultValue: false,
		},
		hasTitle: {
			type: 'boolean',
			defaultValue: false,
		},
	},
} as ComponentMeta<typeof SkeletonCarousel>;

export const SkeletonCarouselDefault: ComponentStory<
	typeof SkeletonCarousel
> = ({ isLoading, numberOfItems, hasTitle }) => {
	return (
		<SkeletonCarousel
			hasTitle={hasTitle}
			renderComponent={<SkeletonTitle />}
			isLoading={isLoading}
			numberOfItems={numberOfItems}
		/>
	);
};
