export const Types = {
  GET_MOVIES_REQUEST: "get_movies_request",
  GET_MOVIES_SUCCESS: "get_movies_success",
  GET_MOVIES_FAILED: "get_movies_failed",
};

export const getMoviesRequest = keyword => ({
  type: Types.GET_MOVIES_REQUEST,
  payload: {
    keyword
  }
});
export const getMoviesSuccess = ({ movies }) => ({
  type: Types.GET_MOVIES_SUCCESS,
  payload: {
    movies,
  },
});

export const getMoviesFailed = (error) => ({
  type: Types.GET_MOVIES_FAILED,
  payload: { 
    error,
   },
});
