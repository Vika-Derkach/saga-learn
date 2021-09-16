import { call, put, takeLeading } from "redux-saga/effects";
const wait = (t) =>
  new Promise((resolve) => {
    setTimeout(resolve, t);
  });
async function getPeople() {
  const request = await fetch("https://swapi.dev/api/people");
  const data = await request.json();

  return data;
}
export function* workerSaga() {
  const data = yield call(getPeople);
  console.log(data);
  yield put({ type: "SET_PEOPLE", payload: data.results });
}
export function* watchClickSaga() {
  //   while (true) {
  //     yield take("CLICK");
  //     yield workerSaga();
  //   }
  yield takeLeading("LOAD_DATA", workerSaga);
}
export default function* rootSaga() {
  yield watchClickSaga();
}
