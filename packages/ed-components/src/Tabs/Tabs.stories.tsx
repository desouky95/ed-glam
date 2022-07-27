import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import { TabsContent, TabsHeader, TabsHeaders } from './Components';
import Tabs from './Tabs';
import { TabsProvider } from './TabsProvider';

export default {
	title: 'Tabs',
	component: Tabs,
} as ComponentMeta<typeof Tabs>;

type Item = { id: number; text: string; element: JSX.Element };
export const TabsStory: ComponentStory<typeof Tabs> = () => {
	const [active, setActive] = useState('1');
	const list: Array<Item> = [
		{
			id: 1,
			text: 'text 1',
			element: <div style={{ height: '10vh' }}>text 1</div>,
		},
		{
			id: 2,
			text: 'text 2',
			element: <div style={{ height: '20vh' }}>text 1</div>,
		},
		{
			id: 3,
			text: 'text 3',
			element: <div style={{ height: '30vh' }}>text 1</div>,
		},
		{
			id: 4,
			text: 'text 4',
			element: <div style={{ height: '40vh' }}>text 1</div>,
		},
	];
	return (
		<>
			<Wrapper>
				<TabsProvider onChange={(val) => setActive(val)} active={active}>
					<Tabs list={list}>
						{{
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
							contents: ({ index, item, ref }) => {
								return (
									<TabsContent
										key={`${item.id}-${item.text}`}
										value={item.id.toString()}
									>
										<div>{item.element}</div>
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
	background: red;
	overflow: hidden;
`;
