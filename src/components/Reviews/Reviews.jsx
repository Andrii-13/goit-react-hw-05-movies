import getFilmReviews from 'js/apiReviews';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultPhoto from '../../img/bart.jpg';

const Reviews = () => {
  const [reviews, setReviews] = useState();

  const moviesId = useParams();
  const id = moviesId.moviesId;

  useEffect(() => {
    try {
      const getReviews = async () => {
        const {
          data: { results },
        } = await getFilmReviews(id);
        setReviews(results);
      };
      getReviews(id);
    } catch (error) {}
  }, [id]);

  // if (reviews.length < 1) {
  //   return;
  // }
  console.log(reviews);

  return (
    <ul>
      {reviews &&
        reviews.map(
          ({
            id,
            author,
            content,
            created_at,
            author_details: { avatar_path },
          }) => {
            return (
              <li key={id}>
                <div>
                  <img
                    src={avatar_path ? 'https://image.tmdb.org/t/p/w500' + avatar_path : defaultPhoto}
                    alt="author avatar"
                    width={100}
                  ></img>
                </div>
                <div>
                  <p>Author: {author}</p>
                  <p>{content}</p>
                  <p>Time: {created_at}</p>
                </div>
              </li>
            );
          }
        )}
      {reviews && reviews.length === 0 && <li>There is no comment.</li>}
    </ul>
  );
};

export default Reviews;
