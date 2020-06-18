import React, { FC, memo } from "react";
import { StyledAbout, StyledAboutImgWrapper } from "./styled";
import Grid from "../../01-atoms/grid";
import Image from "../../01-atoms/image";
import Paragraph from "../../01-atoms/paragraph";
import Heading from "../../01-atoms/heading";
import Theme from "../../../utils/styled/theme";

interface Props {
  text: string;
  imageSrc: string;
  imageAlt: string;
}

const About: FC<Props> = ({ text, imageSrc, imageAlt }) => (
  <StyledAbout>
    <Grid.Container>
      <Grid.Row>
        <Grid.Column lg={4} md={12} sm={12}>
          <StyledAboutImgWrapper>
            <Image src={imageSrc} alt={imageAlt} width="100%" height="100%" />
          </StyledAboutImgWrapper>
        </Grid.Column>

        <Grid.Column lg={8} md={12} sm={12}>
          <Heading
            level={2}
            text="about us"
            uppercase
            color={Theme.colors.primary}
          />
          <Paragraph text={text} />
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  </StyledAbout>
);

export default memo(About);
