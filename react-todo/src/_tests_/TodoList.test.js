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
    const input = screen.getByPlaceholderText("Add a todo");
    const button = screen.getByText("Add");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });
});
