import getFilmCast from 'js/apiCast';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActorInfoWrap, CastList, PhotoWrap } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const moviesId = useParams();
  const id = moviesId.moviesId;

  useEffect(() => {
    const getCast = async () => {
      const {
        data: { cast },
      } = await getFilmCast(id);
      setCast(cast);
    };

    getCast(id);
  }, [id]);
  console.log(cast);

  return (
    <CastList>
      {cast.map(({ id, profile_path, name, character }) => {
        return (
          <li key={id}>
            <PhotoWrap>
              <img
                src={'https://image.tmdb.org/t/p/w500' + profile_path}
                alt="photo actor"
                width={200}
              />
            </PhotoWrap>
            <ActorInfoWrap>
              <p>{name}</p>
              <p>Character: {character}</p>
            </ActorInfoWrap>
          </li>
        );
      })}
    </CastList>
  );
};

export default Cast;
