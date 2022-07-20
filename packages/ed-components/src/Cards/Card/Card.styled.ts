import { Color, ResponsiveVal } from "@eduact/student-theme";
import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps, variant } from "styled-system";

export const StyledCard = styled.div<
  { withShadow?: boolean; variant?: ResponsiveVal<Color> } & SpaceProps &
    LayoutProps
>`
  box-shadow: ${(props) =>
    props.withShadow ? "0 3px 6px 0 rgba(0, 0, 0, 0.16)" : ""};
  border-radius: ${(props) => props.theme.borderRadii.medium}px;
  ${variant({ prop: "variant", scale: "backgrounds" })};
  ${space};
  ${layout}
`;
