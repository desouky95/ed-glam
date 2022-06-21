import React from 'react'
import styled from 'styled-components'
import { grid, GridProps, space, SpaceProps } from 'styled-system'
import { StyledWrapper } from '../Skeleton.styled'
import { SkeletonCarouselProps } from '../Skeleton.types'
import SkeletonTitle from './SkeletonTitle'
import _uniqueId from 'lodash/uniqueId'
const SkeletonCarousel: React.FC<SkeletonCarouselProps & SpaceProps & GridProps> = ({
	isLoading,
	numberOfItems,
	children,
	renderComponent,
	hasTitle,
	...props
}) => {
	if (isLoading)
		return (
			<OuterSkeletonWrapper {...props}>
				{hasTitle && <SkeletonTitle marginBottom={'3.75rem'} />}
				<SkeletonCarouselWrapper {...props} itemsNo={numberOfItems} background={'transparent'}>
					{Array.from(Array(numberOfItems)).map((i, index) => {
						return React.cloneElement(renderComponent, { key: `${index}-${_uniqueId('carousel-')}` })
					})}
				</SkeletonCarouselWrapper>
			</OuterSkeletonWrapper>
		)
	return <>{children}</>
}

export default SkeletonCarousel

const OuterSkeletonWrapper = styled.div<SpaceProps>`
	${space}
`
const SkeletonCarouselWrapper = styled(StyledWrapper)<{ itemsNo: number } & SpaceProps & GridProps>`
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(${props => (props.itemsNo < 4 ? 4 : props.itemsNo)}, 1fr);
	place-items: center;
	grid-gap: 3rem;
	${grid}
`
