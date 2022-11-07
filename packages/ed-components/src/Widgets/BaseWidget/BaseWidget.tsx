import { Box, FlexLayout } from '@eduact/ed-system';
import { Color } from '@eduact/student-theme';
import { SkeletonBox } from '@src/Skeletons';
import React, { Component, Suspense, useEffect } from 'react';
import { useMemo } from 'react';
import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps, variant } from 'styled-system';
import {
	BaseWidgetContainer,
	BaseWidgetHeader,
	BaseWidgetSpaceContainer,
	BaseWidgetTitle,
} from './BaseWidget.styled';
import {
	BaseWidgetsProps,
	isLoadable,
	isReactComponent,
} from './BaseWidget.types';
import { useWidget, WidgetProvider } from './WidgetProvider';

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
						<BaseWidgetHeader
							width={'100%'}
							justifyContent={'space-between'}
							alignItems={'center'}
						>
							{title && <BaseWidgetTitle>{title}</BaseWidgetTitle>}
							{action}
						</BaseWidgetHeader>
					)}
					<Box height={'inherit'} minHeight={'inherit'} width={'100%'}>
						{widget && isReactComponent(widget) && widget(widgetProps)}
					</Box>
				</BaseWidgetSpaceContainer>
			</SkeletonBox>
		</BaseWidgetContainer>
	);
};

export default BaseWidget;

export interface Widget {
	onClick?: () => void;
	title?: string;
	action?: () => JSX.Element;
}
