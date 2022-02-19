import {
    MYFILMS_ADD_FETCHING,
    MYFILMS_ADD_SUCCESS,
    MYFILMS_ADD_FAIL,
    MYFILMS_GET_FETCHING,
    MYFILMS_GET_SUCCESS,
    MYFILMS_GET_FAIL,
  } from '../actions/types';
  
  const initialState = {
    loading: false,
    error: null,
    myFilmsAdd: null,
    myFilmsGet: null,
  };
  export default function myFilmsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case MYFILMS_ADD_FETCHING:
      case MYFILMS_GET_FETCHING:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case MYFILMS_ADD_SUCCESS:
        return {
          ...state,
          loading: false,
          myFilmsAdd: payload,
        };
      case MYFILMS_GET_SUCCESS:
        return {
          ...state,
          loading: false,
          myFilmsGet: payload,
        };
      case MYFILMS_ADD_FAIL:
      case MYFILMS_GET_FAIL:
        return {
          ...state,
          loading: false,
          error: payload,
        };
      default:
        return state;
    }
  }
  