import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component ...", () => {
  beforeEach(() => {
    render(<App />, {});
  });

  test("renders Title App", () => {
    const Header = screen.getByText(/hello, react/i);
    expect(Header).toBeEnabled();
  });
});
