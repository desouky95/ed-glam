// import { AvatarStyled } from "../../Avatar/Avatar.styled";
import { AvatarStyled } from "@src/Avatar/Avatar.styled";
import React from "react";
import styled from "styled-components";
import { SkeletonLoadingAnimation } from "../Skeleton.styled";
import { SkeletonAvatarProps } from "./SkeletonAvatar.types";
const SkeletonAvatar: React.FC<SkeletonAvatarProps> = ({
  isLoading,
  children,
  size = "xlarge",
}) => {
  if (isLoading === true || isLoading === undefined)
    return (
      <SkeletonAvatarStyled
        shape="circle"
        background="darkCultured"
        borderColor="primary"
        size={size}
      >
        <SkeletonAvatartInner />
      </SkeletonAvatarStyled>
    );
  return <>{children}</>;
};

export default SkeletonAvatar;


const SkeletonAvatarStyled = styled(AvatarStyled)`
  margin: 1rem 0;
  overflow: hidden;
`;
const SkeletonAvatartInner = styled.div`
  width: 100%;
  height: 100%;
  ::before {
    content: "";
    position: absolute;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.9),
      transparent
    );
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
  }
  animation: ${SkeletonLoadingAnimation} 2s infinite;
`;
