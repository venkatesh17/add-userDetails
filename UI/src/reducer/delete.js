import * as types from '../constants/delete';

const initialState = {
    loading: false,
    users : [],
    error: ""
}

const deleteReducers=(state=initialState, action)=>{
        console.log('---', action)
        switch(action.type){
            case types.DELETE_USER_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case types.DELETE_USER_SUCCESS: 
                return {
                    loading: false,
                    users: action.payload,
                    error: ''
                }
            case types.DELETE_USER_FAILURE:
                return {
                    loading: false,
                    users: [],
                    error: action.payload
                }
            default:
             return state;
        }
}

export default deleteReducers;