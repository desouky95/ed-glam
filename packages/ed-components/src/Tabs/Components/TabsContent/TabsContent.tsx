import { FlexLayout } from '@eduact/ed-system';
import React from 'react';

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

const TabsContent: React.FC<TabsContentProps> = ({ value, children }) => {
	return (
		<FlexLayout width="100%" flex={'1'} minWidth="100%">
			{children}
		</FlexLayout>
	);
};

export default TabsContent;
