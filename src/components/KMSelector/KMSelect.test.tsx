import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import KMSelect from "./KMSelect";
import data from "../../data";

// roles
// combobox
// textbox - input
// button

describe("KMSelect Component ...", () => {
  beforeEach(() => {
    render(<KMSelect placeholder="Test" data={data} callback={jest.fn()} />);
  });

  test("рендерит инпут c корректным плейсхолдером", () => {
    const Input = screen.getByRole("textbox");
    expect(Input).toBeEnabled();
    expect(Input).toHaveAttribute("placeholder", "Test");
  });

  test.skip("корректно фильтрует при вводе текста", () => {
    const Input = screen.getByRole("textbox");
    fireEvent.change(Input, { target: { value: "acc" } });
    screen.getByRole("");
  });

  test.only("элементы фильтруются", () => {
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const Input = screen.getByRole("textbox");
    fireEvent.change(Input, { target: { value: "acc" } });
    const selected = screen.getByRole("checkbox");
    console.log(selected);
  });
});
