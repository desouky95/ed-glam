import React, { useEffect, useState } from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import styled from 'styled-components'
import { layout, LayoutProps, position, PositionProps, variant } from 'styled-system'
import { setInterval } from 'timers'

type ItemProps = {
	img: string
	news: NewsFeed
}
const SwiperItem: React.FC<ItemProps> = ({ img, news }) => {
	const openLink = () => {
		window.open(news.redirection_url, '_blank')
	}
	return (
		<SwiperImageWrapper onClick={openLink}>
			<img alt={news.content} src={img} />
		</SwiperImageWrapper>
	)
}
interface ImagesSwiperComposition {
	Item: React.FC<ItemProps>
}

type Props = {
	children: React.ReactElement<ItemProps>[] | React.ReactElement<ItemProps> | undefined
}
const ImagesSwiper: React.FC<Props> & ImagesSwiperComposition = ({ children }) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		let intervalID: NodeJS.Timeout
		const count = React.Children.count(children)
		if (count > 1) {
			intervalID = setTimeout(() => {
				const newIndex = currentSlide === count - 1 ? 0 : currentSlide + 1
				setCurrentSlide(newIndex)
			}, 5000)
		}
		return () => clearInterval(intervalID)
	}, [children, currentSlide])

	const handleNext = () => {
		const count = React.Children.count(children)
		setCurrentSlide(currentSlide === count - 1 ? 0 : currentSlide + 1)
	}
	const handlePrev = () => {
		const count = React.Children.count(children)
		setCurrentSlide(currentSlide === 0 ? count - 1 : currentSlide - 1)
	}

	return (
		<SwiperContentWrapper height={{ sm: '11.25rem', lg: '30vh' }}>
			<SwiperButton onClick={handlePrev} left={'0'}>
				<IoMdArrowDropleft />
			</SwiperButton>
			<SwiperInnerContent>
				{React.Children.map(children, (child, index) => {
					if (currentSlide === index) {
						return child
					}
				})}
			</SwiperInnerContent>
			<SwiperButton onClick={handleNext} right={'0'}>
				<IoMdArrowDropright />
			</SwiperButton>
		</SwiperContentWrapper>
	)
}

ImagesSwiper.Item = SwiperItem

const SwiperContentWrapper = styled.div<LayoutProps>`
	/* height: 30vh; */
	position: relative;
	width: 100%;
	img {
		max-width: 100%;
	}
	${layout}
`
const SwiperInnerContent = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`

const SwiperImageWrapper = styled.div`
	cursor: pointer;
	height: 100%;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`
const SwiperButton = styled.div<PositionProps>`
	width: 50px;
	height: 50px;
	background: ${props => props.theme.colors.maxBluePurple};
	border-radius: 50%;
	display: grid;
	place-content: center;
	font-size: 2rem;
	svg {
		opacity: 0.5;
	}
	opacity: 0.5;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 5;
	${position}
	cursor: pointer;
	transition: all ease-in-out 100ms;
	:hover {
		opacity: 1;
	}
`
export default ImagesSwiper
