import { combineReducers } from 'redux';

import reducerLevel1 from 'Reducers/reducerLevel1';
import reducerPruebaP from 'Reducers/reducerPruebaP';

const allReducers = combineReducers({
  level1: reducerLevel1,
  pruebaPersistencia: reducerPruebaP,
});

export default allReducers;
