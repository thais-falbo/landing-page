import { fireEvent } from "@testing-library/react";

const resizeScreen = (size: number) => {
  global.innerWidth = size;
  fireEvent(window, new Event("resize"));
};

export default resizeScreen;
