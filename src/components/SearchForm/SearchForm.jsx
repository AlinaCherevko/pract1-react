import React from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { Button } from 'components';

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.text;

    onSubmit(value);
    e.target.reset();
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <InputSearch name="text" />
      <FormBtn>
        <FiSearch />
      </FormBtn>
    </SearchFormStyled>
  );
};
