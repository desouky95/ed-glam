import Dropdown, { DropdownItem } from '@Components/InputFields/Dropdown'
import Spacer from '@Components/Utilities/Spacer'
import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { PagesWrapper, PaginatorWrapper, PerPageWrapper, TablePaginatorSpan } from './TablePaginator.styled'

type Props = {
	total: number
	page: number
	perPage: number
	perPageOptions?: Array<number>
	onPageChange?: (page: number) => void
	onPerPageChange?: (perPage: string) => void
}

const TablePaginator: React.FC<Props> = ({ page, perPage, perPageOptions = [5, 10, 20, 50], total, onPageChange, onPerPageChange }) => {
	const [numberOfPages, setNumberOfPages] = useState<number>()
	const maxShownSpans = 5

	useEffect(() => {
		const noOfPages = Math.ceil(total / perPage)
		setNumberOfPages(noOfPages)
	}, [total, perPage])

	const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onPerPageChange && onPerPageChange(e.target.value)
	}

	return (
		<PaginatorWrapper>
			<PagesWrapper>
				<TablePaginatorSpan onClick={() => page !== 1 && onPageChange && onPageChange(page - 1)}>
					<FiChevronLeft />
				</TablePaginatorSpan>
				{numberOfPages &&
					Array.from(Array(numberOfPages)).map((i, index) => {
						return (
							<TablePaginatorSpan
								key={`${index + 1}-page-span-`}
								onClick={() => page !== index + 1 && onPageChange && onPageChange(index + 1)}
								selected={index + 1 === page}
							>
								{index + 1}
							</TablePaginatorSpan>
						)
					})}
				<TablePaginatorSpan onClick={() => page !== numberOfPages && onPageChange && onPageChange(page + 1)}>
					<FiChevronRight />
				</TablePaginatorSpan>
			</PagesWrapper>
			<PerPageWrapper>
				<label>Per Page</label>
				<Spacer mx={5} />
				<select title="perPage" onChange={handlePerPageChange} value={perPage}>
					{perPageOptions.map((op, index) => {
						return (
							<option key={`per-p-${op}-${index}`} value={op}>
								{op}
							</option>
						)
					})}
				</select>
			</PerPageWrapper>
		</PaginatorWrapper>
	)
}

export default TablePaginator
