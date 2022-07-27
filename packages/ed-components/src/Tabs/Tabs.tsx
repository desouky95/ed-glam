import { FlexLayout } from '@eduact/ed-system';
import React, {
	MutableRefObject,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';
import { TabsProps } from './Tabs.types';
import { useTabsContext } from './TabsProvider';
import { uniqueId } from 'lodash';
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
	const tabsRefs = useRef<Array<MutableRefObject<HTMLElement>>>([]);

	const [validHeight, setValidHeight] = useState<string | undefined>();

	useLayoutEffect(() => {
		if (activeTabIndex === undefined) return;

		const nodeRef = tabsRefs.current[activeTabIndex];
		if (nodeRef && nodeRef.current) {
			const { current } = nodeRef;
			const { height } = current?.getBoundingClientRect();
			setValidHeight(`${height}px`);
		}
	}, [activeTabIndex, tabsRefs]);

	if (typeof list === 'undefined' && list === undefined) {
		return (
			<React.Fragment>
				{!noHeader && <FlexLayout>{children.tabs}</FlexLayout>}
				{children.contents && children.contents}
			</React.Fragment>
		);
	}

	const handleAssignRef = (e: HTMLDivElement | null) => {
		if (!e) return;
		const _tabsRefs = tabsRefs;
		_tabsRefs.current.push({ current: e });
	};

	return (
		<div>
			{!noHeader && (
				<FlexLayout gridGap={tabsGap}>
					{list &&
						list.map((item, index) => {
							return (
								<React.Fragment key={`${uniqueId('tabs-header-')}`}>
									{typeof children.tabs === 'function' &&
										children.tabs({ index, item })}
								</React.Fragment>
							);
						})}
				</FlexLayout>
			)}
			{children.contents && (
				<TabContentsSwiperWrapper height={validHeight}>
					<TabContentsSwiper activeIndex={activeTabIndex}>
						{list &&
							list.map((item, index) => {
								return (
									<TabContentWrapper
										key={`${uniqueId('tab-content-')}`}
										ref={(e) => handleAssignRef(e)}
									>
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
	overflow: hidden;
	min-width: 100%;
	${layout};
	transition: height ease-in-out 200ms;
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
	height: fit-content;
	/* border: 1px solid red; */
	min-width: 100%;
`;
