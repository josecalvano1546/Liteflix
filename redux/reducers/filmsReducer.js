import {
  FILMS_MAIN_FETCHING,
  FILMS_MAIN_SUCCESS,
  FILMS_MAIN_FAIL,
  FILMS_POPULAR_FETCHING,
  FILMS_POPULAR_SUCCESS,
  FILMS_POPULAR_FAIL,
} from '../actions/types';

const initialState = {
  loading: false,
  filmsMain: null,
  error: null,
  filmsPopular: null,
};
export default function filmsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FILMS_MAIN_FETCHING:
    case FILMS_POPULAR_FETCHING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FILMS_MAIN_SUCCESS:
      return {
        ...state,
        loading: false,
        filmsMain: payload,
      };
    case FILMS_POPULAR_SUCCESS:
      return {
        ...state,
        loading: false,
        filmsPopular: payload,
      };
    case FILMS_MAIN_FAIL:
    case FILMS_POPULAR_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
