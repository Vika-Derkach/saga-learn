import { fork } from "redux-saga/effects";
export function saga1() {
  console.log("Saga 1");
}
export function saga2() {
  console.log("Saga 2");
}
export function saga3() {
  console.log("Saga 3");
}
export default function* rootSaga() {
  yield [fork(saga1), fork(saga2), fork(saga3)];
}
