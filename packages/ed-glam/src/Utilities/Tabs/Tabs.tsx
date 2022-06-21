import { TextButton } from '@Components/Buttons/TextButton'
import { TextButtonProps } from '@Components/Buttons/TextButton/TextButton'
import { FlexLayout } from '@eduact/student-theme'
import React, { useState, useMemo, useEffect, useRef, createRef, RefObject, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { FlexboxProps, GridGapProps, GridProps, LayoutProps, SpaceProps } from 'styled-system'
import { Swiper } from '../Swiper'
import {
	ParentTabsWrapper,
	SingleTabWrapper,
	StyledTabsHeaders,
	TabHeaderStyled,
	TabsContentWrapper,
	TabsHeaderSwiper,
	TabsWrapper,
} from './Tabs.styled'
import { TabsContext, useTabsContext } from './useTabContext'
import { checkPropTypes } from 'prop-types'
import { ResponsiveVal } from '@eduact/student-theme'
type TabProps = {
	label: string
	isSelected?: boolean
} & LayoutProps

const Tab: React.FC<TabProps> = ({ label, children, isSelected, ...props }) => {
	return (
		<SingleTabWrapper isSelected={isSelected} {...props}>
			{children}
		</SingleTabWrapper>
	)
}

const TabButton: React.FC<TextButtonProps> = ({ ...props }) => {
	return <TextButton {...props} />
}

interface TabComposition {
	Item: React.FunctionComponent<TabProps>
	Button: React.FunctionComponent<TextButtonProps>
}
type Props = {
	children: Array<React.ReactElement<typeof Tab>> | React.ReactElement<typeof Tab>
	noHeader?: boolean
	activeIndex?: number
} & LayoutProps &
	SpaceProps

const Tabs: React.FunctionComponent<Props> & TabComposition = ({ children, noHeader = false, activeIndex = 0, ...props }) => {
	const [activeTab, setActiveTab] = useState<string>(activeIndex.toString())
	const value = useMemo(() => ({ activeTab, setActiveTab }), [activeTab])
	useEffect(() => {
		setActiveTab(activeIndex.toString())
	}, [activeIndex])

	return (
		<TabsWrapper {...props}>
			<TabsContext.Provider value={{ ...value, activeTabIndex: undefined, setActiveTabIndex: () => {} }}>
				{!noHeader && (
					<TabsHeaderSwiper>
						<Swiper padding={props.padding}>
							{!noHeader &&
								React.Children.map(children, (child, index) => {
									if (React.isValidElement(child)) {
										return (
											<TabHeaderStyled
												key={`${index}-${child.key}`}
												onClick={() => setActiveTab(index.toString())}
												selected={index.toString() === activeTab}
											>
												{child.props.label}
											</TabHeaderStyled>
										)
									}
								})}
						</Swiper>
					</TabsHeaderSwiper>
				)}
				<ParentTabsWrapper>
					<TabsContentWrapper activeTab={activeTab}>
						{React.Children.map(children, (child, index) => {
							if (React.isValidElement(child)) {
								return React.cloneElement(child as React.ReactElement<TabProps>, {
									isSelected: index.toString() === activeTab,
									...child.props,
								})
							}
						})}
					</TabsContentWrapper>
				</ParentTabsWrapper>
			</TabsContext.Provider>
		</TabsWrapper>
	)
}

// Tabs Props
type TabsInferProps<T> = {
	list: Array<T>
	noHeader?: boolean
	tabsGap?: ResponsiveVal<string>
	children: {
		tabs: (payload: { index: number; item: T }) => React.ReactElement | React.ReactElement[]
		contents?: (payload: { index: number; item: T; ref: RefObject<HTMLElement> }) => React.ReactElement | React.ReactElement[]
	}
}
type TabsDefaultProps = {
	list?: undefined
	noHeader?: boolean
	tabsGap?: ResponsiveVal<string>
	children: {
		tabs: React.ReactElement<typeof TabsHeaders>
		contents?: React.ReactElement<typeof TabsContents>
	}
}

type TTabsCommonProps = {
	onChange?: (value: string) => void
}
type TTabsProps<T> = TTabsCommonProps & (TabsInferProps<T> | TabsDefaultProps)

// Tabs Header Props
type TabsHeaderInferProps = {
	value: string
	children: (payload: { selected: boolean }) => React.ReactElement | React.ReactElement[]
	index: number
	label?: undefined
}
type TabsHeaderDefaultProps = {
	value: string
	children?: undefined
	index?: number
	label: any
}
type TabsHeaderProps = TabsHeaderDefaultProps | TabsHeaderInferProps
type TabsHeadersProps = {
	children: Array<React.ReactElement<typeof TabsHeader>> | React.ReactElement<typeof TabsHeader>
} & SpaceProps &
	FlexboxProps &
	GridProps
// Tabs Contents Props
type TabsContentInferProps = {
	value: string
	children: React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[]
}
type TabsContentDefaultProps = {
	value: string
	children: (payload: { selected: boolean }) => React.ReactElement | React.ReactElement[]
}

type TabsContentHeaderProps = TabsContentDefaultProps | TabsContentInferProps

type TabsHContentsProps = {
	children: Array<React.ReactElement<typeof TabsContent>> | React.ReactElement<typeof TabsContent>
} & SpaceProps &
	FlexboxProps &
	GridProps
export const TabsHeader: React.FunctionComponent<TabsHeaderProps> = ({ children, value, index, label }) => {
	const context = useTabsContext()
	if (!context) {
		throw new Error("Tabs isn't wrapped by TabsProvider")
	}
	const { activeTab, setActiveTab, setActiveTabIndex, onChange } = context
	const handleOnClick = () => {
		setActiveTab(value)
		setActiveTabIndex(index)
		onChange && onChange(value)
	}

	if (children === undefined) {
		return (
			<TTabHeaderStyled selected={activeTab === value} onClick={handleOnClick}>
				{label}
			</TTabHeaderStyled>
		)
	}
	return <div onClick={handleOnClick}>{children && children({ selected: activeTab === value })}</div>
}

export const TabsHeaders: React.FC<TabsHeadersProps> = ({ children, ...props }) => {
	return (
		<StyledTabsHeaders {...props}>
			{React.Children.map(children as Array<React.ReactElement<TabsHeaderProps>>, (child, index) => {
				if (React.isValidElement(child)) {
					const props = child.props
					return React.cloneElement(child, { ...props, index })
				}
			})}
		</StyledTabsHeaders>
	)
}

export const TabsContents: React.FC<TabsHContentsProps> = ({ children, ...props }) => {
	const context = useTabsContext()
	if (!context) {
		throw new Error("Tabs isn't wrapped by TabsProvider")
	}
	const { activeTabIndex } = context

	return (
		<>
			{children && (
				<TabContentsSwiperWrapper>
					<TabContentsSwiper activeIndex={activeTabIndex}>
						{React.Children.map(children, (child, index) => {
							return <TabContentWrapper>{child}</TabContentWrapper>
						})}
					</TabContentsSwiper>
				</TabContentsSwiperWrapper>
			)}
		</>
	)
}

export const TabsContent: React.FC<TabsContentHeaderProps> = ({ value, children }) => {
	return (
		<FlexLayout width="100%" flex={'1'} minWidth="100%">
			{children}
		</FlexLayout>
	)
}
export const TTabs = <T extends {}>({ children, list, onChange, noHeader, tabsGap }: React.PropsWithChildren<TTabsProps<T>>) => {
	const context = useTabsContext()
	if (!context) {
		throw new Error("Tabs isn't wrapped by TabsProvider")
	}
	const { activeTabIndex, activeTab } = context
	const tabsRefs = useRef<Array<RefObject<HTMLElement>>>([])
	const [refsCreated, setRefsCreated] = useState(false)
	// useEffect(() => {
	// 	onChange && onChange(activeTab)
	// }, [activeTab])

	useEffect(() => {
		if (list && children.contents && tabsRefs.current.length === 0) {
			tabsRefs.current = list.map(item => createRef())
			setRefsCreated(true)
		}
	}, [list, children.contents])

	const [validHeight, setValidHeight] = useState<string | undefined>()
	useLayoutEffect(() => {
		if (!refsCreated || activeTabIndex === undefined) return
		const nodeRef = tabsRefs.current[activeTabIndex]
		if (nodeRef && nodeRef.current) {
			const { current } = nodeRef
			const { height } = current?.getBoundingClientRect()
			setValidHeight(`${height}px`)
		}
	}, [refsCreated, activeTabIndex])

	if (typeof list === 'undefined' && list === undefined) {
		return (
			<div>
				{!noHeader && <FlexLayout>{children.tabs}</FlexLayout>}
				{children.contents && children.contents}
			</div>
		)
	}

	return (
		<div>
			{!noHeader && (
				<FlexLayout gridGap={tabsGap}>
					{list &&
						list.map((item, index) => {
							return typeof children.tabs === 'function' && children.tabs({ index, item })
						})}
				</FlexLayout>
			)}
			{children.contents && (
				<TabContentsSwiperWrapper height={validHeight}>
					<TabContentsSwiper height={validHeight} activeIndex={activeTabIndex}>
						{list &&
							list.map((item, index) => {
								return (
									<TabContentWrapper>
										{children.contents &&
											typeof children.contents === 'function' &&
											children.contents({ index, item, ref: tabsRefs.current[index] })}
									</TabContentWrapper>
								)
							})}
					</TabContentsSwiper>
				</TabContentsSwiperWrapper>
			)}
		</div>
	)
}
Tabs.Item = Tab
Tabs.Button = TabButton

export default Tabs

const TabContentsSwiperWrapper = styled.div<{ height?: string }>`
	display: flex;
	overflow: hidden;
	min-width: 100%;
	height: ${props => {
		return props.height
	}};
`
const TabContentsSwiper = styled.div<{ activeIndex?: number; height?: string }>`
	display: flex;
	min-width: 100%;
	flex: 1;
	/* height : ${props => {
		return props.height
	}}; */
	transform: ${props => (props.activeIndex ? `translateX(-${props.activeIndex * 100}%)` : '')};
	transition: all ease-in-out 300ms;
	/* border: 1px solid #000; */
`
const TabContentWrapper = styled.div`
	flex: 1;
	flex-grow: 1;
	/* border: 1px solid red; */
	min-width: 100%;
`

export const TTabHeaderStyled = styled.div<{ selected: boolean }>`
	color: ${props => props.theme.colors.purple};
	font-weight: bold;
	/* width: 6.25rem; */
	text-align: center;
	font-size: 0.875em;
	margin: 0px;
	cursor: pointer;
	line-height: 1.125rem;
	padding: 0.5em 0px;
	position: relative;
	min-width: 5rem;
	&::before {
		display: ${props => (props.selected ? 'block' : 'none')};
		content: '';
		position: absolute;
		height: 3px;
		width: 100%;
		background: rgb(181, 177, 255);
		left: 0;
		bottom: 0;
	}
`
