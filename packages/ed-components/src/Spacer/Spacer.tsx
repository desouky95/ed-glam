import React from 'react';
import { space, SpaceProps } from 'styled-system';
import styled from 'styled-components';
type Props = {} & SpaceProps;
const Spacer: React.FC<Props> = ({ ...props }) => {
	return <SpacerStyled {...props} />;
};

export default Spacer;
const SpacerStyled = styled.div<SpaceProps>`
	${space}
`;
