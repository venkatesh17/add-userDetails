import * as types from '../constants/delete';
import axios from 'axios';
import {getUsers} from './read'
export const deleteUserRequest  = ()=>{
    return {
        type: types.DELETE_USER_REQUEST
    }
}

export const deleteUserSuccess = (users)=>{
    return {
        type: types.DELETE_USER_SUCCESS,
        payload: users
    }
}

export const deleteUserFailure = err =>{
    return {
        type: types.DELETE_USER_FAILURE,
        payload: err
    }
}

export const deleteuser = (items) =>{
    return async function(dispatch){
        dispatch(deleteUserRequest())

        await axios('http://localhost:3000/v1/chatbot/deleteuser',{
                method: "PUT",
                mode: 'no-cors',
                data: {
                    "_id": items._id,
                    "Display": true
                },
                headers: {
                        'Access-Control-Allow-Origin': 'No',
                        'Content-Type': 'application/json',
                },
                credentials: 'same-origin',
        }).then(response=>{
                const users = response.data;
                dispatch(deleteUserSuccess(users));
                dispatch(getUsers())
        }).catch(err=>{
                dispatch(deleteUserFailure(err.message))
        })
    }
}

export const edituser = (items) =>{
    return async function(dispatch){
        dispatch(deleteUserRequest())

        await axios('http://localhost:3000/v1/chatbot/edituser',{
                method: "PUT",
                mode: 'no-cors',
                data: {
                    "_id": items.id,
                    "Name": items.username,
                    "Nationality": items.value
                },
                headers: {
                        'Access-Control-Allow-Origin': 'No',
                        'Content-Type': 'application/json',
                },
                credentials: 'same-origin',
        }).then(response=>{
                const users = response.data;
                dispatch(deleteUserSuccess(users));
                dispatch(getUsers())
        }).catch(err=>{
                dispatch(deleteUserFailure(err.message))
        })
    }
}

