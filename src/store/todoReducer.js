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
    editTodo(state, action) {
      state.todo = state.todo.map(item => item.id === action.payload.id ? action.payload : item);
      
    }
  },
});
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
// Редюсер слайсу
export const todoReducer = todoSlice.reducer;
