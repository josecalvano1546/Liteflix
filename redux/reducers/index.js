import { combineReducers } from 'redux';
import filmsReducer from './filmsReducer';
import myFilmsReducer from './myFilmsReducer';
export default combineReducers({
  films: filmsReducer,
  myFilms:myFilmsReducer,
});
