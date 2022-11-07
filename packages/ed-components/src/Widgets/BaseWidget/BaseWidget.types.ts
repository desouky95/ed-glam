import { Color } from '@eduact/student-theme';
import { LayoutProps, SpaceProps } from 'styled-system';

export type WidgetUIProps = {
	bg: Color;
	withShadow: boolean;
	contained?: boolean;
	withLoading?: boolean;
	isLoading?: boolean;
	withSeparator?: boolean;
} & SpaceProps &
	LayoutProps;
export type WidgetProps<T> = T;
export type BaseWidgetDataProps<T> = {
	title?: string;
	onClick?: () => void;
	widget: React.VoidFunctionComponent<WidgetProps<T>>;
	widgetProps: React.ComponentProps<React.VoidFunctionComponent<T>>;
};
export type BaseWidgetsProps<T> = Partial<WidgetUIProps> &
	BaseWidgetDataProps<T>;
