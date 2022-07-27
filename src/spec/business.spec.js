import React from "react";

import { render, screen } from "@testing-library/react";

import Business from "../components/Business";

describe("Business component", () => {
  test("Check render test", () => {
    render(<Business />);

    expect(
      screen.getByText("콜드체인 원스톱 솔루션으로 한눈에")
    ).toBeInTheDocument();
    expect(screen.getByText("콜드체인 원스톱 솔루션")).toBeInTheDocument();
    expect(
      screen.getByText("최적화 시스템 기반 서비스 운영")
    ).toBeInTheDocument();
  });
});
