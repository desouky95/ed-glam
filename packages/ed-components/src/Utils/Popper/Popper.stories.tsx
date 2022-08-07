import { RaisedButton } from '@src/Buttons';
import { ComponentMeta } from '@storybook/react';
import { Popper } from './Popper';

export default { title: 'Utils/Poppers' } as ComponentMeta<typeof Popper>;

export const PopperStory = () => {
	return (
		<div>
			<div>
				<Popper>
					<RaisedButton>Button</RaisedButton>
					{/* <span>Child</span> */}
				</Popper>
			</div>
		</div>
	);
};
