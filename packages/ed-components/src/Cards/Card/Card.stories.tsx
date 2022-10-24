import { Typography } from '@eduact/ed-system';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './Card';

export default {
	title: 'Cards/Default',
	component: Card,
} as ComponentMeta<typeof Card>;

export const DefaultCard: ComponentStory<typeof Card> = (args) => {
	return (
		<Card variant={{ sm: 'dark', md: 'lavender' }} {...args} p={'4rem'}>
			<>
				<Typography textDecoration={'underline'} wordSpacing={'1rem'}>
					fdsfsd sdf sdf sdf sdf sdf{' '}
				</Typography>
			</>
		</Card>
	);
};
