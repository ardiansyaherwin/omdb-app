import axios from "axios";

const MoviesApi = () => {
  const instance = axios.create({
    baseURL: "https://www.omdbapi.com",
    timeout: 30000,
    headers: {},
  });

  const getMovies = ({ params= '', page = 1}) => {
    let endpoint = `&page=${page}`;
    endpoint = params.length ? `&s=${params}` : endpoint;
    return instance
      .get(`?apikey=faf7e5bb${endpoint}`)
      .then((response) => response.data)
      .then((responseBody) => responseBody)
      .catch((error) => error);
  };

  const getMovieDetail = (id) => {
    const endpoint = `&i=${id}&plot=full`;
    return instance
      .get(`?apikey=faf7e5bb${endpoint}`)
      .then((response) => response.data)
      .then((responseBody) => responseBody)
      .catch((error) => error);
  };

  return {
    getMovies,
    getMovieDetail,
  };
}

export default MoviesApi;
