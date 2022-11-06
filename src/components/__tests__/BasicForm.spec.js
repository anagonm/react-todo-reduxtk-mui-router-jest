import { act, fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../store/store"
import BasicForm from "../BasicForm"
import TodosProvider from "../todosProvider"

describe("BasicForm", () => {

  const wrapper = ({children}) => {
    return (
      <Provider store={store}>
        <TodosProvider>
          {children}
        </TodosProvider>
      </Provider>
    )
  }

  describe("Add todo", () => {
    it("adds a new todo", async () => {
      const todo = 'Add typescript';
      render(<BasicForm />, { wrapper });
      const todoInput = screen.getByTestId("inputAddTodo");
      expect(todoInput).toBeVisible();

      const todoButton = screen.getByTestId("buttonAddTodo");
      expect(todoButton).toBeVisible();

      fireEvent.change(todoInput, {target: {value: todo}});

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        await fireEvent.click(todoButton);
      });

      const todoLi = screen.getByTestId(todo);
      expect(todoLi).toBeVisible();
      expect(todoLi.textContent).toEqual(todo);
    });

    it("does not duplicate existing values", async () => {
      const todo = 'Add typescript';
      render(<BasicForm />, { wrapper });
      const todoInput = screen.getByTestId("inputAddTodo");
      expect(todoInput).toBeVisible();

      const todoButton = screen.getByTestId("buttonAddTodo");
      expect(todoButton).toBeVisible();

      fireEvent.change(todoInput, {target: {value: todo}});

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        await fireEvent.click(todoButton);
      });

      const ul = screen.getByTestId("ul-list")
      expect(ul.childElementCount).toEqual(1);
    })
  });

  describe("Remove todo", () => {
    it("remove todos successfully", async () => {
      const todo = 'Add typescript';
      render(<BasicForm />, { wrapper });
      const todoInput = screen.getByTestId("inputAddTodo");
      expect(todoInput).toBeVisible();

      const todoButton = screen.getByTestId("buttonAddTodo");
      expect(todoButton).toBeVisible();

      fireEvent.change(todoInput, {target: {value: todo}});

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        await fireEvent.click(todoButton);
      });

      const todoLi = screen.getByTestId(todo);
      expect(todoLi).toBeVisible();
      expect(todoLi.textContent).toEqual(todo);

      const itemTestId = `deleteTodo-${todo}`;
      const deleteIcon = screen.getByTestId(itemTestId);
      expect(deleteIcon).toBeVisible();
      fireEvent.click(deleteIcon);

      const ul = screen.getByTestId("ul-list")
      expect(ul.childElementCount).toEqual(0);
    })
  });



})