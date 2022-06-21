import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DataTable, DataTableRow, IDataTableHeader } from '.'
export default {
	title: 'Tables/DataTable',
	component: DataTable,
	argTypes: {
		tableRows: {
			table: {
				disable: true,
			},
		},
		tableHeaders: {},
	},
} as ComponentMeta<typeof DataTable>

interface ExtraArgs {
	columns: number
}
export const DataTableTemplate: ComponentStory<typeof DataTable & ExtraArgs> = ({ ...props }) => {
	const headers: IDataTableHeader[] = [
		{ title: 'Column1' },
		{ title: 'Column2' },
		{ title: 'Column3' },
		{ title: 'Column4' },
		{ title: 'Column5' },
	]
	const data = [
		{ id: 1, name: 'test' },
		{ id: 2, name: 'test 2' },
	]

	return (
		<>
			<DataTable
				tableLayout={props.tableLayout}
				tableHeaders={headers}
				tableRows={() => {
					return data.map((i, index) => {
						return (
							<DataTableRow index={index}>
								<td>{i.id}</td>
								<td>{i.name}</td>
								<td>{i.name}</td>
								<td>{i.name}</td>
								<td>{i.name}</td>
							</DataTableRow>
						)
					})
				}}
			/>
		</>
	)
}

DataTableTemplate.storyName = 'Default DataTable'
