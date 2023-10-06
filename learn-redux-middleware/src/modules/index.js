import { combineReducers } from "redux";
import { all } from 'redux-saga/effects'
import counter, { counterSaga } from "../modules/counter";
import sample, { sampleSaga } from "./sample";
import loading from "./loading";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  // all: 여러 사가를 합쳐주는 역할
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
