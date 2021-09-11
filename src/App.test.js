import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("should check input field renders correctly", () => {
  const { queryByTitle } = render(<App />);
  const input = queryByTitle("input-field");
  expect(input).toBeTruthy();
});

describe("Confirm button click actions", () => {
  it("should render text when Submit button is clicked", async () => {
    const { queryByTitle } = render(<App />);
    const inputField = queryByTitle("input-field");
    const btn = queryByTitle("input-btn");
    fireEvent.change(inputField, { target: { value: "new task" } });
    fireEvent.click(btn);
    const todo = queryByTitle("NEW TASK");
    const deleteBtn = queryByTitle("delete-NEW TASK");
    await waitFor(() => {
      expect(todo.innerHTML).toBe("NEW TASK");
      expect(deleteBtn).toBeTruthy();
    });
  });

  it("should remove todo items when delete button is clicked", async () => {
    const { queryByTitle } = render(<App />);
    const inputField = queryByTitle("input-field");
    const btn = queryByTitle("input-btn");
    fireEvent.change(inputField, { target: { value: "new task" } });
    fireEvent.click(btn);
    const deleteBtn = queryByTitle("delete-NEW TASK");
    await waitFor(() => {
      fireEvent.click(deleteBtn);
      const todo = queryByTitle("NEW TASK");
      expect(todo).toBeNull();
    });
  });
});
