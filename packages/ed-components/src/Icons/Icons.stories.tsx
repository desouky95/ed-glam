import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EyeoffIcon, EyeIcon, Icon, Icons } from './Icons';
import { AiFillAccountBook, AiFillAlert } from 'react-icons/ai';
export default {
	title: 'Icons',
} as ComponentMeta<any>;

export const IconsDefault: ComponentStory<any> = () => {
	return (
		<div>
			{/* <Icon size={24} color="purple">
				<Icons.Bolt />
			</Icon>
			<Icon size={24} color="primary">
				<Icons.Check />
			</Icon>
			<Icon size={24} color="primary">
				<EyeoffIcon />
			</Icon>
			<Icon size={24} color="primary">
				<Icons.EyeIcon />
			</Icon>
			<Icon size={24} color="primary">
				<Icons.ChevronMore />
			</Icon> */}
			<Icon color="orange">
				<Icons.ChevronLeft />
			</Icon>
			<Icon color="orange">
				<Icons.ChevronRight />
			</Icon>
		</div>
	);
};
