import { FlexItem, FlexLayout, useElementScroll } from '@eduact/ed-system';
import { Colors } from '@eduact/student-theme';
import { Card } from '@src/Cards';
import { Mosaic } from '@src/Surface/MosaicLayout';
import { useRef } from '@storybook/addons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';
import DayNightWidget from '../DayNightWidget/DayNightWidget';
import BaseWidget from './BaseWidget';
export default {
	title: 'Widgets/Base',
	component: BaseWidget,
	// parameters: {
	// 	controls: {
	// 		exclude: ['as', 'theme', 'forwardedAs', 'ref'],
	// 	},
	// },
	argTypes: {
		bg: {
			name: 'Background',
			type: 'string',
			control: 'select',
			defaultValue: 'light',
			options: Object.keys(Colors),
		},
	},
} as ComponentMeta<typeof BaseWidget>;

export const BaseWidgetDefault: ComponentStory<typeof BaseWidget> = ({
	...args
}) => {
	const elRef = useRef(null);
	useElementScroll({
		ref: elRef,
		// wait: 1000,
		onChange(scrollPosition) {
			console.log(scrollPosition);
		},
		onScrollToBottom() {
			console.log('END');
		},
	});
	return (
		<>
			{/* <FlexLayout height={'40vh'} width="100%">
				<Card height={'100%'} width="100%" variant={'purple'}>
					<div>Card</div>
				</Card>
			</FlexLayout> */}
			<FlexLayout width={'100%'} ref={elRef} overflow={'auto'}>
				<Mosaic height={'100%'}>
					<Mosaic.Row>
						<Mosaic.Col flex={1}>
							<Mosaic.Row flex={1}>
								<BaseWidget
									height={'22.95rem'}
									{...args}
									widget={DayNightWidget}
									widgetProps={{ username: '' }}
								/>
							</Mosaic.Row>
						</Mosaic.Col>
						<Mosaic.Col flex={1}>
							<Mosaic.Row flex={1}>
								<BaseWidget {...args} />
							</Mosaic.Row>
						</Mosaic.Col>
					</Mosaic.Row>
					<Mosaic.Row>
						<Mosaic.Col flex={1}>
							<Mosaic.Row flex={1}>
								<BaseWidget {...args} />
							</Mosaic.Row>
						</Mosaic.Col>
					</Mosaic.Row>
				</Mosaic>
			</FlexLayout>
		</>
	);
};

export const WelcomeWidget: ComponentStory<typeof BaseWidget> = (args) => {
	return (
		<BaseWidget
			width={'553.4px'}
			contained
			{...args}
			minHeight={'unset'}
			widget={DayNightWidget}
			widgetProps={{
				username: 'Farah',
				welcomeTitle: 'Hey',
			}}
		/>
	);
};
