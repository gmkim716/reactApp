import React, { createContext, useReducer, useContext } from 'react';
import {
  createAsyncDispatcher,
  createAsyncHandler,
  initialAsyncState
} from './asyncActionUtils';
import * as api from './api'; // api 파일에서 내보낸 모든 함수들을 불러옴

// UsersContext 에서 사용 할 기본 상태
const initialState = {
  users: initialAsyncState,
  user: initialAsyncState
};

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
function usersReducer(state, action) {
  switch (action.type) {

		// users
    case 'GET_USERS':
    case 'GET_USERS_SUCCESS':
    case 'GET_USERS_ERROR':
      return usersHandler(state, action);

		// user
    case 'GET_USER':
    case 'GET_USER_SUCCESS':
    case 'GET_USER_ERROR':
      return userHandler(state, action);

		// other
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);