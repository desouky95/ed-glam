import styled from "styled-components";
import { InputBaseError } from "./BaseInputs.types";

export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.princetonOrange};
  margin: 0 6px;
`;

export const InputBaseHelperText = styled.p<InputBaseError>`
  font-size: 0.625rem;
  /* white-space: nowrap; */
  word-break: break-word;
  min-height: 13px;
  color: ${(props) =>
    props.error ? props.theme.colors.red : props.theme.colors.silver};
`;
