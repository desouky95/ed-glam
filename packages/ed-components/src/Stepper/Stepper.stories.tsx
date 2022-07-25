import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import Stepper from './Stepper';
import { MdAdd, MdAttachEmail } from 'react-icons/md';
import { RaisedButton } from '../Buttons';
import Spacer from '../Spacer';
import { Container, FlexLayout } from '@eduact/ed-system';
export default {
	parameters: {
		docs: {
			source: {
				type: 'code',
			},
		},
	},
} as ComponentMeta<typeof Stepper>;

export const StoryTemplate: ComponentStory<typeof Stepper> = (
	{ children, orientation, initStep, onChange },
	{ hooks }
) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	return (
		<>
			<Container>
				<Stepper
					finishedIcon={<MdAdd />}
					initStep={currentIndex}
					orientation="horizontal"
				>
					<Stepper.Item tooltip={'Sign up'} />
					<Stepper.Item disabled tooltip="Verify" />
					<Stepper.Item />
					<Stepper.Item />
				</Stepper>
				<Spacer mb={'1rem'} />
				<FlexLayout>
					<RaisedButton
						btnSize={'small'}
						onClick={() => setCurrentIndex(currentIndex + 1)}
					>
						+
					</RaisedButton>
					<Spacer mx={'1rem'} />
					<RaisedButton
						btnSize={'small'}
						variant="princetonOrange"
						onClick={() => setCurrentIndex(currentIndex - 1)}
					>
						-
					</RaisedButton>
				</FlexLayout>
			</Container>
		</>
	);
};
