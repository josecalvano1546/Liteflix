import {
  FILMS_MAIN_FETCHING,
  FILMS_MAIN_SUCCESS,
  FILMS_MAIN_FAIL,
  FILMS_POPULAR_FETCHING,
  FILMS_POPULAR_SUCCESS,
  FILMS_POPULAR_FAIL,

} from './types';
import axios from 'axios';
// Get mayn film
export const getFilmMain = () => async (dispatch, getState) => {
  const URI =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20';

  dispatch({ type: FILMS_MAIN_FETCHING });
  return await axios
    .get(`${URI}`)
    .then(res => {
      const data = res.data.results;
      dispatch({ type: FILMS_MAIN_SUCCESS, payload: data });
      // console.log('Films-->', getState().films.filmsMain);
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch({ type: FILMS_MAIN_FAIL, payload: err });
    });
};

// Get mayn film
export const getPopularFilms = () => async (dispatch, getState) => {
    const URI =
      'https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20';
  
    dispatch({ type: FILMS_POPULAR_FETCHING });
    return await axios
      .get(`${URI}`)
      .then(res => {
        const data = res.data.results;
        dispatch({ type: FILMS_POPULAR_SUCCESS, payload: data });
       //  console.log('FilmsPopular-->', getState().films.filmsPopular);
      })
      .catch(err => {
        console.log(err.response.data);
        dispatch({ type: FILMS_POPULAR_FAIL, payload: err });
      });
  };
  