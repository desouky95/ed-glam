import { Color } from '@eduact/student-theme';
import { rgba } from 'polished';
import styled from 'styled-components';
import {
	FlexBasisProps,
	flexbox,
	FlexboxProps,
	layout,
	LayoutProps,
	typography,
	variant,
} from 'styled-system';

export const InfoTableHeaderStyled = styled.div`
	padding: 1.563rem 3.75rem;
	font-size: 0.875rem;
	border-bottom: 1px solid ${(props) => props.theme.colors.maxBluePurple};
`;
export const InfoTableHeaderTitle = styled.div`
	font-weight: 800;
	${typography}
	margin-bottom: 0.625rem;
`;
export const InfoTableHeaderSubTitle = styled.div`
	${typography}
	font-weight: 400;
`;
export const InfoTableDataStyled = styled.div`
	padding: 0;
`;

export const InfoTableWrapper = styled.div<{
	width: string | number;
	expandable: boolean;
	rounded: boolean;
}>`
	${layout}
	box-shadow: ${(props) =>
		props.expandable && props.rounded
			? '6px 6px 10px rgba(164, 164, 169, 0.794635)'
			: ''};
	border-radius: ${(props) =>
		props.expandable && props.rounded
			? `${props.theme.borderRadii.medium}px`
			: ''};
	overflow: hidden;
	padding: 0;
`;
type CellProps = {
	index: number;
	expandable: boolean;
	disabled: boolean;
	expanded: boolean;
};
export const InfoTableCellStyled = styled.div<CellProps & FlexBasisProps>`
	display: flex;
	align-items: center;
	background: ${(props) => props.theme.colors.cultured};
	background: ${(props) => props.index % 2 === 0 && props.theme.colors.light};
	background: ${(props) =>
		props.expanded && rgba(props.theme.colors.maxBluePurple, 0.1)};

	padding: 1.438rem 1rem;
	opacity: ${(props) => (props.disabled ? '0.5' : '')};
	pointer-events: ${(props) => (props.disabled ? 'none' : '')};
	${flexbox};

	@media (min-width: 1024px) {
		padding: 1.438rem 3.75rem;
	}
`;

export const InfoTableColumnStyled = styled.div<FlexboxProps & LayoutProps>`
	/* flex: ${(props) => props.flex ?? 1}; */
	${flexbox}
	${layout}
`;
export const CellPanelWrapper = styled.div<{
	expanded: boolean;
	height: number;
}>`
	max-height: ${(props) => (props.expanded ? `${props.height}px` : '0px')};
	height: ${(props) => (props.expanded ? `${props.height}px` : '0px')};
	visibility: ${(props) => (props.expanded ? 'visible' : 'hidden')};
	opacity: ${(props) => (props.expanded ? '1' : '0')};
	transition: all ease-in-out 500ms;
	width: 100%;
`;
export const CellExpandContainer = styled.div<{ bg?: Color }>`
	padding: 1.438rem 0.75rem;
	background: ${(props) => props.theme.colors.light};
	${variant({ prop: 'bg', scale: 'backgrounds' })}
	@media(min-width: 1024px) {
		padding: 1.438rem 3.75rem;
	}
`;

export const InfoTableCellWrapper = styled.div<{ expanded: boolean }>`
	border-radius: ${(props) => props.expanded && '30px'};
	border: solid 2px transparent;
	border: ${(props) => props.expanded && 'solid 2px #dcdcdc'};
	transition: all ease-in-out 200ms;
	overflow: hidden;
`;
