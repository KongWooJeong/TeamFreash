import React from "react";

import { render, screen } from "@testing-library/react";

import Point from "../components/Point";

describe("Point component", () => {
  test("Check render test", () => {
    render(<Point />);

    expect(screen.getByText("팀프레시를 이끄는 힘")).toBeInTheDocument();
  });
});
