import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Index from "../_index";

describe("URL: /", () => {
  it("contains name Daniel Kantor", () => {
    render(<Index />);

    expect(screen.getByTestId("main-header")).toBeVisible();
  });
});
