import { Color, ResponsiveVal } from '@eduact/student-theme';
import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

type MdDropdownUIProps = {
	variant: ResponsiveVal<Color>;
};
type MdDropdownProps = {} & HTMLProps<HTMLSelectElement> & MdDropdownUIProps;
const MdDropdown = React.forwardRef((props, ref) => {
	return <div></div>;
});

const DropdownWrapper = styled.div<MdDropdownProps>`
	padding: 6px 10px;
	${({ theme }) => `${theme.mediaQueries.large}{
        ${variant({ prop: 'variant', scale: 'buttonsColors' })};
    }`}
	${({ theme }) => `${theme.mediaQueries.medium}{
        ${variant({ prop: 'variant', scale: 'buttonsColors' })};
    }`}
	${variant({ prop: 'variant', scale: 'buttonsColors' })};
`;
