import {render, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

it('should check input field', () => {
  const { queryByTitle } = render(<App/>);
  const input = queryByTitle("input-field");
  expect(input).toBeTruthy(); 
})

describe('click button', () => {
  it('should render text on click', async() => {
    const { queryByTitle } = render(<App/>);
    const inputField = queryByTitle("input-field");
    const btn = queryByTitle("input-btn");
    fireEvent.change(inputField, {target: { value: 'new task'}});
    fireEvent.click(btn);
    const todo = queryByTitle('NEW TASK');
    const deleteBtn = queryByTitle('delete-NEW TASK');
    await waitFor(() => {
      expect(todo.innerHTML).toBe("NEW TASK");
      expect(deleteBtn).toBeTruthy();
    })
  })

  // TODO: can't get delete test to pass. Element is not being removed.
  it('should remove items when delete is clicked', async() => {
    const { queryByTitle } = render(<App/>);
    const inputField = queryByTitle("input-field");
    const btn = queryByTitle("input-btn");
    fireEvent.change(inputField, {target: { value: 'new task'}});
    fireEvent.click(btn);
    const todo = queryByTitle('NEW TASK');
    const deleteBtn = queryByTitle("delete-NEW TASK");
    await waitFor(() => {
      fireEvent.click(deleteBtn);
    }, 1000)
    await waitForElementToBeRemoved(() => {
      expect(todo).toBeUndefined();
    }, 1000)
  })
})