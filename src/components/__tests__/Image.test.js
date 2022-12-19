import React from "react";
import Image from "../Image";
import { render, screen } from "@testing-library/react";

describe("Image Component", () => {
  it("Should render image component", () => {
    render(
      <Image
        url="https://www.haloart.pl/foto-prod-zoom/88378_zoom.jpg"
        title="przykładowy-tytuł"
      />
    );
    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute(
      "src",
      "https://www.haloart.pl/foto-prod-zoom/88378_zoom.jpg"
    );
  });
});
