import React, { useRef, useState } from 'react';
import {
  AddInfoList,
  FilmPageWrap,
  Genres,
  ImgWrap,
  InfoWrap,
} from './MoveDetails.styled';
import { refs } from 'js/refs';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import getFilmInfo from 'js/apiFilm';
import { useEffect } from 'react';
import { Container } from 'components/Container/Container.styled';
import { Section } from 'components/Section/Section.styled';
import CastLink from 'components/CastLink/CastLink';
import ReviewsLink from 'components/ReviewsLink/ReviewsLink';
import defaultPhoto from '../../img/bart.jpg';
import { SearchButton } from 'components/SearchFilm/SearchFilm.styled';

const MoveDetails = () => {
  const moveId = useParams();

  const [film, setFilm] = useState(moveId);

  const id = moveId.moviesId;

  const { poster_path, title, vote_average, overview, genres = [] } = film;

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  console.log(location);
  console.log(backLinkLocationRef);

  useEffect(() => {
     try {
      const getFilm = async () => {
        const { data } = await getFilmInfo(id);
        setFilm(data);
        return data;
      };
      getFilm(id);
    } catch (error) {}
  }, [id]);

  const urlPoster = refs.POSTER_URL + poster_path;

  // console.log(id);

  return (
    <main>
      <Section>
        {id && (
          <Container>
            <FilmPageWrap>
              <Link to={backLinkLocationRef.current}>
                <SearchButton type="bytton">Go Back</SearchButton>
              </Link>
              <InfoWrap>
                <ImgWrap>
                  <img
                    src={poster_path ? urlPoster : defaultPhoto}
                    alt="films poster"
                    width={300}
                  />
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
            <AddInfoList>
              <CastLink />
              <ReviewsLink />
            </AddInfoList>
            <Outlet />
          </Container>
        )}
      </Section>
    </main>
  );
};

export default MoveDetails;
