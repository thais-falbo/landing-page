import styled from "styled-components";
import Icon from "../../01-atoms/icon";

export const StyledCtaTitle = styled.div`
  width: 100%;

  & > * {
    display: inline-block;
  }

  & ${Icon.Dot} {
    margin-left: 0.5rem;
  }
`;
