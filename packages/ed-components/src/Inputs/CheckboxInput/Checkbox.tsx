import React, { useState } from 'react'
import { MdDone } from 'react-icons/md'
import styled from 'styled-components'

type Props = {
  label?: string
}

type SelectedProps = {
  selected: boolean
}

const CheckBox: React.FC<Props> = ({ label }) => {
  const [Active, setActive] = useState(false)

  return (
    <StyledD onClick={() => setActive(!Active)}>

      <CheckBoxInput/>
      <StyledCheckBoxSpan selected={!Active}>
        <StyledActiveIcon selected={!Active}/>
      </StyledCheckBoxSpan>
      {label && <StyledCheckBoxLabel>{label}</StyledCheckBoxLabel>}
    </StyledD>
  )
}
const CheckBoxInput = styled.input.attrs({
  type: 'radio',
  boxSizing: 'border-box',
  p: '0',
})`
  opacity: 0;
  cursor: pointer;
  left: 0;
  width: 20px;
  height: 20px;

`

const StyledCheckBoxSpan = styled.span<SelectedProps>`
  width: 18px;
  height: 18px;
  border: 1px solid #2196f3;
  border-radius: 3px;
  background-color: ${props => (props.selected ?  '#2196f3' : 'transport')};
`
const StyledD = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`
const StyledActiveIcon = styled(MdDone)<SelectedProps>`
  display: ${props => (props.selected ? 'flex' : 'none')};
  font-size: 18px;
  color: white;
  margin-top: -2px;
  margin-left: -1.5px;
`
const StyledCheckBoxLabel = styled.label`
  cursor: pointer;
  color: ${props => props.theme.colors.dark};
  margin-left: 11px;
`

export default CheckBox