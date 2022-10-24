import { SlideLeftAnimation, SlideRightAnimation } from '@src/Tabs/Tabs.styled';
import { useTabsContext } from '@src/Tabs/TabsProvider';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import {
	FlexboxProps,
	GridProps,
	layout,
	LayoutProps,
	SpaceProps,
} from 'styled-system';
import TabsContent, { TabsContentProps } from '../TabsContent/TabsContent';

export type TabsContentsProps = {
	children:
		| Array<React.ReactElement<typeof TabsContent>>
		| React.ReactElement<typeof TabsContent>;
} & SpaceProps &
	FlexboxProps &
	GridProps &
	LayoutProps;
const TabsContents: React.FC<TabsContentsProps> = ({ children, ...props }) => {
	const context = useTabsContext();
	if (!context) {
		throw new Error("Tabs isn't wrapped by TabsProvider");
	}
	const { activeTabIndex, activeTab, oldIndex } = context;

	const activeIndex = useMemo(() => {
		const _children = React.Children.toArray(children) as Array<
			React.ReactElement<TabsContentProps>
		>;
		const selected = _children.findIndex((_) => _.props.value === activeTab);
		return selected ?? activeTabIndex;
	}, [activeTabIndex, activeTab, children]);

	return (
		<>
			{children && (
				<TabContentsSwiperWrapper {...props}>
					<TabContentsSwiper
						className="tabs-contents-swiper"
						activeIndex={activeIndex}
					>
						{React.Children.map(children, (child, index) => {
							return (
								<TabContentWrapper
									className="tabs-contents-inner-wrapper"
									current={activeTabIndex}
									oldIndex={oldIndex ?? 0}
									index={index}
								>
									{child}
								</TabContentWrapper>
							);
						})}
					</TabContentsSwiper>
				</TabContentsSwiperWrapper>
			)}
		</>
	);
};

export default TabsContents;

const TabContentsSwiperWrapper = styled.div<LayoutProps>`
	/* display: flex; */
	overflow: hidden;
	min-width: 100%;
	${layout};
`;

const TabContentsSwiper = styled.div.attrs((props) => ({
	dir: document.documentElement.dir,
}))<{
	activeIndex?: number;
	height?: string;
}>`
	display: flex;
	min-width: 100%;
	flex: 1;
`;

const TabContentWrapper = styled.div<{
	index: number;
	current?: number;
	oldIndex: number;
}>`
	flex: 1;
	flex-grow: 1;
	overflow: hidden;
	min-width: 100%;
	display: ${({ index, current }) => (index === current ? 'block' : 'none')};
	${({ index, oldIndex }) => index > oldIndex && SlideLeftAnimation};
	${({ index, oldIndex }) => index < oldIndex && SlideRightAnimation};
`;
