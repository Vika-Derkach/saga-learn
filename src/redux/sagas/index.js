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
  yield [saga1(), saga2(), saga3()];
  //code
}
