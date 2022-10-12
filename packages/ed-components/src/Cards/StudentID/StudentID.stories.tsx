import { Typography } from '@eduact/ed-system';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StudentID from './StudentID';

export default {
	title: 'Cards/StudentID',
	component: StudentID,
	args: {
		title: 'Student ID',
		userInfo: {
			first_name: 'Mariam',
			last_name: 'Walid',
			username: 'ma314mar',
			email: 'mariam.w@gmail.com',
			phone: '01156596754',
		},
		educationalInfo: {},
		scale: 1,
	},
	argTypes: {
		scale: {
			control: {
				type: 'number',
			},
		},
	},
} as ComponentMeta<typeof StudentID>;

export const StudentIDCard: ComponentStory<typeof StudentID> = (args) => {
	return <StudentID {...args} />;
};
