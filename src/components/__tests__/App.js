import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { router } from "../../router"
import { store } from "../../store/store"
import TodosProvider from "../todosProvider"

describe("AccountMenu", () => {
  const renderApp = () => {
    return render (
      <Provider store={store}>
        <TodosProvider>
          <RouterProvider router={router} />
        </TodosProvider>
      </Provider>
    )
  }

  describe("navigation", () => {
    it("navigates to the instruction page", () => {
      renderApp()
      const tabHome = screen.getByTestId("link_home");
      expect(tabHome).toBeVisible()

      fireEvent.click(tabHome);

      const descriptionText1 = screen.getByTestId("description-text-1");
      expect(descriptionText1).toBeVisible()
      expect(descriptionText1.textContent).toEqual("This skills test is designed to allow you to showcase your development abilities to us. The test is administered through an online screen sharing session via zoom and will be recorded.")
    });

    it("navigates to create todo form", () => {
      renderApp()
      const tabTodoNew = screen.getByTestId("link_todo_new");
      expect(tabTodoNew).toBeVisible()

      fireEvent.click(tabTodoNew);

      const todoTitle = screen.getByTestId("h1-title");
      expect(todoTitle).toBeVisible()
      expect(todoTitle.textContent).toEqual("Pending Todos (0)")
    })
  })
})