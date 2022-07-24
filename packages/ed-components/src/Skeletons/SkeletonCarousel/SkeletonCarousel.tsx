import { grid, GridProps, space, SpaceProps } from 'styled-system';
import { SkeletonCarouselProps } from './SkeletonCarousel.types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledWrapper } from '../Skeleton.styled';
import { SkeletonTitle } from '../SkeletonTitle';
import _uniqueId from 'lodash/uniqueId';
const SkeletonCarousel: React.FC<
	SkeletonCarouselProps & SpaceProps & GridProps
> = ({
	isLoading,
	numberOfItems,
	children,
	renderComponent: RenderComponent,
	hasTitle,
	...props
}) => {
	if (isLoading)
		return (
			<OuterSkeletonWrapper {...props}>
				{hasTitle && <SkeletonTitle marginBottom={'3.75rem'} />}
				<SkeletonCarouselWrapper
					{...props}
					itemsNo={numberOfItems}
					background={'transparent'}
				>
					{Array.from(Array(numberOfItems)).map((i, index) => {
						return (
							<React.Fragment key={`${index}-${_uniqueId('carousel-')}`}>
								{RenderComponent}
							</React.Fragment>
						);
					})}
				</SkeletonCarouselWrapper>
			</OuterSkeletonWrapper>
		);
	return <>{children}</>;
};

export default SkeletonCarousel;

const OuterSkeletonWrapper = styled.div<SpaceProps>`
	${space}
`;
const SkeletonCarouselWrapper = styled(StyledWrapper)<
	{ itemsNo: number } & SpaceProps & GridProps
>`
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(
		${(props) => (props.itemsNo < 4 ? 4 : props.itemsNo)},
		1fr
	);
	place-items: center;
	grid-gap: 3rem;
	${grid};
`;
