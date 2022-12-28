import React from 'react';
import styled from 'styled-components';
import {
	flexbox,
	FlexboxProps,
	gridGap,
	GridGapProps,
	layout,
	LayoutProps,
	space,
	SpaceProps,
} from 'styled-system';

export type FlexLayoutProps = SpaceProps &
	FlexboxProps &
	LayoutProps &
	GridGapProps;
const FlexLayout: React.FC<FlexLayoutProps> = ({ children, ...props }) => (
	<_FlexLayout {...props}>{children}</_FlexLayout>
);
export default FlexLayout;
const _FlexLayout = styled.div<FlexLayoutProps>`
	display: flex;
	${flexbox};
	${space};
	${layout};
	${gridGap};
`;
