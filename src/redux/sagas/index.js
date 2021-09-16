import { takeLeading } from "redux-saga/effects";
const wait = (t) =>
  new Promise((resolve) => {
    setTimeout(resolve, t);
  });
export function* workerSaga() {
  yield wait(1000);
  console.log("click from saga");
}
export function* watchClickSaga() {
  //   while (true) {
  //     yield take("CLICK");
  //     yield workerSaga();
  //   }
  yield takeLeading("CLICK", workerSaga);
}
export default function* rootSaga() {
  yield watchClickSaga();
}
