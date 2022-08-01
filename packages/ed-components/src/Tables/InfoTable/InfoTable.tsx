import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FlexboxProps, LayoutProps } from 'styled-system';
import {
	CellPanelWrapper,
	InfoTableCellStyled,
	InfoTableCellWrapper,
	InfoTableColumnStyled,
	InfoTableDataStyled,
	InfoTableHeaderStyled,
	InfoTableWrapper,
} from './InfoTable.styled';
import {
	ColumnExpandPanel,
	HeaderSubTitle,
	HeaderTitle,
	TableData,
	TableHeader,
} from './InfoTable.types';
type Props = {
	Header?: TableHeader;
	Data: TableData;
	width?: string | number;
	expandable?: boolean;
	rounded?: boolean;
};
const InfoTable: FC<Props> = ({
	children,
	Header,
	Data,
	width = '100%',
	expandable = true,
	rounded = false,
}) => {
	return (
		<InfoTableWrapper rounded={rounded} expandable={expandable} width={width}>
			{Header && Header()}
			{Data()}
		</InfoTableWrapper>
	);
};

export default InfoTable;

export type HeaderProps = {
	title: HeaderTitle;
	subTitle?: HeaderSubTitle;
};
export const InfoTableHeader: React.FC<HeaderProps> = ({ title, subTitle }) => {
	return (
		<InfoTableHeaderStyled>
			{title()}
			{subTitle && subTitle()}
		</InfoTableHeaderStyled>
	);
};

export type DataProps = {
	children:
		| React.ReactElement<typeof InfoTableCell>[]
		| React.ReactElement<typeof InfoTableCell>
		| undefined;
};
export const InfoTableData: React.FC<DataProps> = ({ children }) => {
	return <InfoTableDataStyled>{children}</InfoTableDataStyled>;
};

export type CellProps = {
	index: number;
	panel?: ColumnExpandPanel;
	expanded?: boolean;
	disabled?: boolean;
} & FlexboxProps;
export const InfoTableCell: React.FC<CellProps> = ({
	index,
	children,
	panel,
	expanded = false,
	disabled = false,
	...props
}) => {
	const CellPanelRef = useRef<HTMLDivElement>(null);
	const [ChildHeight, setChildHeight] = useState(0);
	useLayoutEffect(() => {
		if (CellPanelRef && CellPanelRef.current) {
			if (CellPanelRef.current.children[0]) {
				const childNode: HTMLDivElement = CellPanelRef.current
					.children[0] as HTMLDivElement;
				const childStyles = window.getComputedStyle(childNode);
				const PaddingTop = Number.parseInt(
					childStyles.paddingTop.replace('px', '')
				);
				const PaddingBottom = Number.parseInt(
					childStyles.paddingBottom.replace('px', '')
				);
				setChildHeight(childNode.clientHeight + PaddingTop + PaddingBottom);
			}
		}
	}, []);
	return (
		<>
			<div>
				<InfoTableCellWrapper expanded={expanded}>
					<InfoTableCellStyled
						disabled={disabled}
						expandable={panel != null}
						expanded={expanded}
						index={index}
						{...props}
					>
						{children}
					</InfoTableCellStyled>
					<CellPanelWrapper
						height={ChildHeight}
						ref={CellPanelRef}
						expanded={expanded}
					>
						{panel && panel()}
					</CellPanelWrapper>
				</InfoTableCellWrapper>
			</div>
		</>
	);
};

export type ColumnProps = {} & FlexboxProps & LayoutProps;
export const InfoTableColumn: React.FC<ColumnProps> = ({
	children,
	...props
}) => {
	return <InfoTableColumnStyled {...props}>{children}</InfoTableColumnStyled>;
};
