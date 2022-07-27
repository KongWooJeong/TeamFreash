import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "../components/Header";

describe("Header component", () => {
  test("Check menu render", () => {
    render(<Header />);

    expect(screen.getByText("회사소개")).toBeInTheDocument();
    expect(screen.getByText("서비스소개")).toBeInTheDocument();
    expect(screen.getByText("인재채용")).toBeInTheDocument();
    expect(screen.getByText("고객지원")).toBeInTheDocument();
    expect(screen.getByText("배송지역검색")).toBeInTheDocument();
  });

  test("Check called onSelectPage function if menu click", () => {
    const mockOnSelectPage = jest.fn();

    render(<Header onSelectPage={mockOnSelectPage} />);

    userEvent.click(screen.getByText("회사소개"));
    expect(mockOnSelectPage).toHaveBeenCalled();

    userEvent.click(screen.getByText("서비스소개"));
    expect(mockOnSelectPage).toHaveBeenCalled();

    userEvent.click(screen.getByText("고객지원"));
    expect(mockOnSelectPage).toHaveBeenCalled();

    userEvent.click(screen.getByText("인재채용"));
    expect(mockOnSelectPage).toHaveBeenCalled();
  });
});
