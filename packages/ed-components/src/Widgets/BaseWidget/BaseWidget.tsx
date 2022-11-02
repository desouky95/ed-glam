import { FlexLayout } from '@eduact/ed-system';
import { Color } from '@eduact/student-theme';
import { SkeletonBox } from '@src/Skeletons';
import React, { useEffect } from 'react';
import { useMemo } from 'react';
import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, variant } from 'styled-system';
import { useWidget, WidgetProvider } from './WidgetProvider';

export type WidgetUIProps = {
	bg: Color;
	withShadow: boolean;
	contained?: boolean;
	withLoading?: boolean;
	isLoading?: boolean;
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
const BaseWidget = <T,>(props: BaseWidgetsProps<T>) => {
	return (
		<WidgetProvider>
			<WidgetUIContainer {...props} />
		</WidgetProvider>
	);
};

const WidgetUIContainer = <T,>({
	bg = 'light',
	withShadow = false,
	widget,
	onClick,
	contained,
	widgetProps,
	withLoading,
	isLoading,
	...props
}: BaseWidgetsProps<T>) => {
	const { title, action } = useWidget();
	return (
		<BaseWidgetContainer
			contained={contained}
			bg={bg}
			withShadow={withShadow}
			{...props}
		>
			<SkeletonBox
				width={'100%'}
				height={'100%'}
				isLoading={!!isLoading && !!withLoading}
			>
				<BaseWidgetSpaceContainer contained={contained}>
					{!contained && (
						<FlexLayout justifyContent={'space-between'} alignItems={'center'}>
							{title && <BaseWidgetTitle>{title}</BaseWidgetTitle>}
							{action}
						</FlexLayout>
					)}
					{widget && widget(widgetProps)}
				</BaseWidgetSpaceContainer>
			</SkeletonBox>
		</BaseWidgetContainer>
	);
};

export default BaseWidget;

const BaseWidgetContainer = styled.div<WidgetUIProps>`
	border-radius: 15px;
	width: 100%;
	height: 100%;
	min-height: 13.6rem;
	box-shadow: ${({ withShadow }) =>
		withShadow && '0 5px 6px 0 rgba(0, 0, 0, 0.16)'};
	${variant({ prop: 'bg', scale: 'buttonColors' })};
	overflow: hidden;
	${layout};
	${space};
`;
const BaseWidgetSpaceContainer = styled.div<Pick<WidgetUIProps, 'contained'>>`
	padding: 1.25rem;
	background: ${({ contained }) => contained && 'transparent'};
	padding: ${({ contained }) => contained && '0'};
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
