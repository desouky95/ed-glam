import styled, { css } from "styled-components";
import { typography, TypographyProps } from "styled-system";

export const Typography = styled.div<TypographyProps>`
	${typography}
`


export const SingleLineCssTrim = css`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

