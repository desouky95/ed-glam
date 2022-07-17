import styled from "styled-components";
export const ButtonGridItemStyled = styled.button<{ isSelected: boolean }>`
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 3px;
  background: ${(props) =>
    props.isSelected
      ? props.theme.colors.maxBluePurple
      : props.theme.colors.light};
  cursor: pointer;
  min-height: 4rem;
  color: ${(props) =>
    props.isSelected ? props.theme.colors.light : props.theme.colors.dark};
  * {
    color: ${(props) =>
      props.isSelected ? props.theme.colors.light : ""} !important;
  }
`;
