import { FlexItem, FlexLayout } from '@eduact/ed-system';
import { Colors } from '@eduact/student-theme';
import { Mosaic } from '@src/Surface/MosaicLayout';
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
	return (
		<Mosaic height={'100%'}>
			<Mosaic.Col flex={2}>
				<Mosaic.Row flex={1}>
					<Mosaic.Col flex={1}>
						<BaseWidget {...args} widget={DayNightWidget} />
					</Mosaic.Col>
					<Mosaic.Col flex={1}>{/* <BaseWidget {...args} /> */}</Mosaic.Col>
				</Mosaic.Row>
				<Mosaic.Row flex={1}>
					<Mosaic.Col flex={1}>{/* <BaseWidget {...args} /> */}</Mosaic.Col>
					<Mosaic.Col flex={2}>{/* <BaseWidget {...args} /> */}</Mosaic.Col>
				</Mosaic.Row>
				<Mosaic.Row flex={1}>
					<Mosaic.Col flex={1}>{/* <BaseWidget {...args} /> */}</Mosaic.Col>
				</Mosaic.Row>
			</Mosaic.Col>
			<Mosaic.Col flex={1}>
				<Mosaic.Row flex={1}>{/* <BaseWidget {...args} /> */}</Mosaic.Row>
				<Mosaic.Row flex={1}>{/* <BaseWidget {...args} /> */}</Mosaic.Row>
				<Mosaic.Row flex={1}>{/* <BaseWidget {...args} /> */}</Mosaic.Row>
				<Mosaic.Row flex={4}>{/* <BaseWidget {...args} /> */}</Mosaic.Row>
			</Mosaic.Col>
		</Mosaic>
	);
};
