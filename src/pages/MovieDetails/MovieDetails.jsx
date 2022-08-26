import { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router';
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
  const location = useLocation();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await getMoviesById(movieId);
        setInfo(res);
      } catch (error) {
        console.log(error.message);
        alert('Sorry, this link failed');
        navigate('/', { replace: true });
      }
    };
    getMovie();
  }, [movieId, navigate]);

  return (
    <>
      <Button onClick={() => navigate(location?.state?.from ?? '/')}>
        Go Back
      </Button>
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
