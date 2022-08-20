import genreList from './genre';
import noImg from '../img/noFound.png';

const genreArr = genre_id => genre_id.map(el => genreList[`${el}`]).join(', ');
const genreArrLib = genres => genres.map(el => el.name).join(', ');

export const getImgPath = imgPath =>
  !imgPath ? `${noImg}` : `https://image.tmdb.org/t/p/w500/${imgPath}`;

const getDate = date => (!date ? date : date.slice(0, 4));

export const normalizeMovies = movies => {
  return movies.map(
    ({
      genres = null,
      genre_ids = null,
      id,
      original_title,
      name,
      overview,
      popularity,
      poster_path,
      release_date,
      vote_average,
      vote_count,
    }) => ({
      genre: genre_ids ? genreArr(genre_ids) : genreArrLib(genres),
      id: id,
      title: original_title ? original_title : name,
      about: overview,
      popularity: popularity,
      img: getImgPath(poster_path),
      releaseDate: release_date ? getDate(release_date) : '',
      vote: vote_average,
      votes: vote_count,
    })
  );
};

export const normalizeMoviesDetails = ({
  poster_path,
  title,
  original_title,
  vote_average,
  overview,
  genres,
  release_date,
}) => {
  return {
    genre: genreArrLib(genres),
    title: original_title ? original_title : title,
    about: overview,
    img: getImgPath(poster_path),
    releaseDate: release_date ? getDate(release_date) : '',
    vote: vote_average,
  };
};
