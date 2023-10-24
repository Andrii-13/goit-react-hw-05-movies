import React from 'react';
import { ListNameMovies } from './ListMovies.styled';
import { Link } from 'react-router-dom';

const ListMovies = ({trendMovies, getId}) => {

 

  return <ListNameMovies>{trendMovies.map(({id,title})=>{
    return(
        <li key={id}><Link to="/movies" id={id} onClick={getId}>{title}</Link></li>
    )
  })}</ListNameMovies>;
};

export default ListMovies;
