import React, { FC, memo } from "react";
import { StyledTrending, StyledTrend, StyledTitle } from "./styled";
import Theme from "../../../utils/styled/theme";
import Heading from "../../01-atoms/heading";
import Grid from "../../01-atoms/grid";
import Paragraph from "../../01-atoms/paragraph";

interface Props {
  trends: readonly [string, string, string];
}

const Trending: FC<Props> = ({ trends }) => (
  <StyledTrending>
    <Grid.Container>
      <Grid.Row>
        {/* Title */}
        <Grid.Column lg={3} className="item">
          <StyledTitle>
            <Heading level={4} text="Trending" color="white" />
            <Heading level={4} text="Today" color={Theme.colors.primary} />
          </StyledTitle>
        </Grid.Column>

        {/* Trends */}
        {trends.map((trend, i) => (
          <Grid.Column lg={3} className="item" key={i}>
            <StyledTrend>
              <Paragraph text={trend} color="white" size="small" />
            </StyledTrend>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid.Container>
  </StyledTrending>
);

export default memo(Trending);
