import React from 'react';
import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';
import { visibility, VisibilityProps } from './visibility';

type BoxProps = LayoutProps & SpaceProps & VisibilityProps;
const Box: React.FC<BoxProps> = ({ children, ...props }) => {
	return <_Box {...props}>{children}</_Box>;
};

export default Box;
const _Box = styled.div<BoxProps>`
	${space};
	${layout};
	${visibility};
`;
