import { DataTableRow } from './DataTable.styled'

export type RenderRow = () => Array<React.ReactElement<typeof DataTableRow>>
export interface IDataTableHeader {
	sortable?: boolean
	title: string
	width?: string
	key?: string
}
