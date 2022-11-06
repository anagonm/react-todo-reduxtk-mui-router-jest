import { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../reducers/todosReducer";

export const TodosContext = createContext({});

export const useTodos = () => useContext(TodosContext);

const TodosProvider = ({ children }) => {

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const addTodo = todo => {
    dispatch(add(todo));
  }

  const removeTodo = todo => {
    dispatch(remove(todo));
  }

  const todosValue = {
    todos,
    addTodo,
    removeTodo
  }
  return (
    <TodosContext.Provider value={todosValue}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosProvider;

