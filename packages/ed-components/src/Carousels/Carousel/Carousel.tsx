import { useElementSize, useScreenSize, useSwipe } from '@eduact/ed-system';
import React, { useMemo, useRef } from 'react';
import styled from 'styled-components';

export const CarouselSide = () => {
	return <div>CarouselSide</div>;
};

type CarouselProps = {
	slidesPerView?: number;
	slidesPerGroup?: number;
};

const StyledCarouselGroup = styled.div`
	background: red;
	width: 100%;
	min-width: 100%;
	height: 100px;
	display: flex;
`;

const StyledCarouselWrapper = styled.div`
	display: flex;
	overflow: hidden;
	background: yellow;
	height: 20vh;
	transition: all 0.35s ease-out;
	/* touch-action: none; */
	/* user-select: none; */
`;

const Carousel: React.FC<CarouselProps> = ({
	children,
	slidesPerGroup = 4,
	slidesPerView = 4,
}) => {
	const parentRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const { width } = useElementSize(parentRef);
	const { translate } = useSwipe(wrapperRef);
	const groups = useMemo(() => {
		return Math.round(React.Children.count(children) / slidesPerView);
	}, [children]);

	const getGroupSlides = (index: number) => {
		const slides = React.Children.toArray(children);
		const startIndex = index * slidesPerGroup;
		const endIndex = index * slidesPerGroup + slidesPerGroup - 1;
		const resolvedEndIndex =
			endIndex > slides.length ? slides.length - 1 : endIndex;

		const returnedSlides = slides.splice(startIndex, resolvedEndIndex);
		return returnedSlides;
	};

	return (
		<div ref={parentRef}>
			<StyledCarouselWrapper
				ref={wrapperRef}
				style={{ width: `${width}px`, transform: translate }}
			>
				{/* {Array(groups)
					.fill(1)
					.map((_, index) => {
						return <CarouselGroup slides={getGroupSlides(index)} />;
					})} */}
			</StyledCarouselWrapper>
		</div>
	);
};

type CarouselGroupProps = {
	slides: React.ReactNode | React.ReactNode[];
};

const GroupSlide = styled.div<{ width: number }>`
	width: ${(props) => props.width}px;
	background: green;
`;
const CarouselGroup: React.VoidFunctionComponent<CarouselGroupProps> = ({
	slides,
}) => {
	const groupRef = useRef(null);
	const { width } = useElementSize(groupRef);
	const slidesNum = useMemo(() => {
		return React.Children.count(slides);
	}, [slides]);
	return (
		<StyledCarouselGroup ref={groupRef}>
			{width && (
				<>
					{React.Children.map(slides, (slide, index) => {
						return <GroupSlide width={width / slidesNum}>{index}</GroupSlide>;
					})}
				</>
			)}
		</StyledCarouselGroup>
	);
};
export default Carousel;
