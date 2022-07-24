import React from 'react';
import styled from 'styled-components';
import {
	flexbox,
	FlexboxProps,
	grid,
	GridProps,
	space,
	SpaceProps,
} from 'styled-system';
import { TabsHeader, TabsHeaderProps } from '../TabsHeader';

export type TabsHeadersProps = {
	children:
		| Array<React.ReactElement<typeof TabsHeader>>
		| React.ReactElement<typeof TabsHeader>;
} & SpaceProps &
	FlexboxProps &
	GridProps;

export const TabsHeaders: React.FC<TabsHeadersProps> = ({
	children,
	...props
}) => {
	return (
		<StyledTabsHeaders {...props}>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					const props = child.props;
					return React.cloneElement(child, { ...props, index });
				}
			})}
		</StyledTabsHeaders>
	);
};

export default TabsHeaders;

export const StyledTabsHeaders = styled.div<
	SpaceProps & FlexboxProps & GridProps
>`
	display: flex;
	${space};
	${grid}
	${flexbox};
`;
