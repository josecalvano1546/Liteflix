import {
  MYFILMS_ADD_FETCHING,
  MYFILMS_ADD_SUCCESS,
  MYFILMS_GET_FETCHING,
  MYFILMS_GET_SUCCESS,
} from './types';

import { getData, storeData } from '../../utils/Storage';

export const myFilmsAdd = (film, title) => async (dispatch, getState) => {
  // New object
  const newFilm = {
    film,
    title,
  };
  const myFilms = []; // init array of films
  dispatch({ type: MYFILMS_ADD_FETCHING });
  const myFilmsCurrent = await getData('@myFilms');
  if (myFilmsCurrent === null) {
    // Add first film
    myFilms.push(newFilm);
    await storeData('@myFilms', myFilms);
    dispatch({
      type: MYFILMS_ADD_SUCCESS,
      payload: {
        myFilmsCurrent,
      },
    });
  } else {
    // add more films
    myFilmsCurrent.push(newFilm);
    await storeData('@myFilms', myFilmsCurrent);
    dispatch({
      type: MYFILMS_ADD_SUCCESS,
      payload: myFilmsCurrent,
    });
  }
  // console.log('My new film storage ->', getState().myFilms.myFilmsAdd);
};

export const myFilmsGet = () => async (dispatch, getState) => {
  dispatch({ type: MYFILMS_GET_FETCHING });
  const myFilmsCurrent = await getData('@myFilms');
  if (myFilmsCurrent === null) {
    dispatch({
      type: MYFILMS_GET_SUCCESS,
      payload: [],
    });
  } else {
    dispatch({
      type: MYFILMS_GET_SUCCESS,
      payload: myFilmsCurrent,
    });
  }
  // console.log('My films storage ->', getState().myFilms.myFilmsGet)
};
