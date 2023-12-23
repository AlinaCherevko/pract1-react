import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { Button } from 'components';

export class SearchForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.text.value;

    this.props.onSubmit(value);
  };

  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <InputSearch name="text" />
        <FormBtn>
          <FiSearch />
        </FormBtn>
      </SearchFormStyled>
    );
  }
}
