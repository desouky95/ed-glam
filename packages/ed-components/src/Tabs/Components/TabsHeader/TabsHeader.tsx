import { useTabsContext } from '@src/Tabs/TabsProvider';
import React from 'react';
import styled from 'styled-components';

type TabsHeaderInferProps = {
	value: string;
	children: (payload: {
		selected: boolean;
	}) => React.ReactElement | React.ReactElement[] | JSX.Element | JSX.Element[];
	index: number;
	label?: undefined;
};
type TabsHeaderDefaultProps = {
	value: string;
	children?: undefined;
	index?: number;
	label: any;
};
export type TabsHeaderProps = TabsHeaderDefaultProps | TabsHeaderInferProps;

const TabsHeader: React.FunctionComponent<TabsHeaderProps> = ({
	children,
	value,
	index,
	label,
}) => {
	const context = useTabsContext();
	if (!context) {
		throw new Error("Tabs isn't wrapped by TabsProvider");
	}
	const {
		activeTab,
		setActiveTab,
		setActiveTabIndex,
		onChange,
		setOldIndex,
		activeTabIndex,
	} = context;
	const handleOnClick = () => {
		setActiveTab(value);
		setOldIndex(activeTabIndex);
		setActiveTabIndex(index);
		onChange && onChange(value);
	};

	if (children === undefined) {
		return (
			<TTabHeaderStyled selected={activeTab === value} onClick={handleOnClick}>
				{label}
			</TTabHeaderStyled>
		);
	}
	return (
		<div onClick={handleOnClick}>
			{children && children({ selected: activeTab === value })}
		</div>
	);
};
export default TabsHeader;

const TTabHeaderStyled = styled.div<{ selected: boolean }>`
	color: ${(props) => props.theme.colors.purple};
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
		display: ${(props) => (props.selected ? 'block' : 'none')};
		content: '';
		position: absolute;
		height: 3px;
		width: 100%;
		background: rgb(181, 177, 255);
		left: 0;
		bottom: 0;
	}
`;
