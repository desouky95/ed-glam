import styled, { css } from "styled-components";
import { typography, TypographyProps } from "styled-system";
import { createGlobalFont } from './createGlobalFont';
import { generateMaterialIconsFontFaces } from './generateMaterialIconsFontFaces';
import {
  Fonts,
  FontFamily,
  FontWeight,
  MaterialIconFontFace,
  MaterialIconsType,
} from "./typography.types";

export const Typography = styled.div<TypographyProps>`
  ${typography}
`;

export const SingleLineCssTrim = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {
  Fonts,
  FontFamily,
  FontWeight,
  MaterialIconFontFace,
  MaterialIconsType,
  createGlobalFont,
  generateMaterialIconsFontFaces
};
