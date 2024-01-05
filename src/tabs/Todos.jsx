import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState('');

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem('todo'));
    if (todoData !== 0) setTodos(todoData);
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = todos => {
    const finalTodos = {
      value: todos,
      id: nanoid(),
    };
    console.log(finalTodos);
    setTodos(prevState => [...prevState, finalTodos]);
    console.log(todos);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
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
