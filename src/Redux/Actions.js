import {types} from './types';

const fetchData = (data) =>{
    return{
        type: types.SEND_REQUEST,
        payload: data
    }
}

const fetchDataSuccess = (user) =>{
    return{
        type: types.SEND_REQUEST_SUCCESS,
        payload: user
    }
}

const fetchDataFailure = (error) =>{
    return{
        type: types.SEND_REQUEST_FAILURE,
        payload:{},
        error: error
    }
}