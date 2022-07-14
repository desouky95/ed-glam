import styled from "styled-components";
import { InputBaseError } from "./BaseInputs.types";

export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.princetonOrange};
  margin: 0 6px;
`;

export const InputBaseHelperText = styled.p<InputBaseError>`
  font-size: 0.625rem;
  word-break: break-word;
  margin-top: 0.3rem;
  min-height: 13px;
  color: ${(props) =>
    props.error ? props.theme.colors.princetonOrange : props.theme.colors.silver};
`;
