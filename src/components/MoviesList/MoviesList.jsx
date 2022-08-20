import { useLocation } from 'react-router-dom';
import { List, Item } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies &&
        movies.map(({ id, title, img }) => (
          <Item key={id} to={`/movies/${id}`} state={{ from: location }}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
          </Item>
        ))}
    </List>
  );
};

export default MoviesList;
