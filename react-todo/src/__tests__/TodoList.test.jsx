import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList.jsx";

describe("TodoList Component - Add Todo", () => {
  test("adds a new todo when the form is submitted", () => {
    // Render the component
    render(<TodoList />);

    // Find the input field and the add button
    const input = screen.getByPlaceholderText("Add a todo");
    const addButton = screen.getByText("Add");

    // Simulate typing a new todo
    fireEvent.change(input, { target: { value: "New Todo Item" } });

    // Simulate clicking the add button
    fireEvent.click(addButton);

    // Check that the new todo appears in the list
    expect(screen.getByText("New Todo Item")).toBeInTheDocument();

    // Optional: check that the input is cleared after submission
    expect(input.value).toBe("");
  });
});
