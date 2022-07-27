import React from "react";

import { render, screen } from "@testing-library/react";

import Link from "../components/Link";

describe("Link component", () => {
  test("Check render test", () => {
    render(<Link />);

    expect(screen.getAllByAltText("arrow").length).toBe(3);
  });
});
