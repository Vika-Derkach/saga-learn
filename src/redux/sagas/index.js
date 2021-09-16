import { take } from "redux-saga/effects";
export function* workerSaga() {
  console.log("click from saga");
}
export function* watchClickSaga() {
  while (true) {
    yield take("CLICK");
    yield workerSaga();
  }
}
export default function* rootSaga() {
  yield watchClickSaga();
}
