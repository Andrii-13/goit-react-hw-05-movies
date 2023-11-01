import getFilmCast from 'js/apiCast';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActorInfoWrap, CastList, PhotoWrap } from './Cast.styled';
import defaultPhoto from '../../img/bart.jpg';
import { Loader } from 'components/Loader/loader';

const Cast = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [cast, setCast] = useState([]);

  const moviesId = useParams();
  const id = moviesId.moviesId;

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoader(true);
        setError(false);
        const {
          data: { cast },
        } = await getFilmCast(id);
        setCast(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getCast(id);
  }, [id]);

  return (
    <CastList>
      {loader && <Loader />}
      {error && <div>Error, Please reload this page!</div>}
      {cast.map(({ id, profile_path, name, character }) => {
        return (
          <li key={id}>
            <PhotoWrap>
              <img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : defaultPhoto
                }
                alt="actor"
                width={150}
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
