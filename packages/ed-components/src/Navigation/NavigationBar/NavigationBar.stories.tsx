import { Icon, Icons } from '@src/Icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import NavigationBar from './NavigationBar';

export default {
	title: 'Navigation/NavigationBar',
	component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;

export const NavigationBarDefault: ComponentStory<
	typeof NavigationBar
> = () => {
	const [active, setActive] = useState('overview');
	return (
		<NavigationBar
			onChange={(value) => setActive(value.toString())}
			value={active}
		>
			<NavigationBar.Item
				selected
				label="Overview"
				value="overview"
				icon={
					<Icon>
						<Icons.Dashboard />
					</Icon>
				}
			/>
			<NavigationBar.Item
				label="Activity"
				value={'activity'}
				icon={
					<Icon>
						<Icons.Activity />
					</Icon>
				}
			/>
			<NavigationBar.Item
				label="Overview"
				value={'user'}
				icon={
					<Icon>
						<Icons.User />
					</Icon>
				}
			/>
			<NavigationBar.Item
				value={'classroom'}
				label="Overview"
				icon={
					<Icon>
						<Icons.ClassBookmark />
					</Icon>
				}
			/>
			<NavigationBar.Item
				value={'settings'}
				label="Overview"
				icon={
					<Icon>
						<Icons.Settings />
					</Icon>
				}
			/>
		</NavigationBar>
	);
};
