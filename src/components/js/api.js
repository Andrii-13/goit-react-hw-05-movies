import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const API_KEY = '9322e843d0da07a43a222238c5af1c78';

const getFetch = async () => {
  const responce = await axios.get(`${BASE_URL}`, {
    params: {
      api_key: API_KEY,
    },
  });

  console.log(responce.data.results);
  return responce.data.results;
};

export default getFetch;
