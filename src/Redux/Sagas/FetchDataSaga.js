import {takeEvery, call} from 'redux-saga/effects';
import {types} from '../types';
import axios from 'axios';


function* asyncFetchRequest(action){
    try{
        const url = `https://reqres.in/api/users/${action.payload}`
        const response = yield call(() => axios(url))
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}


export function* WatchFetchDataSaga(){
    yield takeEvery(types.SEND_REQUEST, asyncFetchRequest)
}