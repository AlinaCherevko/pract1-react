import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const todoSlice = createSlice({
  // Ім'я слайсу
  name: 'todos',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    addTodo(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

// Генератори екшенів
export const { addTodo, removeTodo } = todoSlice.actions;
// Редюсер слайсу
export const todoReducer = todoSlice.reducer;
