import { SkeletonProps } from '../Skeleton.types';

export type SkeletonCarouselProps = {
	renderComponent: React.ReactElement;
	numberOfItems: number;
	hasTitle?: boolean;
} & SkeletonProps;
