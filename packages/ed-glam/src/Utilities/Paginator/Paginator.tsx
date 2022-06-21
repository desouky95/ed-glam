import { IconButton } from '@Components/Buttons/IconButton'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import styled from 'styled-components'

type Props = {
	displayType?: 'narrow' | 'basic'
	perPage?: number
	page?: number
	total: number
	onPageChange: (page: number) => void
}
const Paginator: React.FC<Props> = ({ displayType = 'narrow', page = 1, perPage = 10, total, onPageChange }) => {
	const [numberOfPages, setNumberOfPages] = useState<number>()
	const [currentPage, setCurrentPage] = useState(page)
	useEffect(() => {
		const calcNoOfPages = Math.ceil(total / perPage)
		setNumberOfPages(calcNoOfPages)
	}, [])
	return (
		<StyledPaginatorWrapper>
			<IconButton onClick={() => currentPage > 1 && onPageChange && onPageChange(currentPage - 1)} icon={<MdChevronLeft />} />
			{currentPage} out of {numberOfPages}
			<IconButton
				onClick={() => numberOfPages && currentPage < numberOfPages && onPageChange && onPageChange(currentPage + 1)}
				icon={<MdChevronRight />}
			/>
		</StyledPaginatorWrapper>
	)
}

export default Paginator

const StyledPaginatorWrapper = styled.div`
	display: flex;
	align-items: center;
`
