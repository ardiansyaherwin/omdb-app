import { Types } from "../../actions/movies";

const INITIAL_STATE = {
  fetchingMovies: false,
  error: null,
  data: [],
  keyword: '',
};

export default function MoviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_MOVIES_SUCCESS: {
      return {
        ...state,
        data: [...action.payload.movies],
        error: null,
        fetchingMovies: false,
      };
    }
    case Types.GET_MOVIES_REQUEST: {
      return {
        ...state,
        keyword: action.payload.keyword,
        fetchingMovies: true,
      };
    }
    case Types.GET_MOVIES_FAILED: {
      return {
        error: action.payload.error,
        fetchingMovies: false,
      }
    }

    default:
      return state;
  }
}
