import { render, screen } from "@testing-library/react";
import React from "react";
import { Pizza } from "./Pizza";

it("renders pizza name", () => {
  const props = {
    id: "p1",
    name: "Margherita Pizza",
    price: 10.99,
  };

  render(<Pizza {...props} />);

  expect(screen.getByText("Margherita Pizza")).toBeInTheDocument();
});