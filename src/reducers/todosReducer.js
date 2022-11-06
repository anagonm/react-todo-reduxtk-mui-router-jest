import { createSlice } from '@reduxjs/toolkit'
import { validTodo } from '../utils';

const initialState = []

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      if (!validTodo(payload, state)) {
        return;
      }

      state.push(payload);
    },

    remove: (state, { payload }) => {
        const index = state.indexOf(payload);
        if (index > -1) {
          state.splice(index, 1);
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = todosSlice.actions

export default todosSlice.reducer