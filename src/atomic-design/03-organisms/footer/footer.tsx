import React, { FC } from "react";
import { StyledFooter } from "./styled";
import Paragraph from "../../01-atoms/paragraph";
import Grid from "../../01-atoms/grid";

interface Props {
  text: string;
}

const Footer: FC<Props> = ({ text }) => (
  <Grid.Container>
    <StyledFooter>
      <Paragraph text={text} size="small" />
    </StyledFooter>
  </Grid.Container>
);

export default Footer;
