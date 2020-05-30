import { combineReducers } from "redux";
import {
  MoviesReducer
} from "./reducers";

export default combineReducers({
  movies: MoviesReducer,
});
