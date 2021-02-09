import {take, call, all} from 'redux-saga/effects';
import {WatchFetchDataSaga} from './FetchDataSaga';

export default function* rootSaga(){
    yield all([
        WatchFetchDataSaga()
    ])
}