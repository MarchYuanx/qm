import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res=>setTimeout(res, ms));

export function* helloSaga(){
  yield console.log('Hello Sagas!');
}
export function* hiDeveloper(){
  yield console.log('Hi Developer!');
}

export function* incrementASYNC(){
  yield delay(1000);
  yield put({type: 'INCREMENT'});
}

export function* watchIncrementAsync(){
  yield takeEvery('INCREMENT_ASYNC',incrementASYNC);
}

export default function* rootSaga(){
  yield all([
    helloSaga(),
    hiDeveloper(),
    watchIncrementAsync()
  ])
}