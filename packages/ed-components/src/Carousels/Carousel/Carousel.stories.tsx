import { ComponentMeta, ComponentStory } from '@storybook/react';
import Carousel, { CarouselSide } from './Carousel';

export default {
	title: 'Carousels/Carousel',
	component: Carousel,
} as ComponentMeta<typeof Carousel>;

export const CarouselStory: ComponentStory<typeof Carousel> = () => {
	return (
		<Carousel>
			<CarouselSide></CarouselSide>
			<CarouselSide></CarouselSide>
			<CarouselSide></CarouselSide>
			<CarouselSide></CarouselSide>
			<CarouselSide></CarouselSide>
			<CarouselSide></CarouselSide>
		</Carousel>
	);
};
