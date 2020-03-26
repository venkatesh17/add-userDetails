import * as types from '../constants/create';
import axios from "axios";


export const createUserRequest = () =>{
    return {
        type: types.CREATE_REQUEST
    }
}

export const createUserSuccess = (users) => {
    return{
        type: types.CREATE_SUCCESS,
        payload: users
    }
}

export const createUserError = err => {
    return {
        type: types.CREATE_FAILURE,
        payload: err
    }
}

export const createUsers =(userdata)=>{
      return async function(dispatch){     
        dispatch(createUserRequest())

        axios('http://localhost:3000/v1/chatbot/create', {
            method: 'POST',
            mode: 'no-cors',
            data:{
                Name: userdata.username,
                Nationality: userdata.value,
                Display: false
            },
            headers: {
              'Access-Control-Allow-Origin': 'No',
              'Content-Type': 'application/json',
            },
           
            credentials: 'same-origin',
          }).then(response=>{
                    const users = response.data
                    dispatch(createUserSuccess(users))
            }).catch(error=>{
                dispatch(createUserError(error.message))
            })
       
    }
} 