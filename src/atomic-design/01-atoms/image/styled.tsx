import styled from "styled-components";

interface Props {
  width: string;
  height: string;
  src: string;
  mirror: boolean;
  position: "top" | "left" | "bottom" | "right" | "center";
}

export const StyledImg = styled.div<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: hidden;
  position: relative;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${({ position }) => position};
  ${({ mirror }) => mirror && `transform: rotateY(180deg);`}
`;
