import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesBySearch } from 'services/Api';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';
import { ToastContainer, toast } from 'react-toastify';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const newSearchQuery = searchParams.get('query');

  useEffect(() => {
    if (newSearchQuery) {
      getSearchMovie(newSearchQuery);
    }
    setSearchQuery(newSearchQuery);
  }, [newSearchQuery]);

  const getSearchMovie = async query => {
    try {
      const items = await getMoviesBySearch(query);

      if (items.length === 0) {
        return toast.error('Sorry, there are no movies.');
      }
      setMovies(items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = newSearchQuery => {
    if (newSearchQuery === searchQuery) return;
    setSearchParams({ query: newSearchQuery });
  };

  return (
    <main>
      <SearchForm onSubmit={handleFormSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      <ToastContainer
        theme="colorblack"
        position="top-right"
        autoClose={2000}
      />
    </main>
  );
};

export default Movies;
