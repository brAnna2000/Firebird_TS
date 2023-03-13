export interface User {
  name: string;
  username: string;
  email: string;
  address: { street: string; suite: string; city: string };
  company: { name: string };
}
  
export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}
  
export interface User {
  name: string;
  username: string;
  email: string;
  address: { street: string; suite: string; city: string };
  company: { name: string };
}
  
export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
  
export interface FetchUsersRequestAction {
  type: typeof GET_USERS_REQUEST;
}
  
export interface FetchUsersSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  payload: User[];
}
  
export interface FetchUsersFailureAction {
  type: typeof GET_USERS_FAILURE;
  payload: string;
}
  
export type UserActionTypes =
    | FetchUsersRequestAction
    | FetchUsersSuccessAction
    | FetchUsersFailureAction;