import { Container, List, Item, Data } from './Cast.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getMoviesCast } from '../../services/Api';
import { getImgPath } from 'utils/normalization';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const res = await getMoviesCast(Number(movieId));
        setCast(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <Container>
      {cast.length !== 0 ? (
        <List>
          {cast &&
            cast.map(({ id, name, profile_path, character }) => {
              const img = getImgPath(profile_path);
              return (
                <Item key={id}>
                  <img src={img} alt={name} />
                  <Data>{name}</Data>
                  <Data>Character: {character} </Data>
                </Item>
              );
            })}
        </List>
      ) : (
        <Data>We don't have information about the actors in that movie.</Data>
      )}
    </Container>
  );
};

export default Cast;
