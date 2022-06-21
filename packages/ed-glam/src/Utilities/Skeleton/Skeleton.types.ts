import { MediaQuery } from '@eduact/student-theme'

export type SkeletonProps = {
	isLoading: boolean
}
export type SkeletonCarouselProps = {
	renderComponent: React.ReactElement
	numberOfItems: number
	hasTitle?: boolean
} & SkeletonProps
export type SkeletonAvatarProps = {
	isLoading?: boolean
	size?: MediaQuery
}
