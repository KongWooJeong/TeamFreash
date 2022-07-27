import React from "react";

import { render, screen } from "@testing-library/react";

import Service from "../components/Service";

describe("Point component", () => {
  test("Check render test", () => {
    render(<Service />);

    expect(screen.getByText("Serivce Introduction")).toBeInTheDocument();
  });
});
