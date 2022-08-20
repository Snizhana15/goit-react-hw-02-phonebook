import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { getMoviesReviews } from 'services/Api';
import { Container, Data, Item, List } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await getMoviesReviews(Number(movieId));
        setReviews(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <Container>
      {reviews.length !== 0 ? (
        <List>
          {reviews &&
            reviews.map(({ content, author_details, id }) => {
              return (
                <Item key={id} data_id={id}>
                  <Data>
                    Author:{' '}
                    {author_details.name ? author_details.name : 'No Author'}
                  </Data>
                  <Data>Rating: {author_details.rating}</Data>
                  <Data>{content}</Data>
                </Item>
              );
            })}
        </List>
      ) : (
        <Data>We don't nave information about reviews in that movie.</Data>
      )}
    </Container>
  );
};

export default Reviews;
