export const validTodo = (newTodo, allTodos) => {
  if (newTodo.replaceAll(" ", '') === "") {
    return false;
  }

  if (allTodos.includes(newTodo)) {
    return false;
  }

  return true;
}
