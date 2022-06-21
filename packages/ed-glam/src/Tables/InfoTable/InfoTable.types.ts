import { InfoTableData, InfoTableHeader } from './InfoTable'
import { CellExpandContainer, InfoTableHeaderSubTitle, InfoTableHeaderTitle } from './InfoTable.styled'

export type HeaderTitle = () => React.ReactElement<typeof InfoTableHeaderTitle>
export type HeaderSubTitle = () => React.ReactElement<typeof InfoTableHeaderSubTitle>
export type TableHeader = () => React.ReactElement<typeof InfoTableHeader>
export type TableData = () => React.ReactElement<typeof InfoTableData> | undefined
export type ColumnExpandPanel = () => React.ReactElement<typeof CellExpandContainer>
