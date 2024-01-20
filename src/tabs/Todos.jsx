import React from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from 'redux/todo/todoSlice';

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(store => store.todo.value);

  const onSubmit = todos => {
    const finalTodos = {
      value: todos,
      id: nanoid(),
    };
    console.log(finalTodos);

    const action = addTodo(finalTodos);
    dispatch(action);
  };

  const deleteTodo = id => {
    const action = removeTodo(id);
    dispatch(action);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <Grid>
        {Array.isArray(todos) &&
          todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo
                index={index}
                text={todo.value}
                todos={todos}
                id={todo.id}
                deleteTodo={deleteTodo}
              />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};
