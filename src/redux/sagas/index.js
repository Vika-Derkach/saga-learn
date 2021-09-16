import { all, call, cancel, fork, spawn, take } from "redux-saga/effects";
import loadBasicData from "./initialSagas";
import pageLoaderSaga from "./pageLoader";
//worker
export function* fetchPlanets(signal) {
  const response = yield call(fetch, "https://swapi.dev/api/films", { signal });

  const data = yield call([response, response.json]);
  console.log("LOAD_SOME_DATA completed", data);
}
//watcher
export function* loadOnAction() {
  // yield takeLatest("LOAD_SOME_DATA", fetchPlanets);
  let task;
  let abortController = new AbortController();

  while (true) {
    yield take("LOAD_SOME_DATA");
    console.log("LOAD_SOME_DATA start fetching");
    if (task) {
      abortController.abort();
      yield cancel(task);
      abortController = new AbortController();
    }
    task = yield fork(fetchPlanets, abortController.signal);
  }
}

export default function* rootSaga() {
  //   yield spawn(saga1); //auth
  //   yield spawn(saga2); //users
  //   yield spawn(saga3); //payment

  const sagas = [loadBasicData, pageLoaderSaga, loadOnAction];
  const retrySagas = yield sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    });
  });
  yield all(retrySagas);
  //code
}
