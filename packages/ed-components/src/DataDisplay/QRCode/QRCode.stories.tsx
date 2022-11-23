import { ComponentMeta, ComponentStory } from '@storybook/react';
import QRCode, { QRCodeProps } from './QRCode';

export default {
	title: 'Data Display/QRCode',
	component: QRCode,
	argTypes: {
		value: {
			type: 'string',
			defaultValue: 'ismail',
		},
	},
	args: {},
	parameters: {},
} as ComponentMeta<typeof QRCode>;

export const QRCodeDefaultStory: ComponentStory<typeof QRCode> = (args) => {
	return <QRCode {...args} />;
};
