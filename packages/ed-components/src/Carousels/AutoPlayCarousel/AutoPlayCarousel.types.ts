import { BreakpointInPx, Color, ResponsiveVal } from '@eduact/student-theme';
import { SwiperProps, SwiperSlide } from 'swiper/react';
import { Breakpoint, Theme } from '@eduact/student-theme';
import { SwiperOptions } from 'swiper';
import React from 'react';

export type AutoPlayCarouselProps = {
	children:
		| React.ReactElement<typeof SwiperSlide>
		| Array<React.ReactElement<typeof SwiperSlide>>;
	arrowColor?: Color;
	withArrows?: boolean;
} & SwiperProps;
