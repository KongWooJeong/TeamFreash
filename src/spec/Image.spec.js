import React from "react";

import { render, screen } from "@testing-library/react";

import Image from "../components/Image";

describe("Image component", () => {
  test("Check render test", () => {
    render(<Image />);

    expect(
      screen.getByText("팀프레시는 신선함을 이어 풍요로운 세상을 만듭니다.")
    ).toBeInTheDocument();
    expect(screen.getAllByAltText("business").length).toBe(3);
  });
});
