import { combineReducers } from 'redux';

import reducerLevel1 from 'StoreReducers/reducerLevel1';

const allReducers = combineReducers({
  level1: reducerLevel1,
});

export default allReducers;
