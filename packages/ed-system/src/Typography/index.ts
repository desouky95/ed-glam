import styled, { css } from "styled-components";
import {
  space,
  SpaceProps,
  textStyle,
  TextStyleProps,
  typography,
  TypographyProps,
  variant,
} from "styled-system";
import { createGlobalFont } from "./createGlobalFont";
import { generateMaterialIconsFontFaces } from "./generateMaterialIconsFontFaces";
import {
  Fonts,
  FontFamily,
  FontWeight,
  MaterialIconFontFace,
  MaterialIconsType,
} from "./typography.types";

export const Typography = styled.span<
  TypographyProps & TextStyleProps & SpaceProps
>`
  ${typography}
  ${textStyle}
  ${space}
`;

export const SingleLineCssTrim = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export * from "./textDecoration";
export {
  Fonts,
  FontFamily,
  FontWeight,
  MaterialIconFontFace,
  MaterialIconsType,
  createGlobalFont,
  generateMaterialIconsFontFaces,
};
