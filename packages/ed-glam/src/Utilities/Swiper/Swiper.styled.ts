import { Color, ResponsiveVal } from '@eduact/student-theme'
import { rgba } from 'polished'
import React from 'react'

import styled from 'styled-components'
import { grid, GridProps, space, SpaceProps, variant, style, system, createParser, createStyleFunction, styleFn } from 'styled-system'
export const SwiperWrapper = styled.div`
	display: flex;
	flex-direction: ${props => (props.theme.direction === 'rtl' ? 'row-reverse' : '')};
`
export const SwiperSlider = styled.div<SpaceProps & { isScrollable?: boolean }>`
	width: 100%;
	overflow-x: scroll;
	overflow-y: hidden;
	scroll-behavior: smooth;
	padding: 1rem;
	scrollbar-width: none;

	${space}
	::-webkit-scrollbar {
		height: ${props => (!props.isScrollable ? '0' : '0.4rem')} !important;
		width: 4rem;

		position: absolute;
		overflow: hidden;
	}

	::-webkit-scrollbar-track {
		border-radius: 20px;
		background: ${props => rgba(props.theme.colors.dark, 0.1)};
	}

	::-webkit-scrollbar-thumb {
		border-radius: 29px;
		background: black;
		background: ${props => props.theme.colors.primary};
	}

	::-webkit-scrollbar-thumb:hover {
		background: grey;
	}
`
export const SwiperOuter = styled.div`
	width: 100%;
	overflow-x: scroll;
	overflow-y: hidden;
	scroll-behavior: smooth;
	overflow: hidden;
`

const gridAutoColumnVariant = (props: any & { perSlide: ResponsiveVal<number>; children: any[] }) => {
	return variant({
		prop: 'perSlide',

		variants: {
			default: {
				gridAutoColumns: `minmax(${(1 / props.perSlide.default) * 100}%, 1fr)`,
			},
			sm: {
				gridAutoColumns: `minmax(${(1 / props.perSlide.sm) * 100}%, 1fr)`,
			},
			md: {
				gridAutoColumns: 'minmax(100%, 1fr)',
			},
			lg: {
				gridAutoColumns: `minmax(${(1 / props.perSlide.lg) * 100}%, 1fr)`,
			},
			xl: {
				gridAutoColumns: 'minmax(25%, 1fr)',
			},
		},
	})
}
export const SwiperInner = styled.div<GridProps>`
	display: flex;
	width: 100%;
	display: grid;
	grid-auto-flow: column dense;

	${grid}

	grid-column-gap: 2rem;
	justify-content: flex-start;
	height: ${props => (props.title === '' ? '' : '')};
`

export const SwiperInnerItem = styled.div`
	width: 100%;
`
export const SwiperProgressBar = styled.div`
	scroll-behavior: smooth;
	width: 100%;
	position: relative;
	height: 0.4rem;
	background: ${props => rgba(props.theme.colors.dark, 0.1)};
	border-radius: ${props => props.theme.borderRadii.medium}px;
	overflow: hidden;
`
export const SwiperProgressBarInner = styled.div<{ height?: string; background?: Color; position?: number; isIndicator?: boolean }>`
	${variant({ prop: 'background', scale: 'backgrounds' })}
	height: ${props => props.height ?? '0.4rem'};
	transition: all ease-in-out 250ms;
	border-radius: ${props => props.theme.borderRadii.medium}px;
	width: ${props => (props.isIndicator ? '4rem' : '')};
	position: ${props => (props.isIndicator ? 'absolute' : '')};
	left: ${props => {
		const maxPosition = 94
		return `${props.position && props.position > maxPosition ? maxPosition : props.position}%`
	}};
	width: ${props => (!props.isIndicator ? `${props.position}%` : '')};
`

export const SwiperContainer = styled.div`
	display: flex;
	align-items: center;
`
export const NavIcon = styled.div<{ color: Color }>`
	font-size: 2rem;
	place-items: center;
	color: ${props => props.theme.colors[props.color]};
	cursor: pointer;
	/* display: none; */
	display: grid;
	${({ theme }) => `${theme.mediaQueries.large}{
		margin: 0 2rem;
		
	}`}
`
