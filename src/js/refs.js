export const refs = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  API_KEY: '9322e843d0da07a43a222238c5af1c78',
  POSTER_URL: 'https://image.tmdb.org/t/p/w500/'
};

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzIyZTg0M2QwZGEwN2E0M2EyMjIyMzhjNWFmMWM3OCIsInN1YiI6IjY1MzcwNjEyNDA4M2IzMDBjM2M5NTBkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.psBkGG83RilBMHfBSSXjDkODuMbcpk7j_gosJgiCRC0' \
//      --header 'accept: application/json'