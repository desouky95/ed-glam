import React, { Component } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import InfoTable, { InfoTableCell, InfoTableColumn, InfoTableData, InfoTableHeader } from './InfoTable'
import { HeaderSubTitle, HeaderTitle, TableData, TableHeader } from './InfoTable.types'
import { InfoTableHeaderSubTitle, InfoTableHeaderTitle } from '.'
import { CellExpandContainer } from './InfoTable.styled'
import { RaisedButton } from '@Components/Buttons/RaisedButton'
export default {
	title: 'Tables/InfoTable',
	component: InfoTable,
} as ComponentMeta<typeof InfoTable>

export const MainTable: ComponentStory<typeof InfoTable> = () => {
	const [data, setData] = useState([
		{
			id: 1,
			name: 'Test',
			title: 'Maths Course 101 Fundementals of algebra',
			items: [1, 2, 2, 123, 213, 12, 3, 123, 12, 3, 123],
		},
		{ id: 2, name: 'Test 2', title: 'Maths Course 101 Fundementals of algebra', items: [1, 2, 2, 123, 213, 12, 3, 123, 12, 3, 123] },
	])
	const headerTitle: HeaderTitle = () => <InfoTableHeaderTitle>Explore Course Content</InfoTableHeaderTitle>
	const headerSubTitle: HeaderSubTitle = () => (
		<InfoTableHeaderSubTitle>This Classroom has 12 lessons, 6 Posted so far!</InfoTableHeaderSubTitle>
	)
	const renderHeader: TableHeader = () => <InfoTableHeader title={headerTitle} subTitle={headerSubTitle} />
	const renderData: TableData = () => (
		<InfoTableData>
			{data.map((it, index) => {
				return (
					<InfoTableCell
						panel={() => {
							return (
								<CellExpandContainer>
									{it.items.map(i => {
										return <div>{i}</div>
									})}
								</CellExpandContainer>
							)
						}}
						index={index}
						key={`${it.id}-${index}`}
					>
						<InfoTableColumn>
							<div>{it.id}</div>
							<div>{it.title}</div>
							<div>{it.name}</div>
						</InfoTableColumn>
						<InfoTableColumn>
							<RaisedButton>Buy Course</RaisedButton>
						</InfoTableColumn>
					</InfoTableCell>
				)
			})}
		</InfoTableData>
	)
	return <InfoTable Data={renderData} Header={renderHeader} />
}
MainTable.storyName = 'Info Table'
