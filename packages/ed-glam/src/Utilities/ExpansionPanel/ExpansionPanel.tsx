import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import styled from 'styled-components'
import { rgba, cssVar, lighten } from 'polished'
import Icon from '@Components/Icons/Icon/Icon'
import { FlexLayout, Typography } from '@eduact/student-theme'
import Spacer from '../Spacer'
import { ArrowDownRound } from '@Components/Icons/Svg/Icons'
import { animated, config, easings, useSpring } from 'react-spring'
import useMeasure from 'react-use-measure'
type Props = {
	title?: JSX.Element
	bold?: boolean
}
const ExpansionPanel: React.FC<Props> = ({ title, bold, children }) => {
	const [opened, setOpened] = useState(false)
	const [height, setHeight] = useState<number>()
	const ExpansionPanelRef = useCallback((e: HTMLDivElement) => {
		if (e) {
			console.log(e.scrollHeight)
			setHeight(e.scrollHeight)
		}
	}, [])

	return (
		<StyledExpansionPanel opened={opened} ref={ExpansionPanelRef}>
			<ExpansionPanelHeader opened={opened} onClick={() => setOpened(!opened)}>
				<ExpansionPanelTitle>{title}</ExpansionPanelTitle>
				<ExpansionToggler opened={opened}>
					<MdKeyboardArrowDown />
				</ExpansionToggler>
			</ExpansionPanelHeader>
			<ExpansionContent ref={ExpansionPanelRef} height={height} bold={bold} opened={opened}>
				<div className="contentWrapper">{children}</div>
			</ExpansionContent>
		</StyledExpansionPanel>
	)
}

type IAccordionContext = {
	opened: boolean
	setOpened: (value: boolean) => void
	expandable: boolean
}

const AccordionContext = createContext<IAccordionContext | null>(null)

const useAccordionContext = () => {
	const context = useContext(AccordionContext)
	if (!context) {
		throw new Error('No AccordionProvider found !!!')
	}
	return { ...context }
}

interface AccordionComposition {
	Summary: React.FC<AccordionSummaryProps>
	Details: React.FC
}
type AccordionProps = {
	opened?: boolean
	expandable?: boolean
}

const AccordionWrapper = styled.div<{ opened: boolean }>`
	background: ${props => (props.opened ? '#f5f5f7' : '')};
	box-shadow: ${props => (props.opened ? 'inset 0px -40px 30px -30px rgb(0 0 0 / 20%)' : '')};
`
export const Accordion: React.FC<AccordionProps> & AccordionComposition = ({ opened = false, children, expandable = true }) => {
	const [_opened, setOpened] = useState(opened)

	return (
		<AccordionContext.Provider value={{ opened: _opened, setOpened, expandable }}>
			<AccordionWrapper opened={_opened}>{children}</AccordionWrapper>
		</AccordionContext.Provider>
	)
}

type AccordionSummaryProps = {
	extraActions?: () => React.ReactNode
}

const AccordionToggleButton = styled(Typography)<{ opened: boolean }>`
	cursor: pointer;
	svg {
		transform: ${props => (!props.opened ? '' : 'rotate(180deg)')};
		transition: all ease-in-out 200ms;
	}
`
const SummaryWrapper = styled(FlexLayout)`
	position: sticky;
	top: 0;
	z-index: 999;
	background: inherit;
`
const AccordionSummary: React.FC<AccordionSummaryProps> = ({ children, extraActions }) => {
	const { opened, setOpened, expandable } = useAccordionContext()
	return (
		<SummaryWrapper px="1rem" justifyContent="space-between">
			<div>{children}</div>
			<FlexLayout alignItems="center">
				{expandable && (
					<AccordionToggleButton
						opened={opened}
						onClick={() => {
							setOpened(!opened)
						}}
					>
						<ArrowDownRound />
					</AccordionToggleButton>
				)}
				{extraActions && (
					<>
						<Spacer mr="2.5rem" />
						{extraActions()}
					</>
				)}
			</FlexLayout>
		</SummaryWrapper>
	)
}

const AccordionDetailsWrapper = styled.div<{ height: number; opened: boolean }>``
const AccordionDetails: React.FC = ({ children }) => {
	const { opened } = useAccordionContext()
	const [height, setHeight] = useState(0)
	const detailsRef = useCallback((node: HTMLDivElement) => {
		if (node) {
			setHeight(node.scrollHeight)
		}
	}, [])

	const collapse = useSpring({
		maxHeight: opened ? `${height}px` : '0px',
		overflow: 'hidden',
		opacity: opened ? '1' : '0',
		visibility: opened ? 'visible' : 'hidden',
		config: {
			easing: easings.easeInOutExpo,
			duration: 600,
		},
	})
	return (
		<animated.div style={{ ...collapse } as unknown as React.CSSProperties}>
			<div ref={detailsRef}>
				<AccordionDetailsWrapper height={height} opened={opened}>
					<div className="details-children">{children}</div>
				</AccordionDetailsWrapper>
			</div>
		</animated.div>
	)
}
Accordion.Summary = AccordionSummary
Accordion.Details = AccordionDetails
const StyledExpansionPanel = styled.div<{ opened: boolean }>`
	overflow: hidden;
	margin: 1rem 0;
	img {
		width: 100%;
	}
	ol,
	ul {
		padding-inline-start: 2em !important;
		list-style: inside;
	}
	li {
		text-align: justify;
	}
`
const ExpansionPanelHeader = styled.div<{ opened: boolean }>`
	padding: 1em;
	border-radius: 0.5em;
	display: flex;
	justify-content: space-between;
	background: ${props => rgba(props.theme.colors.maxBluePurple, 0.1)};
	cursor: pointer;
	border-bottom-left-radius: ${props => {
		return props.opened ? '0' : null
	}};
	border-bottom-right-radius: ${props => {
		return props.opened ? '0' : null
	}};
	border-bottom: 0.2em solid transparent;
	border-color: ${props => {
		return props.opened ? 'royalblue' : null
	}};
	align-items: center;
	&:hover {
		box-shadow: 0 1.5em 3em -1em rgb(0 0 0 / 10%);
	}
`
const ExpansionPanelTitle = styled.div`
	font-size: 1.2rem;
	font-weight: 700;
`

const ExpansionToggler = styled.div<{ opened: boolean }>`
	font-size: 1.5em;
	transition: all ease-in-out 400ms;
	transform: ${props => {
		return props.opened ? `rotate(180deg)` : null
	}};
`
const ExpansionContent = styled.div<{ opened: boolean; bold?: boolean; height?: number }>`
	transition: max-height ease-in-out 400ms;
	background: ${props => props.theme.colors.cultured};
	/* overflow: scroll; */
	max-height: ${props => {
		return props.opened ? `${props.height}px` : '0'
	}};
	border-radius: 0.5em;
	.contentWrapper {
		padding: 1em;
		text-align: initial;
		font-weight: ${props => (props.bold ? '600' : '')};
	}
	line-height: 1.5;
`

export default ExpansionPanel
