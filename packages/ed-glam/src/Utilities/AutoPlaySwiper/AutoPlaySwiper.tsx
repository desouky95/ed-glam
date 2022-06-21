import React from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
type ItemProps = {
	label: string
}

const SwiperItemWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`
const SwiperItem: React.FC<ItemProps> = ({ children }) => <SwiperItemWrapper className="SliderItem">{children}</SwiperItemWrapper>

interface SwiperComposition {
	Item: React.FC<ItemProps>
}
type Props = {
	perSlide?: number
	children: React.ReactElement<ItemProps>[]
}
const AutoPlaySwiper: React.FC<Props> & SwiperComposition = ({ children, perSlide = 4 }) => {
	const settings: Settings = {
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: children.length < perSlide ? children.length : perSlide,
		slidesToScroll: perSlide,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	}
	return <Slider {...settings}>{children}</Slider>
}

AutoPlaySwiper.Item = SwiperItem

export default AutoPlaySwiper
