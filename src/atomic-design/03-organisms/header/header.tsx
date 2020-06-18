import React, { FC, useState, useEffect } from "react";
import {
  StyledHeader,
  StyledNavBurgerIcon,
  StyledNavList,
  StyledNavItem,
} from "./styled";
import Icon from "../../01-atoms/icon";
import Grid from "../../01-atoms/grid";
import Button from "../../01-atoms/button";
import { color } from "atomic-design-types";

interface Props {
  backgroundColor: string;
  linkColor?: color;
  links: string[];
}

const Header: FC<Props> = ({ backgroundColor, linkColor, links }) => {
  const [background, setBackground] = useState("transparent");
  const [menuOpen, setMenuOpen] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY < 50) setBackground("transparent");
    else if (window.scrollY > 50) setBackground(backgroundColor);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    // return () => window.removeEventListener("scroll", listenScrollEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledHeader background={background}>
      <Grid.Container>
        <Icon.Logo width="64px" height="64px" />

        <nav>
          <div onClick={() => setMenuOpen((menuOpen) => !menuOpen)}>
            <StyledNavBurgerIcon menuOpen={menuOpen} />
          </div>

          <StyledNavList menuOpen={menuOpen} backgroundColor={backgroundColor}>
            {links.map((link) => (
              <StyledNavItem key={link}>
                <Button
                  design="text"
                  text={link}
                  onClick={() => {}}
                  color={linkColor}
                />
              </StyledNavItem>
            ))}
          </StyledNavList>
        </nav>
      </Grid.Container>
    </StyledHeader>
  );
};

export default Header;
