import { FlexLayout } from '@eduact/ed-system';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { InfoTable, InfoTableCell } from '..';
import { TabsContent, TabsHeader, TabsHeaders } from './Components';
import Tabs from './Tabs';
import { TabsProvider } from './TabsProvider';

export default {
	title: 'Tabs',
	component: Tabs,
} as ComponentMeta<typeof Tabs>;

type Item = {
	id: number;
	text: string;
	element: JSX.Element;
	elements: Array<number>;
};
export const TabsStory: ComponentStory<typeof Tabs> = () => {
	const [active, setActive] = useState('1');
	const list: Array<Item> = [
		{
			id: 1,
			text: 'text 1',
			element: <div style={{ height: '10vh' }}>text 1</div>,
			elements: [1, 2, 3],
		},
		{
			id: 2,
			text: 'text 2',
			element: <div style={{ height: '20vh' }}>text 1</div>,
			elements: [1, 2, 3, 4, 4, 4, 4],
		},
		{
			id: 3,
			text: 'text 3',
			element: <div style={{ height: '30vh' }}>text 1</div>,
			elements: [23, 3],
		},
		{
			id: 4,
			text: 'text 4',
			element: <div style={{ height: '40vh' }}>text 1</div>,
			elements: [3, 44.44, 4],
		},
	];
	return (
		<>
			<Wrapper>
				<TabsProvider onChange={(val) => setActive(val)} active={active}>
					<Tabs list={list}>
						{{
							divider: <FlexLayout height={'3px'} width="100%" />,
							tabs: ({ index, item }) => {
								return (
									<TabsHeader
										key={`${item.id}`}
										value={item.id.toString()}
										index={index}
										label={item.text}
									/>
								);
							},
							contents: ({ item }) => {
								return (
									<TabsContent
										key={`${item.id}-${item.text}`}
										value={item.id.toString()}
									>
										<InfoTable
											Data={() => {
												return (
													<React.Fragment>
														{item.elements.map((_, index) => (
															<TableCell
																key={`${index}-${_}`}
																index={index}
																item={_}
															/>
														))}
													</React.Fragment>
												);
											}}
											expandable={true}
										/>
									</TabsContent>
								);
							},
						}}
					</Tabs>
				</TabsProvider>
			</Wrapper>
			{/* <TabsProvider></TabsProvider> */}
		</>
	);
};

const Wrapper = styled.div`
	/* background: #dbdbdb; */
	padding: 1rem;
	border-radius: 20px;
	overflow: hidden;
`;

const TableCell: FC<{ index: number; item: number }> = ({ index, item }) => {
	const [expanded, setExpanded] = useState(false);
	return (
		<InfoTableCell
			expanded={expanded}
			panel={() => {
				return <div style={{ height: `${item * 1.5}px` }}>{item}'s Panel</div>;
			}}
			index={index}
		>
			<div>{item}</div>
			<button onClick={() => setExpanded(!expanded)}>Toggle</button>
		</InfoTableCell>
	);
};
