import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import Layout from './Layout/layout';
import NotFound from '../Pages/NotFound';
import getFetch from 'js/apiTrend';
import React, { useEffect, useState } from 'react';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [moveId, setMoveId] = useState();

  useEffect(() => {
    try {
      const trendMovies = async () => {
        const {
          data: { results },
        } = await getFetch();
        setMovies(results);
      };
      trendMovies();
    } catch (error) {
    } finally {
    }
  }, []);

  const getId =(e)=>{
    setMoveId(e.target.id)
      }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home films={movies} onGetId={getId}/>} />
        <Route path="movies" element={<Movies id={moveId}/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
