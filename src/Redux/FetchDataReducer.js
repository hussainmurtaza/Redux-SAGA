import {types} from './types';

const initialState = {
    loading: false,
    user: {},
    error: {}
}

const FetchDataReducer = (state = initialState, action) =>{
    switch(action.types){
        case types.SEND_REQUEST:
            return{
                ...state,
                loading:true
            }
        case types.SEND_REQUEST_SUCCESS:
            return{
                ...state,
                loading:false,
                user: action.payload,
                error:{}
            }
        
        case types.SEND_REQUEST_FAILURE:
            return{
                ...state,
                loading:false,
                user: {},
                error:action.error
            }    
    }

}

export default FetchDataReducer