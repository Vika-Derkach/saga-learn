import { call, put, takeLeading } from "redux-saga/effects";
const wait = (t) =>
  new Promise((resolve) => {
    setTimeout(resolve, t);
  });
async function swapiGet(patern) {
  const request = await fetch(`https://swapi.dev/api/${patern}`);
  const data = await request.json();

  return data;
}
export function* workerSaga() {
  //wait for this
  const people = yield call(swapiGet, "people");
  console.log(people);

  //then do this
  const planets = yield call(swapiGet, "planets");
  console.log(planets);
  yield put({ type: "SET_PEOPLE", payload: people.results });
  yield put({ type: "SET_PLANETS", payload: planets.results });
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
