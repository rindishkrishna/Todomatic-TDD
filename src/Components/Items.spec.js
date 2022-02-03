import React from "react";
import { configure } from "enzyme";
import {
  fireEvent,
  render,
} from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import Items from "./Items";
import App from "../App";
configure({ adapter: new Adapter() });

describe("Basic rendering of todo-list", () => {

  it("should enable user to type items", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("Input")).toBeTruthy();
  });

  it("should be able to add item", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("add-button")).not.toHaveAttribute("disabled");
  });

  it("should be able to view all todo list", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("all-button")).not.toHaveAttribute("disabled");
  });

  it("should be able to view active todo list", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("active-button")).not.toHaveAttribute("disabled");
  });

  it("should be able to view completed todo list", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("completed-button")).not.toHaveAttribute("disabled");
  });
});

describe("Basic functionality of todo-list", () => {
  it("Text Input state value should change when user types", () => {
    const { getByTestId } = render(<App />);
    const inputText = getByTestId("Input");
    fireEvent.change(inputText, { target: { value: "test" } });
    expect(inputText.value).toBe("test");
  });
  it("the addItem function should be called on button click", () => {
    const { getByTestId } = render(<App />);
    const {  getAllByTestId } = render(<Items />);
    const inputText = getByTestId("Input");
    fireEvent.change(inputText, { target: { value: "todoItem" } });
    fireEvent.click(getByTestId("add-button"));
    const items = getAllByTestId("Item");
    const textContents = items.map((item) => item.textContent);
    expect(textContents.includes("todoItem")).toBeTruthy();
  });
});