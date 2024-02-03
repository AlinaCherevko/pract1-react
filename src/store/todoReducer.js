import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [],

  status: 'idle',
  isLoading: false,
  error: null,
};
const todoSlice = createSlice({
  name: 'todo',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсер.
  reducers: {
    addTodo(state, actions) {
      state.todo = [...state.todo, actions.payload];
    },
    removeTodo(state, actions) {
      state.todo = state.todo.filter(contact => contact.id !== actions.payload);
    },
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;
// Редюсер слайсу
export const todoReducer = todoSlice.reducer;
