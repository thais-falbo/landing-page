import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledCarousel } from "./styled";
import Icon from "../../01-atoms/icon";
import Grid from "../../01-atoms/grid";
import Theme from "../../../utils/styled/theme";

interface Props {
  items: JSX.Element[];
}

const Carousel: FC<Props> = ({ items }) => {
  // React slick settings
  const settings = {
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    dots: false,
    speed: 500,
    responsive: [
      {
        breakpoint: parseInt(Theme.breakpoints.lg.replace("px", "")),
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: parseInt(Theme.breakpoints.sm.replace("px", "")),
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const renderButton = (arrowDirection: "left" | "right") => {
    const buttonClass = arrowDirection === "left" ? "prev" : "next";

    return (
      <button
        // This is where magic happens, we position the button in
        // the same place of slick button but put it under them
        // Instead of clicking this button we are clicking the slick one
        className={`slick-arrow slick-${buttonClass}`}
        style={{ zIndex: -1 }}
      >
        <Icon.Arrow width="2rem" height="4rem" direction={arrowDirection} />
      </button>
    );
  };

  const renderSlides = () => {
    return items.map((item, index) => <div key={index}>{item}</div>);
  };

  return (
    <Grid.Container>
      <StyledCarousel>
        {renderButton("left")}

        <Slider {...settings}>{renderSlides()}</Slider>

        {renderButton("right")}
      </StyledCarousel>
    </Grid.Container>
  );
};

export default Carousel;
