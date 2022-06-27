import React from 'react'
import { space, SpaceProps } from 'styled-system'
import styled from 'styled-components'
type Props = {} & SpaceProps
export type SpacerProps = Props
const Spacer: React.FC<SpacerProps> = ({ ...props }) => {
	return <SpacerStyled {...props} />
}

export default Spacer
const SpacerStyled = styled.div<SpaceProps>`
	${space}
`
