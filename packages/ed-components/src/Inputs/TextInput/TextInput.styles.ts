import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  border-bottom: 0.6px solid ${(props) => props.theme.colors.silver};
  padding: 6px 0;
`;
export const StyledInput = styled.input`
  flex: 1;
  border: none;
  --color: ${(props) => props.theme.colors.silver};
  outline: var(--color);
  /* color: #000; */
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.06;
  letter-spacing: normal;
  &::placeholder {
    color: var(--color);
  }
`;

export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.princetonOrange};
  margin : 0 6px ;
`;
