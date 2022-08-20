import { useState, useEffect } from 'react';
import { getPopularMovies } from 'services/Api';
import { Title } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getpopularMovies = async () => {
      try {
        const movies = await getPopularMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getpopularMovies();
  }, []);

  return (
    <main>
      <Title>Trending Today</Title>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
