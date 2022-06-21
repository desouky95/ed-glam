import styled from 'styled-components'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Swiper } from '.'

export default {
	title: 'Utilities/Swiper',
	component: Swiper,
	argTypes: {
		progressHeight: {
			control: {
				type: 'range',
				min: 0,
				max: 10,
				step: 1,
			},
			defaultValue: 2,
			name: 'Progress Height',
		},
		withProgress: {
			defaultValue: true,
			type: 'boolean',
			name: 'Use ProgressBar',
		},
		progressColor: {
			name: 'Progressbar Color',
		},
	},
} as ComponentMeta<typeof Swiper>

export const SwiperTemplate: ComponentStory<typeof Swiper> = ({ ...props }) => {
	return (
		<>
			<Swiper withProgress={props.withProgress} progressHeight={`${props.progressHeight}px`} {...props}>
				<Swiper.Item swipe="1">
					{/* <ImgHolder> */}
					<img alt="" src="https://picsum.photos/200" />
					{/* </ImgHolder> */}
				</Swiper.Item>
				<Swiper.Item swipe="1">
					{/* <ImgHolder> */}
					<img alt="" src="https://picsum.photos/200" />
					{/* </ImgHolder> */}
				</Swiper.Item>
			</Swiper>
		</>
	)
}
SwiperTemplate.storyName = 'Default Swiper'
const ImgHolder = styled.div`
	margin-right: 2rem;
`
