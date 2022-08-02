import { RaisedButton } from '@src/Buttons';
import { RaisedButtonStyled } from '@src/Buttons/RaisedButton/RaisedButton.styled';
import Spacer from '@src/Spacer';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect } from 'react';
import { MutableRefObject, useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import Ripple from './Ripple';

export default { title: 'Surface/Ripple' } as ComponentMeta<typeof Ripple>;

export const RippleStory: ComponentStory<typeof Ripple> = () => {
	return (
		<>
			<RaisedButton
				outlined
				btnSize="small"
				variant="princetonOrange"
				justifyContent={'flex-start'}
				withRipple
				btnShape="square"
			>
				<MdAdd />
				<Spacer mx={4} />
				Text
			</RaisedButton>
		</>
	);
};
