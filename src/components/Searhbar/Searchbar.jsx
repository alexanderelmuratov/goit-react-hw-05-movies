import { useState } from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';
import { toast } from 'react-toastify';
import { SearchForm, SearchButton, SearchInput } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return toast.warn('Please fill in the search field!');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <section>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchButton type="submit">
          <GoSearch style={{ width: 30, height: 30 }} />
        </SearchButton>        
      </SearchForm>
    </section>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
