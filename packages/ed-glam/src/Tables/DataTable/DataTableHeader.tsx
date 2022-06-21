import React, { useEffect, useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { DataTableHeaderStyled, SortableHeaderSpan } from './DataTable.styled'
import { IDataTableHeader } from './DataTable.types'

type Props = {
	index: number
	headerData: IDataTableHeader
	onSortChange?: (sort: ISort) => void
}

export interface ISort {
	field: string
	direction: SortDirection
}
const DataTableHeader: React.FC<Props> = ({ headerData, index, onSortChange }) => {
	const [sort, setSort] = useState<ISort>({ field: headerData.title, direction: null })

	const handleOnSortChange = () => {
		const getNewSortDirection = (): SortDirection => {
			if (sort.direction === null) return 'desc'
			if (sort.direction === 'asc') return null
			return 'asc'
		}
		setSort(prev => ({ field: headerData.key ?? headerData.title, direction: getNewSortDirection() }))
		onSortChange && onSortChange(sort)
	}
	// useEffect(() => {
	// 	onSortChange && onSortChange(sort)
	// }, [sort.direction, onSortChange, sort])
	return (
		<DataTableHeaderStyled onClick={handleOnSortChange} sortable={headerData.sortable} key={`${index}-${headerData.title}`}>
			{headerData.title}
			{headerData.sortable && (
				<SortableHeaderSpan sortDirection={sort?.direction}>
					{/* <Spacer mx={2} /> */}
					<HiChevronDown />
				</SortableHeaderSpan>
			)}
		</DataTableHeaderStyled>
	)
}

export default DataTableHeader
