import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTodos: [],
};

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.allTodos = action.payload;
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
