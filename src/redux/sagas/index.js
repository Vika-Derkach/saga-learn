import { call, fork, put, spawn, takeEvery } from "redux-saga/effects";
const wait = (t) =>
  new Promise((resolve) => {
    setTimeout(resolve, t);
  });
async function swapiGet(patern) {
  const request = await fetch(`https://swapi.dev/api/${patern}`);
  const data = await request.json();

  return data;
}

export function* loadPeople() {
  const people = yield call(swapiGet, "people");
  yield put({ type: "SET_PEOPLE", payload: people.results });
  console.log("load people");
}
export function* loadPlanets() {
  throw new Error();
  const planets = yield call(swapiGet, "planets");
  yield put({ type: "SET_PLANETS", payload: planets.results });
  console.log("load planets");
}

export function* workerSaga() {
  console.log("run paralel tasks");
  yield spawn(loadPeople);
  yield spawn(loadPlanets);
  console.log("finish paralel tasks");
}

// run paralel tasks
//  finish paralel tasks
//  {people: Array(0), planets: Array(10)}
//  load planets
//  {people: Array(10), planets: Array(10)}
//  load people

export function* watchLoadDataSaga() {
  //   while (true) {
  //     yield take("CLICK");
  //     yield workerSaga();
  //   }
  yield takeEvery("LOAD_DATA", workerSaga);
}
export default function* rootSaga() {
  yield fork(watchLoadDataSaga);
}
