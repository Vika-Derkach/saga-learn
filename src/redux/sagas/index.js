import { all, call, spawn } from "redux-saga/effects";
import loadBasicData from "./initialSagas";
import pageLoaderSaga from "./pageLoader";

export function* saga2() {
  console.log("Saga 2");
}
export function* saga3() {
  console.log("Saga 3");
}
export default function* rootSaga() {
  //   yield spawn(saga1); //auth
  //   yield spawn(saga2); //users
  //   yield spawn(saga3); //payment

  const sagas = [loadBasicData, pageLoaderSaga];
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
