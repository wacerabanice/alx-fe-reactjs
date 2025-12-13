import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText(/add new todo/i), {
      target: { value: "Test Todo" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });


const todo = screen.getByText("Learn React");
fireEvent.click(todo);
expect(todo).toHaveStyle("text-decoration: line-through");


  test("toggles a todo completed status", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteBtn = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteBtn);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
