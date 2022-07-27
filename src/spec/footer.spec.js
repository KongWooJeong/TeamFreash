import React from "react";

import { render, screen } from "@testing-library/react";

import Footer from "../components/Footer";

describe("Footer component", () => {
  test("Check render test", () => {
    render(<Footer />);

    expect(screen.getByText("(주)팀프레시")).toBeInTheDocument();
    expect(
      screen.getByText("영업 및 제휴 문의 sales@timf.co.kr")
    ).toBeInTheDocument();
  });
});
