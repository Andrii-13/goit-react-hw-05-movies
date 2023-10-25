import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import Layout from './Layout/layout';
import NotFound from '../Pages/NotFound';
import MoveDetails from 'components/MovieDetails/MoveDetails';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moviesId" element={<MoveDetails />}>
          <Route path="cast" element={<p>Cast</p> } />
          <Route path="reviews" element={<p>Reviews</p>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
