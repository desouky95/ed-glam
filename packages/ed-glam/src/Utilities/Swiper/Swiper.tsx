import { Color, ResponsiveVal } from '@eduact/student-theme'
import React, { useRef, useState, useCallback } from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { GridProps, SpaceProps } from 'styled-system'
import {
	SwiperWrapper,
	SwiperSlider,
	SwiperInner,
	SwiperProgressBar,
	SwiperProgressBarInner,
	NavIcon,
	SwiperOuter,
	SwiperInnerItem,
} from './Swiper.styled'
import * as SlickSwiper from 'react-slick'

type ItemProps = {
	swipe?: string
}
const SwiperItem: React.FC<ItemProps> = ({ children }) => <div>{children}</div>
interface SwiperComposition {
	Item: React.FunctionComponent<ItemProps>
}
type Props = {
	withProgress?: boolean
	progressHeight?: number | string
	progressColor?: Color
	isIndicator?: boolean
	withArrows?: boolean
	arrowsColor?: Color
	// children: React.FC<ItemProps>[] | React.FC<ItemProps> | any
	perSlide?: ResponsiveVal<number>
} & GridProps &
	SpaceProps
const Swiper: React.FC<Props> & SwiperComposition = ({
	children,
	withProgress = false,
	progressHeight,
	isIndicator = false,
	progressColor = 'primary',
	withArrows = true,
	arrowsColor = 'primary',
	perSlide = { sm: 1, lg: 4 },
	...props
}) => {
	const SwiperSliderRef = useRef<HTMLDivElement>(null)
	const progressRef = useRef<HTMLDivElement>(null)
	const [progressPosition, setProgressPosition] = useState<number>(0)
	const [isScrollable, setIsScrollable] = useState<boolean>(false)
	const _ref = useCallback((node: HTMLDivElement) => {
		let grabbed = false
		let direction: 'left' | 'right'
		const getProgressPercent = () => {
			if (node && node.parentElement)
				return (node.parentElement.scrollLeft / (node.parentElement.scrollWidth - node.parentElement.clientWidth)) * 100
		}
		const handleDragStart = (e: MouseEvent) => {
			// e.preventDefault()
		}
		const handleScroll = (e: Event) => {
			if (progressRef && progressRef.current) {
				// progressRef.current.style.left = `${getProgressPercent()}%`
				setProgressPosition(getProgressPercent() ?? 0)
			}
		}
		const handleMouseDown = (e: Event) => {
			grabbed = true
			if (node) node.style.cursor = 'grabbing'
		}
		const handleClick = (e: Event) => {
			grabbed = true
			if (node) node.style.cursor = 'grabbing'
		}
		const handleMouseUp = (e: Event) => {
			grabbed = false
			if (node) node.style.cursor = 'default'
			if (node && node.parentElement) {
				node.parentElement.scrollLeft -= direction == 'left' ? -1 * node.parentElement.clientWidth : node.parentElement.clientWidth
			}
		}

		const handleMouseLeave = (e: Event) => {
			grabbed = false
			if (node) node.style.cursor = 'default'
			if (node && node.parentElement) {
				node.parentElement.scrollLeft -= direction == 'left' ? -1 * node.parentElement.clientWidth : node.parentElement.clientWidth
			}
		}
		const handleMouseMove = (e: MouseEvent) => {
			e.stopPropagation()
			if (!grabbed) return
			console.log(e)
			if (node && node.parentElement) {
				// node.parentElement.scrollLeft -= e.movementX
				direction = e.movementX < 0 ? 'left' : 'right'
			}
		}
		const handleWheel = (e: WheelEvent) => {
			// e.preventDefault()
			// if (ref.current && ref.current.parentElement) {
			// 	ref.current.parentElement.scrollLeft += e.deltaY
			// }
		}

		if (node && node.parentElement) {
			// const observer = new IntersectionObserver((entries, observer) => {
			// 	entries.forEach(entry => {
			// 		if (entry && entry.rootBounds && node) {
			// 			console.log(entry.intersectionRect)
			// 			if (entry.rootBounds?.width < node?.scrollWidth) {
			// 				setIsScrollable(true)
			// 				observer.unobserve(node)
			// 			}
			// 		}
			// 	})
			// })
			// observer.observe(node)
			setIsScrollable(node.scrollWidth > node.clientWidth)

			// node.addEventListener('dragstart', handleDragStart)
			// node.addEventListener('drop', handleDragStart)
			// node.addEventListener('click', handleClick)
			// node.addEventListener('mouseleave', handleMouseLeave)
			node.parentElement.addEventListener('scroll', handleScroll)
			// node.addEventListener('mousedown', handleMouseDown)
			// node.addEventListener('mouseup', handleMouseUp)
			// if (!withArrows) {
			// node.addEventListener('mousemove', handleMouseMove)
			// node.addEventListener('wheel', handleWheel)
			// }
		}
		return () => {
			if (node && node.parentElement) {
				// node.removeEventListener('click', handleClick)
				// node.removeEventListener('mouseleave', handleMouseLeave)
				// node.removeEventListener('mousemove', handleMouseMove)
				// node.removeEventListener('mousedown', handleMouseDown)
				// node.removeEventListener('dragstart', handleDragStart)
				// node.removeEventListener('drop', handleDragStart)
				// node.removeEventListener('mouseup', handleMouseUp)
				// node.removeEventListener('wheel', handleWheel)
				node.parentElement.removeEventListener('scroll', handleScroll)
			}
		}
	}, [])
	const handleScroll = React.useCallback((dir: 'left' | 'right') => {
		if (!SwiperSliderRef.current) return
		if (typeof perSlide === 'number') {
			const scrollOffset = SwiperSliderRef.current.clientWidth * (1 / perSlide)
			const offsetDir = dir === 'left' ? -1 * scrollOffset : scrollOffset
			SwiperSliderRef.current.scrollLeft += offsetDir
		} else {
			if (perSlide.sm) {
				const scrollOffset = SwiperSliderRef.current.clientWidth * (1 / perSlide.sm)
				const offsetDir = dir === 'left' ? -1 * scrollOffset : scrollOffset
				SwiperSliderRef.current.scrollLeft += offsetDir
			}
		}
	}, [])

	return (
		// <SwiperContainer>
		<SwiperWrapper>
			{isScrollable && withArrows && (
				<NavIcon color={arrowsColor} onClick={() => handleScroll('left')}>
					<IoIosArrowDropleftCircle />
				</NavIcon>
			)}
			<SwiperOuter>
				<SwiperSlider isScrollable={isScrollable} ref={SwiperSliderRef} {...props}>
					<SwiperInner {...props} draggable="false" ref={_ref}>
						{React.Children.map(children, (child, index) => (
							<SwiperInnerItem key={`slider-innner-${index}`}>{child}</SwiperInnerItem>
						))}
					</SwiperInner>
				</SwiperSlider>

				{/* {withProgress && isScrollable && (
					<SwiperProgressBar>
						<SwiperProgressBarInner
							// isIndicator={isIndicator}
							position={progressPosition}
							background={progressColor}
							height={progressHeight?.toString()}
							ref={progressRef}
						/>
					</SwiperProgressBar>
				)} */}
			</SwiperOuter>
			{isScrollable && withArrows && (
				<NavIcon color={arrowsColor} onClick={() => handleScroll('right')}>
					<IoIosArrowDroprightCircle />
				</NavIcon>
			)}
		</SwiperWrapper>

		// </SwiperContainer>
	)
}

Swiper.Item = SwiperItem

// export default React.memo<Props>(Swiper, (prev, next) => {
// 	return prev.children !== next.children
// })

export default Swiper
