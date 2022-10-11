import {
	Color,
	MediaQuery,
	ResponsiveVal,
	Shapes,
} from '@eduact/student-theme';
import styled from 'styled-components';
import { variant } from 'styled-system';

export const AvatarStyled = styled.div<{
	size: ResponsiveVal<MediaQuery>;
	shape: Shapes;
	img?: string;
	background: Color;
	withBorder?: boolean;
	borderColor: Color;
}>`
	${variant({ scale: 'avatarSizes', prop: 'size' })}
	${variant({ scale: 'avatarShapes', prop: 'shape' })}
	background: url(${(props) => props.img});
	${variant({ scale: 'backgrounds', prop: 'background' })}
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	cursor: ${(props) => (props.onClick ? 'pointer' : '')};
	box-shadow: ${(props) => {
		if (!props.withBorder) return '';
		return `0 0 0 2px #FFF , 0 0 0 4px ${
			props.theme.colors[props.borderColor]
		}`;
	}};
`;
