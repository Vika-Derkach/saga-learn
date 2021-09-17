import { apply, call, put, takeEvery } from "redux-saga/effects";
//worker
export function* loadPeopleDetails() {}
//worker
export function* loadPeopleList({ payload }) {
  const { page, search } = payload;
  const request = yield call(
    fetch,
    `https://swapi.dev/api/people?page=${page}&search=${search}`
  );
  const data = yield apply(request, request.json);
  yield put({});
}
//watcher
export function* peopleSaga() {
  takeEvery("", loadPeopleList);
}
