import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';

const initialState = {};

const Store = createStore(rootReducers, initialState, applyMiddleware(thunk));

export default Store;
