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
import Theme from "../../../utils/styled/theme";

interface Props {
  backgroundColor: string;
  linkColor?: color;
  links: string[];
}

const Header: FC<Props> = ({ backgroundColor, linkColor, links }) => {
  const isWindowSmall = () => window.innerWidth < Theme.breakpoints.lg;

  const [showBurger, setShowBurger] = useState(isWindowSmall);
  const [background, setBackground] = useState("transparent");
  const [menuOpen, setMenuOpen] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY < 50) setBackground("transparent");
    else setBackground(backgroundColor);
  };

  const listenResizeEvent = () => setShowBurger(isWindowSmall());

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    window.addEventListener("resize", listenResizeEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
      window.removeEventListener("resize", listenResizeEvent);
    };
  });

  return (
    <StyledHeader background={background} role="banner">
      <Grid.Container>
        <Icon.Logo width="64px" height="64px" />

        <nav>
          {showBurger && (
            <div
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
              aria-label="Open menu"
            >
              <StyledNavBurgerIcon menuOpen={menuOpen} aria-hidden="true" />
            </div>
          )}

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
