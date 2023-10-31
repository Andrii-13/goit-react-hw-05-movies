import React from 'react';
import FilmItem from 'components/FilmItem/FilmItem';

const ListMovies = ({ trendMovies }) => {
  const styleLink = {
    textDecoration: 'none',
    color: 'black',
  };
 
  return (
 <FilmItem films= {trendMovies}/>
  );
};

export default ListMovies;
