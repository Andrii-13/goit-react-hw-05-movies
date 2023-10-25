import React from 'react';
import { ListNameMovies } from './ListMovies.styled';
import { Link} from 'react-router-dom';

const ListMovies = ({trendMovies}) => {
  const styleLink = ({ 
    textDecoration: 'none',
    color: 'black',
   
  });

 
  return <ListNameMovies>{trendMovies.map(({id,title})=>{
    return(
        <li key={id}><Link style={styleLink} to={`/movies/${id}`}>{title}</Link></li>
    )
  })}</ListNameMovies>;
};

export default ListMovies;
