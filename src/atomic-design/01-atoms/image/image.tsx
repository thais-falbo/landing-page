import React, { FC, memo } from "react";
import { StyledImg } from "./styled";

interface Props {
  src: string;
  alt: string;
  width: string;
  height: string;
  mirror?: boolean;
  position?: "top" | "left" | "bottom" | "right" | "center";
}

const Image: FC<Props> = ({
  src,
  alt,
  width,
  height,
  mirror = false,
  position = "center",
}) => (
  <StyledImg
    width={width}
    height={height}
    src={src}
    role="img"
    aria-label={alt}
    mirror={mirror}
    position={position}
  />
);

export default memo(Image);
