import * as types from '../constants/read.js'
import axios from "axios";

export const getUserRequest =()=>{
    return {
        type: types.GET_USER_REQUEST
    }
}

export const getUserSuccess = (users)=>{
    return {
        type: types.GET_USER_SUCCESS,
        payload: users
    }
}

export const getUserError = err =>{
    return{
        type: types.GET_USER_FAILURE,
        payload: err
    }
}

export const getUsers =()=>{
    return async function(dispatch){
        dispatch(getUserRequest())   
       
        axios('http://localhost:3000/v1/chatbot/allusers', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': 'No',
              'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
          }).then(response=>{
                    const users = response.data
                    dispatch(getUserSuccess(users))
            }).catch(error=>{
                console.log("..........err.................", error.message)
                dispatch(getUserError(error.message))
            })
    }
}

