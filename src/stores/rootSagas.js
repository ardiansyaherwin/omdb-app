import { all } from "redux-saga/effects";
import { MoviesSagas } from "./sagas/index";

// combine all sagas
export default function* rootSaga() {
  yield all([...MoviesSagas]);
}
