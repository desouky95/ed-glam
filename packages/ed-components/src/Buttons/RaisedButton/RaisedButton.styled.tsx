import { Color, MediaQuery, Shapes } from '@eduact/student-theme';
import styled from 'styled-components';
import {
	variant,
	layout,
	LayoutProps,
	space,
	SpaceProps,
	flexbox,
	FlexboxProps,
	BorderRadiusProps,
	borderRadius,
} from 'styled-system';

export const RaisedButtonStyled = styled.button<
	{
		variant: Color;
		outlined?: boolean;
		btnSize: MediaQuery;
		bgFallback?: boolean;
		btnShape?: Shapes;
	} & LayoutProps &
		SpaceProps &
		FlexboxProps &
		BorderRadiusProps
>`
	position: relative;
	border-width: ${(props) => (props.outlined ? '2px' : '')};
	border-style: solid;
	${variant({ scale: 'buttonColors' })}

	color: ${(props) =>
		props.outlined ? props.theme.colors[props.variant] : ''};
	font-weight: 500;
	font-size: ${(props) => `${props.theme.fontSizesAliases.body ?? 1}rem`};
	border-radius: ${(props) =>
		props.btnShape === 'circle'
			? `${props.theme.borderRadii.medium}px`
			: '4px'};
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	display: flex;
	align-items: center;
	padding: 0.5rem 2rem;
	min-width: 9.375rem;
	white-space: pre;
	overflow: hidden;
	@media (min-width: 1024px) {
		padding: 1.125rem 2rem;
		${variant({
			prop: 'btnSize',
			scale: 'buttonSizes',
		})}
	}

	${variant({
		prop: 'btnSize',
		scale: 'buttonSizes',
	})}
	opacity: ${(props) => (props.disabled ? '0.6' : '')};
	${layout};
	${space};
	${flexbox};
	${borderRadius};
	background: ${(props) => (props.outlined ? 'transparent' : '')};
	background: ${(props) => (props.bgFallback ? props.theme.colors.light : '')};
`;
