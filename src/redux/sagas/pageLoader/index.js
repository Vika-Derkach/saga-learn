import { LOCATION_CHANGE } from "connected-react-router";
import { apply, call, fork, put, take } from "redux-saga/effects";
function* loadBlogData() {
  const request = yield call(fetch, "http://swapi.dev/api/vehicles");
  const data = yield apply(request, request.json);

  console.log("blog data ", data);
  yield put({ type: "BLOG_LOADED", payload: data });
}

export default function* pageLoaderSaga() {
  while (true) {
    const action = yield take(LOCATION_CHANGE);
    if (action.payload.location.pathname.endsWith("blog")) {
      yield fork(loadBlogData);
    }
  }
  //   yield takeEvery("LOAD_BLOG_DATA", loadBlogData);
}
