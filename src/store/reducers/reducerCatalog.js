import { CONST_CATALOG_STORE } from '../constants/constansCatalog';
import { reducerGeneraFisrtLevel } from './reducerCommons';

export default (state = {}, action = {}) => {
  if (!state) {
    return null;
  }

  let newState = state;
  const { type, payload } = action;

  if (type === CONST_CATALOG_STORE.ACTION_ALL_CATALOG) {
    newState = reducerGeneraFisrtLevel(state, payload);
  }

  return newState;
};
