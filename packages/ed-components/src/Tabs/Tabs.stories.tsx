import { FlexLayout } from '@eduact/ed-system';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { InfoTable, InfoTableCell, CellExpandContainer } from '..';
import {
	TabsContent,
	TabsContents,
	TabsHeader,
	TabsHeaders,
} from './Components';
import Tabs from './Tabs';
import { TabsProvider } from './TabsProvider';

export default {
	title: 'Navigation/Tabs',
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
	background: red;
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
				return (
					<StyledCellExpandedContainer style={{ height: `${item * 1.5}vh` }}>
						{item}'s Panel
					</StyledCellExpandedContainer>
				);
			}}
			index={index}
		>
			<div>{item}</div>
			<button onClick={() => setExpanded(!expanded)}>Toggle</button>
		</InfoTableCell>
	);
};

const StyledCellExpandedContainer = styled(CellExpandContainer)`
	padding: 4rem 8rem;
`;

export const TabsWithoutList: ComponentStory<typeof Tabs> = () => {
	const [active, setActive] = useState('0');
	return (
		<TabsProvider active={active} onChange={(value) => setActive(value)}>
			<Tabs tabsGap={'15rem'}>
				{{
					tabs: (
						<TabsWrapper>
							<TabsHeader index={0} value={'0'}>
								{({ selected }) => (
									<TTabHeaderStyled selected={selected} marginRight={true}>
										<div>Notes</div>
									</TTabHeaderStyled>
								)}
							</TabsHeader>

							<TabsHeader index={1} value={'1'}>
								{({ selected }) => (
									<TTabHeaderStyled selected={selected} marginRight={true}>
										<div>Q&A</div>
									</TTabHeaderStyled>
								)}
							</TabsHeader>
							<TabsHeader index={2} value={'2'}>
								{({ selected }) => (
									<TTabHeaderStyled selected={selected}>
										<div>Discussions</div>
									</TTabHeaderStyled>
								)}
							</TabsHeader>
						</TabsWrapper>
					),
					contents: (
						<TabsContents>
							<TabsContent value={'0'}>Notes</TabsContent>
							<TabsContent value={'1'}>
								<div
									style={{ background: 'red', height: '120vh', width: '100%' }}
								></div>
							</TabsContent>
							<TabsContent value={'2'}>Discussions</TabsContent>
						</TabsContents>
					),
				}}
			</Tabs>
		</TabsProvider>
	);
};

const TTabHeaderStyled = styled.div<{
	selected: boolean;
	marginRight?: boolean;
}>`
	font-weight: bold;
	text-align: center;
	white-space: nowrap;
	font-size: 0.875em;
	cursor: pointer;
	line-height: 1.125rem;
	position: relative;
	margin-right: ${(props) => (props.marginRight ? '100px' : '0')};
	@media (max-width: 486px) {
		margin-right: ${(props) => (props.marginRight ? '80px' : '0')};
	}
	@media (max-width: 418px) {
		margin-right: ${(props) => (props.marginRight ? '60px' : '0')};
	}
	@media (max-width: 376px) {
		margin-right: ${(props) => (props.marginRight ? '40px' : '0')};
	}
	@media (max-width: 336px) {
		margin-right: ${(props) => (props.marginRight ? '20px' : '0')};
	}
	@media (max-width: 294px) {
		margin-right: ${(props) => (props.marginRight ? '5px' : '0')};
	}
	div {
		padding: 0.5rem 0;
		width: fit-content;
		color: ${(props) =>
			props.selected ? props.theme.colors.primary : props.theme.colors.silver};

		&::before {
			display: ${(props) => (props.selected ? 'block' : 'none')};
			content: '';
			position: absolute;
			height: 5px;
			width: 100%;
			background: ${(props) =>
				props.selected
					? props.theme.colors.primary
					: props.theme.colors.purple};
			left: 0;
			top: 100%;
		}
	}
`;

const TabsWrapper = styled(TabsHeaders)`
	display: flex;
	grid-gap: 2rem;
	border-bottom: 4px solid ${(props) => props.theme.colors.silver};

	::-webkit-scrollbar {
		appearance: none;
		height: 0;
	}

	@media (max-width: 486px) {
		width: 100%;
	}
`;
