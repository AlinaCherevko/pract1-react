import React from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { Button } from 'components';
import { useDispatch, useSelector } from 'react-redux';

export const SearchForm = ({ onSubmit, addNewTodo }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.search;

    onSubmit(value);

    e.currentTarget.reset();
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
    </SearchFormStyled>
  );
};
