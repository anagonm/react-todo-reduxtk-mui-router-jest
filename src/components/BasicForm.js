import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { useTodos } from './todosProvider';
import TodoList from './TodoList';

const BasicForm = () => {
  const { todos, addTodo, removeTodo } = useTodos();

  const formik = useFormik({
    initialValues: {
      todo: ''
    },
    onSubmit: ({ todo }, { resetForm }) => {
      addTodo(todo);
      resetForm({ todo: ''});
    },
  });

  return (
    <div>
      <h1 data-testid="h1-title">Pending Todos ({todos.length})</h1>
      <form onSubmit={formik.handleSubmit} onReset={() => formik.handleReset() }>
        <TextField
          inputProps={{ "data-testid": "inputAddTodo" }}
          style={{ marginBottom: '8px' }}
          fullWidth
          id="todo"
          name="todo"
          label="Finish ..."
          value={formik.values.todo || ''}
          onChange={formik.handleChange}
        />
        <Button data-testid="buttonAddTodo" color="primary" variant="contained" fullWidth type="submit">Add to list</Button>
      </form>

      <TodoList todos={todos} removeTodo={removeTodo} />		
    </div>
  )
};

export default BasicForm
