import { FlexLayout } from '@eduact/ed-system';
import { Color } from '@eduact/student-theme';
import React from 'react';
import { useMemo } from 'react';
import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, variant } from 'styled-system';

export type WidgetUIProps = { bg: Color; withShadow: boolean } & SpaceProps &
	LayoutProps;
export type WidgetProps<T> = {
	onClick?: (data?: any) => void;
	// title?: string;
	action: () => JSX.Element;
};
export type BaseWidgetDataProps<T> = {
	title?: string;
	onClick: () => void;
	widget: React.VoidFunctionComponent & WidgetProps<T>;
};
export type BaseWidgetsProps<T> = Partial<WidgetUIProps> &
	BaseWidgetDataProps<T>;
const BaseWidget = <T,>({
	bg = 'light',
	withShadow = false,
	widget,
	title,
	onClick,
	...props
}: BaseWidgetsProps<T>) => {
	console.log(widget.prototype.title);

	const actions = useMemo(() => {
		return widget.action();
	}, [widget.action]);
	return (
		<BaseWidgetContainer bg={bg} withShadow={withShadow} {...props}>
			<FlexLayout justifyContent={'space-between'} alignItems={'center'}>
				{title && <BaseWidgetTitle>{title}</BaseWidgetTitle>}
				{actions}
			</FlexLayout>
			{widget({})}
		</BaseWidgetContainer>
	);
};

export default BaseWidget;

const BaseWidgetContainer = styled.div<WidgetUIProps>`
	border-radius: 15px;
	width: 100%;
	height: 100%;
	padding: 1.25rem;
	min-height: 13.6rem;
	box-shadow: ${({ withShadow }) =>
		withShadow && '0 5px 6px 0 rgba(0, 0, 0, 0.16)'};
	${variant({ prop: 'bg', scale: 'buttonColors' })};
	${layout};
	${space};
`;
const BaseWidgetTitle = styled.h4`
	margin: 0;
	font-size: 1.125rem;
	font-weight: 600;
`;

export interface Widget {
	onClick?: () => void;
	title?: string;
	action?: () => JSX.Element;
}
