import { Color, MediaQuery, ResponsiveVal } from '@eduact/student-theme';
import React, { FC } from 'react';
import { RaisedButtonStyled } from './RaisedButton.styled';
import {
	TextAlignProps,
	LayoutProps,
	SpaceProps,
	FlexboxProps,
} from 'styled-system';

export type RaisedButtonProps = {
	variant?: Color;
	outlined?: boolean;
	btnSize?: ResponsiveVal<MediaQuery>;
	bgFallback?: boolean;
} & React.ComponentProps<typeof RaisedButtonStyled> &
	LayoutProps &
	SpaceProps &
	TextAlignProps &
	FlexboxProps &
	React.HTMLProps<HTMLButtonElement>;

const RaisedButton: FC<RaisedButtonProps> = ({
	children,
	outlined = false,
	variant = 'primary',
	justifyContent = 'center',
	btnSize = 'large',
	...props
}) => {
	return (
		<RaisedButtonStyled
			btnSize={btnSize}
			justifyContent={justifyContent}
			variant={variant}
			outlined={outlined}
			{...props}
		>
			{children}
		</RaisedButtonStyled>
	);
};
export default RaisedButton;
