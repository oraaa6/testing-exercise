import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

describe("App Component", () => {
  it("Should click on tab nav verify heading text", () => {
    render(<App />);
    const foodTab = screen.getByText("Food");
    fireEvent.click(foodTab);
    const headingElement = screen.getByTestId("headingSearch");
    expect(headingElement).toHaveTextContent("food Pictures");
  });
  it("Should verify rendered image", async () => {
    render(<App />);
    const imageElement = await screen.findByTestId("image-item-0"); //jeśli chcę użyć asynchroniczności to nie mogę użyć get...(tutaj: getByTestId), tylko ZAWSZE za pomocą find... (tu: findByTestId)
  });
});
