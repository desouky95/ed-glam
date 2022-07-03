import styled, { css } from "styled-components";
import {
  position,
  flexbox,
  FlexboxProps,
  grid,
  gridGap,
  GridGapProps,
  GridProps,
  layout,
  LayoutProps,
  PositionProps,
  space,
  SpaceProps,
  TypographyProps,
  typography,
  MaxWidthProps,
  maxWidth,
} from "styled-system";

export const GridLayout = styled.div<
  GridProps & SpaceProps & FlexboxProps & LayoutProps
>`
  display: grid;
  grid-gap: ${(props) => props.gridGap ?? "1rem"};
  ${grid}
  ${space}
	${flexbox}
	${layout}
`;
export const FlexLayout = styled.div<
  SpaceProps & FlexboxProps & LayoutProps & GridGapProps
>`
  display: flex;
  ${flexbox};
  ${space};
  ${layout};
  ${gridGap};
`;
export const GridItem = styled.div<GridProps & FlexboxProps>`
  ${grid}
  ${flexbox}
`;

export const Stack = styled.div<PositionProps>`
  position: absolute;
  ${position}
`;

export const Container = styled.div<MaxWidthProps>`
  max-width: 100%;
  @media screen and (max-width: 832px) {
    max-width: 800px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 990px;
  }
  @media screen and (max-width: 1280px) {
    max-width: 1200px;
  }
  ${maxWidth}
`;
