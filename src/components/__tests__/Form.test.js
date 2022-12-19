import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../Form";

describe("Form Component", () => {
  it("Should render value in input", () => {
    render(<Form />);
    const inputElement = screen.getByPlaceholderText("Search...");
    fireEvent.change(inputElement, { target: { value: "Góry" } });
    expect(inputElement.value).toBe("Góry");
  });
  it("Should button disabled if input is empty", () => {
    render(<Form />);
    const inputElement = screen.getByPlaceholderText("Search...");
    const buttonElement = screen.getByTestId("submitButton");
    fireEvent.change(inputElement, { target: { value: " " } });
    expect(buttonElement).toHaveAttribute("disabled", "");
  });
});
