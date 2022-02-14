import combineReducer from './combineReducer';

import { createStore } from 'redux';

const store = createStore(
  combineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
