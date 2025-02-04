import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers/index';

let store;

export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk));

  return store;
}

