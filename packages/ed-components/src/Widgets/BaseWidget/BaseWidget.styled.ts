import { FlexLayout } from '@eduact/ed-system';
import styled from 'styled-components';
import { layout, space, variant } from 'styled-system';
import { WidgetUIProps } from './BaseWidget.types';

const BaseWidgetHeader = styled(FlexLayout)`
	padding-bottom: 6px;
	border-bottom: 1px solid ${(props) => props.theme.colors.silver};
`;
const BaseWidgetContainer = styled.div<WidgetUIProps>`
	border-radius: 15px;
	width: 100%;
	height: 100%;
	box-shadow: ${({ withShadow }) =>
		withShadow && '0 5px 6px 0 rgba(0, 0, 0, 0.16)'};
	${variant({ prop: 'bg', scale: 'buttonColors' })};
	${({ theme }) => `${theme.mediaQueries.large}{
		min-height: 13.6rem;
	}`}
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	${layout};
	${space};
	${BaseWidgetHeader} {
		border: ${(props) => !props.withSeparator && 'none'};
	}
`;
const BaseWidgetSpaceContainer = styled.div<Pick<WidgetUIProps, 'contained'>>`
	padding: 1.25rem;
	background: ${({ contained }) => contained && 'transparent'};
	padding: ${({ contained }) => contained && '0'};
	width: 100%;
	height: 100%;
`;
const BaseWidgetTitle = styled.h4`
	margin: 0;
	font-size: 0.75rem;
	font-weight: 600;
	${({ theme }) => `${theme.mediaQueries.large}{
		font-size: 1.125rem;
	}`}
`;

export {
	BaseWidgetContainer,
	BaseWidgetSpaceContainer,
	BaseWidgetTitle,
	BaseWidgetHeader,
};
