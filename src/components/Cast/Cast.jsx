import getFilmCast from 'js/apiCast';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [castI, setCast] = useState([]);

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
console.log(castI);
  return (
    <ul>
      <li>cast-1</li>
    </ul>
  );
};

export default Cast;
