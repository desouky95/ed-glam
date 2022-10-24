import { FlexLayout } from '@eduact/ed-system';
import React from 'react';
import {
	FlexboxProps,
	GridProps,
	LayoutProps,
	SpaceProps,
} from 'styled-system';
type TabsContentUIProps = SpaceProps & FlexboxProps & GridProps & LayoutProps;
type TabsContentInferProps = {
	value: string;
	children:
		| React.ReactElement
		| React.ReactElement[]
		| React.ReactNode
		| React.ReactNode[];
};
type TabsContentDefaultProps = {
	value: string;
	children: (payload: {
		selected: boolean;
	}) => React.ReactElement | React.ReactElement[];
};

export type TabsContentProps = TabsContentDefaultProps | TabsContentInferProps;

const TabsContent: React.FC<TabsContentProps & TabsContentUIProps> = ({
	value,
	children,
	...props
}) => {
	return (
		<FlexLayout width="100%" flex={'1'} minWidth="100%" {...props}>
			{children}
		</FlexLayout>
	);
};

export default TabsContent;
