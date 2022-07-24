import {
	Color,
	MediaQuery,
	ResponsiveVal,
	Shapes,
} from '@eduact/student-theme';
import React from 'react';
import { AvatarStyled } from './Avatar.styled';

export type AvatarProps = {
	shape?: Shapes;
	avatarSize?: ResponsiveVal<MediaQuery>;
	img?: string;
	background?: Color;
	onClick?: (e: React.MouseEvent) => void;
	withBorder?: boolean;
	borderColor?: Color;
};
const Avatar: React.FC<AvatarProps> = ({
	shape = 'circle',
	avatarSize = 'small',
	img,
	background = 'primary',
	borderColor = 'yellow',
	onClick,
	children,
	withBorder,
	...props
}) => {
	return (
		<AvatarStyled
			withBorder={withBorder}
			borderColor={borderColor}
			onClick={(e) => onClick && onClick(e)}
			background={background}
			shape={shape}
			size={avatarSize}
			img={img}
			{...props}
		>
			{children}
		</AvatarStyled>
	);
};

export default Avatar;
