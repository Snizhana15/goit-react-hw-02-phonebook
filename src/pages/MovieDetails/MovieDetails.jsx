import { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router';
import { getMoviesById } from '../../services/Api';
import {
  CardContainer,
  ImageContainer,
  Button,
  Image,
  DataContainer,
  DataTitle,
  Description,
  InfoContainer,
  InfoLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await getMoviesById(movieId);
        setInfo(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <>
      <Button onClick={() => navigate('/')}>Go Back</Button>
      {info && (
        <CardContainer>
          <ImageContainer>
            <Image src={info.img} alt={info.title} />
          </ImageContainer>
          <DataContainer>
            <DataTitle>
              {info.title} ({info.releaseDate})
            </DataTitle>
            <Description>User score: {info.vote}</Description>
            <DataTitle>Overview</DataTitle>
            <Description>{info.about}</Description>
            <DataTitle>Genres</DataTitle>
            <Description>{info.genre}</Description>
          </DataContainer>
        </CardContainer>
      )}
      <InfoContainer>
        <DataTitle>Additional information</DataTitle>
        <ul>
          <InfoLink to="cast">Cast</InfoLink>
          <InfoLink to="reviews">Reviews</InfoLink>
        </ul>
      </InfoContainer>
      <Outlet />
    </>
  );
};

export default MovieDetails;
