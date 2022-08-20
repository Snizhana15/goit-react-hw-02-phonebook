import { FcSearch } from 'react-icons/fc';
import 'react-toastify/dist/ReactToastify.css';
import { SearchBox, SearchBtn, SearchInput } from './SearchForm.styled';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = evt => {
    setQuery(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchBox onSubmit={handleSubmit}>
      <SearchBtn type="submit">
        <FcSearch size="30" />
      </SearchBtn>

      <SearchInput
        value={query}
        type="text"
        placeholder="Search movies..."
        onChange={handleQueryChange}
      />
    </SearchBox>
  );
};

export default SearchForm;
