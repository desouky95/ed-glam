import { Meta, Story } from '@storybook/react'
import ClassroomCard, { ClassroomCardProps } from './ClassroomCard'

const meta: Meta = {
	title: 'Cards/ClassroomCard',
	component: ClassroomCard,
}
export default meta

const Template: Story<ClassroomCardProps> = args => <ClassroomCard {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'Chapter 9 DNA',
	instructor: 'Ahmed Taha',
	badgeLabel: 'Online',
	grade: 'Third Secondary',
	subject: 'Biology',
}
