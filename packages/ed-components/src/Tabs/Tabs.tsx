import { FlexLayout } from '@eduact/ed-system';
import React, {
	createRef,
	RefObject,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';
import { TabsProps } from './Tabs.types';
import { useTabsContext } from './TabsProvider';

const Tabs = <T extends {}>({
	list,
	children,
	noHeader,
	tabsGap,
}: React.PropsWithChildren<TabsProps<T>>) => {
	const context = useTabsContext();
	if (!context) {
		throw new Error("Tabs isn't wrapped by TabsProvider");
	}

	const { activeTabIndex, activeTab } = context;
	const tabsRefs = useRef<Array<RefObject<HTMLElement>>>([]);
	const [refsCreated, setRefsCreated] = useState(false);

	useEffect(() => {
		if (list && children.contents && tabsRefs.current.length === 0) {
			tabsRefs.current = list.map((item) => createRef());
			setRefsCreated(true);
		}
	}, [list, children.contents]);
	//
	const [validHeight, setValidHeight] = useState<string | undefined>();

	useLayoutEffect(() => {
		if (!refsCreated || activeTabIndex === undefined) return;
		const nodeRef = tabsRefs.current[activeTabIndex];
		if (nodeRef && nodeRef.current) {
			const { current } = nodeRef;
			const { height } = current?.getBoundingClientRect();
			setValidHeight(`${height}px`);
		}
	}, [refsCreated, activeTabIndex]);

	if (typeof list === 'undefined' && list === undefined) {
		return (
			<React.Fragment>
				{!noHeader && <FlexLayout>{children.tabs}</FlexLayout>}
				{children.contents && children.contents}
			</React.Fragment>
		);
	}

	return (
		<div>
			{!noHeader && (
				<FlexLayout gridGap={tabsGap}>
					{list &&
						list.map((item, index) => {
							return (
								typeof children.tabs === 'function' &&
								children.tabs({ index, item })
							);
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
											children.contents({
												index,
												item,
												ref: tabsRefs.current[index],
											})}
									</TabContentWrapper>
								);
							})}
					</TabContentsSwiper>
				</TabContentsSwiperWrapper>
			)}
		</div>
	);
};

export default Tabs;
const TabContentsSwiperWrapper = styled.div<LayoutProps>`
	/* display: flex; */
	overflow: hidden;
	min-width: 100%;
	${layout};
`;

const TabContentsSwiper = styled.div<{ activeIndex?: number; height?: string }>`
	display: flex;
	min-width: 100%;
	flex: 1;

	transform: ${(props) =>
		props.activeIndex ? `translateX(-${props.activeIndex * 100}%)` : ''};
	transition: all ease-in-out 300ms;
	/* border: 1px solid #000; */
`;
const TabContentWrapper = styled.div`
	flex: 1;
	flex-grow: 1;
	overflow: hidden;
	/* border: 1px solid red; */
	min-width: 100%;
`;
