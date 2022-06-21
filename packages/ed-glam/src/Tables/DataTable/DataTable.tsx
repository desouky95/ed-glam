import { TableLayoutProps } from '@eduact/student-theme'
import React from 'react'
import { LayoutProps } from 'styled-system'
import { DataTableStyled, DataTableWrapper } from './DataTable.styled'
import { IDataTableHeader, RenderRow } from './DataTable.types'
import DataTableHeader, { ISort } from './DataTableHeader'
type Props = {
	tableHeaders: Array<IDataTableHeader>
	tableRows: RenderRow
	onSortChange?: (e: ISort) => void
} & LayoutProps &
	TableLayoutProps
const DataTable: React.FC<Props> = ({ tableHeaders, tableRows, width = '100%', tableLayout = 'auto', onSortChange, ...props }) => {
	console.log(tableLayout)
	return (
		<DataTableWrapper>
			<DataTableStyled {...props} tableLayout={tableLayout} width={width?.toString()}>
				{tableLayout === 'fixed' && (
					<colgroup>
						{tableHeaders.map((h, index) => (
							<col key={`${h.title}-${index}`} width={h.width}></col>
						))}
					</colgroup>
				)}
				<thead>
					<tr>
						{tableHeaders.map((h, index) => (
							<DataTableHeader
								key={`th-${h.title}-${index}`}
								onSortChange={e => {
									if (e.direction) onSortChange && onSortChange(e)
								}}
								headerData={h}
								index={index}
							/>
						))}
					</tr>
				</thead>
				<tbody>{tableRows()}</tbody>
			</DataTableStyled>
		</DataTableWrapper>
	)
}

export default DataTable
