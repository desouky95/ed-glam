import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EyeoffIcon, EyeIcon, Icon, Icons } from './Icons';
import { AiFillAccountBook, AiFillAlert } from 'react-icons/ai';
import { Avatar } from '..';
export default {
	title: 'Icons',
} as ComponentMeta<any>;

export const IconsDefault: ComponentStory<any> = () => {
	return (
		<div>
			<Icon color="orange">
				<Icons.ChevronLeft />
			</Icon>
			<Icon color="orange">
				<Icons.ChevronRight />
			</Icon>
			<Avatar>
				<Icon color="orange">
					<Icons.Warning />
				</Icon>
			</Avatar>
		</div>
	);
};
