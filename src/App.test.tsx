import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App.jsx", () => {
  test("renders 'Hello World!' text", () => {
    const { getByText } = render(<App />);
    const text = getByText(/Hello World!/);
    expect(text).toBeInTheDocument();
  });
});
