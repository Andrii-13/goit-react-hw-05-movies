import React from 'react';
import { FilmPageWrap, Genres, ImgWrap, InfoWrap } from './PageMove.styled';
import { refs } from 'js/refs';

const PageMove = ({ film }) => {
  if (!Object.keys(film).length) {
    return;
  }
  const { poster_path, title, vote_average, overview, genres = [] } = film;
  console.log(film);
  const urlPoster = refs.POSTER_URL + poster_path;
  return (
    <FilmPageWrap>
      <button type="bytton">Go Back</button>
      <InfoWrap>
        <ImgWrap>
          <img src={urlPoster} alt="films poster" />
        </ImgWrap>
        <div>
          <h1>{title}</h1>
          <div>
            <h2>User Score:</h2>
            <p> {vote_average * 10}%</p>
          </div>
          <div>
            <h2>Overview:</h2>
            <p> {overview}</p>
          </div>
          <div>
            <h2>Genres:</h2>
            <Genres>
              {genres.map(({ name, id }) => (
                <span key={id}>{name}</span>
              ))}
            </Genres>
          </div>
        </div>
      </InfoWrap>
    </FilmPageWrap>
  );
};

export default PageMove;
