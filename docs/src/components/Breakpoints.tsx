import React from 'react';
import {
	InfoTable,
	InfoTableCell,
	InfoTableColumn,
	InfoTableData,
} from '@eduact/ed-components';
import CodeBlock from '@theme/CodeBlock';
export const Breakpoints = () => {
	return (
		<InfoTable
			Data={() => {
				return (
					<InfoTableData>
						<InfoTableCell index={0}>
							<InfoTableColumn>sm</InfoTableColumn>
							<InfoTableColumn>No minimum width</InfoTableColumn>
							<InfoTableColumn>
								<CodeBlock>
									<>{'{...}'}</>
								</CodeBlock>
							</InfoTableColumn>
						</InfoTableCell>
					</InfoTableData>
				);
			}}
		/>
	);
};
