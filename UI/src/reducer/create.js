import * as types from '../constants/create';
import {combineReducers} from "redux"

const initialState = {
    loading: false,
    users: [],
    error:''
}


const createReducer = (state=initialState, action)=>{

    switch(action.type){
        case types.CREATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.CREATE_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error:''
            }
        case types.CREATE_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default createReducer;