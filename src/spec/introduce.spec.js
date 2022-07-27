import React from "react";

import { render, screen } from "@testing-library/react";

import Introduce from "../components/Introduce";

describe("Introduce component", () => {
  test("Check render test", () => {
    render(<Introduce />);

    expect(
      screen.getByText(/안전하고 신속하게 고객에 먹거리를 제공하고 있습니다./)
    ).toBeInTheDocument();
  });
});
