import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EyeoffIcon, EyeIcon, Icon, Icons } from './Icons';
import { AiFillAccountBook, AiFillAlert } from 'react-icons/ai';
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
			<Icon color="orange">
				<Icons.Warning />
			</Icon>
		</div>
	);
};
