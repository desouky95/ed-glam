import { ResponsiveVal } from '@eduact/student-theme';
import React, { RefObject } from 'react';
import TabsHeaders from './Components/TabHeaders/TabHeaders';
import { TabsContents } from './Components/TabsContents';

type TabsCommonProps = {
	onChange?: (value: string) => void;
};

type TabsInferProps<T> = {
	list: Array<T>;
	noHeader?: boolean;
	tabsGap?: ResponsiveVal<string>;
	children: {
		divider?: React.ReactNode;
		tabs: (payload: {
			index: number;
			item: T;
		}) => React.ReactElement | React.ReactElement[];
		contents?: (payload: {
			index: number;
			item: T;
			ref: RefObject<HTMLElement>;
		}) => React.ReactElement | React.ReactElement[];
	};
};
type TabsDefaultProps = {
	list?: undefined;
	noHeader?: boolean;
	tabsGap?: ResponsiveVal<string>;
	children: {
		divider?: React.ReactNode;
		tabs?: React.ReactElement<typeof TabsHeaders>;
		contents?: React.ReactElement<typeof TabsContents>;
	};
};
export type TabsProps<T> = TabsCommonProps &
	(TabsInferProps<T> | TabsDefaultProps);
