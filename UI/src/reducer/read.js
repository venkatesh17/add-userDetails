import * as types from '../constants/read.js';

const initialState = {
    loading: false,
    users: [],
    err: ''
}

const getUsersReducers = (state=initialState, action)=>{
        switch(action.type){
            case types.GET_USER_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case types.GET_USER_SUCCESS:
                return {
                    loading: false,
                    users: action.payload,
                    err:""
                }
            case types.GET_USER_FAILURE: 
                return {
                    loading: false,
                    users: [],
                    err: action.payload
                }
            default: 
                return state;
        }
}

export default getUsersReducers;