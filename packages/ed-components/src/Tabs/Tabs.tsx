import { FlexLayout } from '@eduact/ed-system';
import React, {
	createRef,
	MutableRefObject,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import styled, { css, keyframes } from 'styled-components';
import { layout, LayoutProps } from 'styled-system';
import { TabsProps } from './Tabs.types';
import { useTabsContext } from './TabsProvider';
import { uniqueId } from 'lodash';
import { useEffect } from 'react';
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

	const { activeTabIndex, activeTab, oldIndex } = context;
	const tabsRefs = useRef<Array<MutableRefObject<HTMLElement | null>>>(
		list ? list.map((_) => createRef()) : []
	);

	const [validHeight, setValidHeight] = useState<string | undefined>();

	useLayoutEffect(() => {
		if (activeTabIndex === undefined) return;

		const nodeRef = tabsRefs.current[activeTabIndex];
		if (nodeRef && nodeRef.current) {
			const { current } = nodeRef;
			const { height } = current?.getBoundingClientRect();
			setValidHeight(`${height}px`);
		}
	}, [activeTabIndex]);

	if (typeof list === 'undefined' && list === undefined) {
		return (
			<React.Fragment>
				{!noHeader && (
					<>
						<FlexLayout>{children.tabs}</FlexLayout>
						{children.divider}
					</>
				)}
				{children.contents && children.contents}
			</React.Fragment>
		);
	}

	return (
		<TabsWrapper>
			{!noHeader && (
				<>
					<FlexLayout
						overflowX={'auto'}
						overflowY={'hidden'}
						height={'fit-content'}
						gridGap={tabsGap}
					>
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
					{children.divider}
				</>
			)}

			{children.contents && (
				<TabContentsSwiperWrapper height={validHeight}>
					<TabContentsSwiper height={validHeight} activeIndex={activeTabIndex}>
						{list &&
							list.map((item, index) => {
								return (
									<TabContentWrapper
										index={index}
										current={activeTabIndex}
										oldIndex={oldIndex ?? 0}
										key={`${uniqueId('tab-content-')}`}
										ref={
											tabsRefs.current[
												index
											] as MutableRefObject<HTMLDivElement>
										}
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
		</TabsWrapper>
	);
};

export default Tabs;
const TabContentsSwiperWrapper = styled.div<LayoutProps>`
	overflow: hidden;
	min-width: 100%;
	transition: height ease-in-out 200ms;
`;

const TabContentsSwiper = styled.div<{ activeIndex?: number; height?: string }>`
	display: flex;
	min-width: 100%;
	flex: 1;
`;

const SlideLeftKeyframes = keyframes`
from { transform : translateX(100%)}
to { transform : translateX(0)}
`;
const SlideLeftAnimation = css`
	animation: ${SlideLeftKeyframes} 640ms cubic-bezier(0.65, 0.05, 0.36, 1)
		forwards;
`;
const SlideRightKeyframes = keyframes`
from { transform : translateX(-100%)}
to { transform : translateX(0)}
`;
const SlideRightAnimation = css`
	animation: ${SlideRightKeyframes} 640ms cubic-bezier(0.65, 0.05, 0.36, 1)
		forwards;
`;
const TabContentWrapper = styled.div<{
	index: number;
	current?: number;
	oldIndex: number;
}>`
	flex: 1;
	flex-grow: 1;
	overflow: hidden;
	height: fit-content;
	min-width: 100%;
	display: ${({ index, current }) => (index === current ? 'block' : 'none')};
	${({ index, oldIndex }) => index > oldIndex && SlideLeftAnimation};
	${({ index, oldIndex }) => index < oldIndex && SlideRightAnimation};
`;

const TabsWrapper = styled.div`
	::-webkit-scrollbar {
		height: 2px;
		opacity: 0.5;
	}
`;
