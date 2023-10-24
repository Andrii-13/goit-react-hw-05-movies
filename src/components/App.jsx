import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Layout from './Layout/layout';
import NotFound from './Pages/NotFound';

export const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
};
