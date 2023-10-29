import React, { useState } from 'react';
import { FilmPageWrap, Genres, ImgWrap, InfoWrap } from './MoveDetails.styled';
import { refs } from 'js/refs';
import { Outlet, useParams } from 'react-router-dom';
import getFilmInfo from 'js/apiFilm';
import { useEffect } from 'react';
import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section.styled';
import CastLink from 'components/CastLink/CastLink';
import ReviewsLink from 'components/ReviewsLink/ReviewsLink';

const MoveDetails = () => {
  const moveId = useParams();

  const [film, setFilm] = useState(moveId);

  const id = moveId.moviesId;

  const { poster_path, title, vote_average, overview, genres = [] } = film;

  useEffect(() => {
    try {
      if (!Object.keys(film).length) {
        return;
      }
      const getFilm = async () => {
        const { data } = await getFilmInfo(id);
        setFilm(data);
        return data;
      };
      getFilm(id);
    } catch (error) {}
  }, [film, id]);

  const urlPoster = refs.POSTER_URL + poster_path;

  return (
    <main>
      <Section>
        <Container>
          <FilmPageWrap>
            <button type="bytton">Go Back</button>
            <InfoWrap>
              <ImgWrap>
                <img src={urlPoster} alt="films poster" width={400} />
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
          <h3>Additional information</h3>
          <ul>
            <CastLink />
            <ReviewsLink />
          </ul>
          <Outlet />
        </Container>
      </Section>
    </main>
  );
};

export default MoveDetails;
