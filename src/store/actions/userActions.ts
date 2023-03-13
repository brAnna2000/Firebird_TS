import { Dispatch } from 'redux';
import axios from 'axios';
import { UserActionTypes, GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../types/userTypes';


export const getUsers = (): any => async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      dispatch({
        type: GET_USERS_REQUEST,
      });

      const response = await axios.get("https://jsonplaceholder.typicode.com/users");

      const users = response.data.map((user: any) => ({
        name: user.name,
        username: user.username,
        email: user.email,
        address: user.address,
        company: user.company.name,
      }));
  
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: users,
      });
    } catch (error: any ) {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: error.message ,
      });
    }
};