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

type Item = { id: number; text: string };
export const TabsStory: ComponentStory<typeof Tabs> = () => {
	const [active, setActive] = useState('1');
	const list: Array<Item> = [
		{ id: 1, text: 'text 1' },
		{ id: 2, text: 'text 2' },
		{ id: 3, text: 'text 3' },
		{ id: 4, text: 'text 4' },
	];
	return (
		<TabsProvider active={active}>
			<Tabs list={list}>
				{{
					tabs: ({ index, item }) => {
						return (
							<TabsHeader
								value={item.id.toString()}
								index={index}
								label={item.text}
							/>
						);
					},
					contents: ({ index, item, ref }) => {
						return (
							<TabsContent value={item.id.toString()}>
								<div>
									{item.id} :: {item.text}
								</div>
							</TabsContent>
						);
					},
				}}
			</Tabs>
		</TabsProvider>
	);
};
