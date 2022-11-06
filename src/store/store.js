import { configureStore } from '@reduxjs/toolkit'
import { todosSlice } from '../reducers/todosReducer'

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  },
})