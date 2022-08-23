import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BottomSheet from './BottomSheet';
import { FlexLayout, Stack } from '@eduact/ed-system';
export default {
	title: 'Navigation/BottomSheet',
	component: BottomSheet,
	argTypes: {
		expanded: {
			defaultValue: false,
		},
		variant: {
			defaultValue: {
				sm: 'light',
				md: 'light',
				lg: 'primary',
			},
		},
		header: {
			defaultValue: 'Bottom Sheet',
		},
	},
} as ComponentMeta<typeof BottomSheet>;

export const BottomSheetStory: ComponentStory<typeof BottomSheet> = (args) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<>
			<div style={{ position: 'relative' }}>
				<FlexLayout
					width={'100%'}
					height="20vh"
					p={'5rem'}
					style={{ background: 'yellow' }}
				></FlexLayout>
				<FlexLayout
					width={'100%'}
					height="120vh"
					p={'5rem'}
					style={{ background: 'blue' }}
				></FlexLayout>
				<button onClick={() => setExpanded(!expanded)}>
					{expanded ? 'Close' : 'Open'}
				</button>
				<BottomSheet
					{...args}
					expanded={expanded}
					relative
					header={<FlexLayout>Bottom Sheet</FlexLayout>}
					maxHeight={'100vh'}
					headerHeight={'36px'}
					onChange={setExpanded}
					onBackdropClick={() => setExpanded(false)}
				>
					<p style={{ lineHeight: 2 }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						ac mauris sit amet diam pulvinar vestibulum. Sed malesuada ultrices
						hendrerit.
					</p>

					<p style={{ lineHeight: 2 }}>
						Class aptent taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos. Nam nisi tortor, egestas volutpat tortor
						auctor, efficitur molestie urna. Vestibulum blandit erat massa, eu
						ornare diam porttitor at.
					</p>
					<p style={{ lineHeight: 2 }}>
						Class aptent taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos. Nam nisi tortor, egestas volutpat tortor
						auctor, efficitur molestie urna. Vestibulum blandit erat massa, eu
						ornare diam porttitor at.
					</p>
					<p style={{ lineHeight: 2 }}>
						Class aptent taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos. Nam nisi tortor, egestas volutpat tortor
						auctor, efficitur molestie urna. Vestibulum blandit erat massa, eu
						ornare diam porttitor at.
					</p>
				</BottomSheet>
			</div>
			<FlexLayout
				width={'100%'}
				height="20vh"
				p={'5rem'}
				style={{ background: 'green' }}
			></FlexLayout>
			<FlexLayout
				width={'100%'}
				height="20vh"
				p={'5rem'}
				style={{ background: 'red' }}
			></FlexLayout>
		</>
	);
};
