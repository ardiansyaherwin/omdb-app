import { takeEvery, call, fork, put, select } from "redux-saga/effects";
import * as actions from "../../actions/movies";
import MoviesApi from "../../../api/movies";

import { getKeyword } from '../../selectors'

const moviesApi = MoviesApi();

function* fetchMovies() {
  const keyword = yield select(getKeyword)
  const response = yield call(moviesApi.getMovies, { params: keyword });
  
  try {
    yield put(actions.getMoviesSuccess({ movies: response.Search }));
  } catch (error) {
    yield put(actions.getMoviesFailed(response.Error));
  }
}
function* watchFetchMovies() {
  yield takeEvery(actions.Types.GET_MOVIES_REQUEST, fetchMovies);
}

const MoviesSagas = [
  fork(watchFetchMovies),
];

export default MoviesSagas;
