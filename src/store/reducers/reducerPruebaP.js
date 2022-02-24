import { ACTION_PRUEBA_PERSIS } from 'StoreConstans/constanStore';

export default (state = {}, action = {}) => {
  if (!state) {
    return null;
  }

  let newState = state;
  const { type, payload } = action;

  if (type === ACTION_PRUEBA_PERSIS.SET_ACTION_PRUEBA_PERSIS) {
    newState = payload;
  }

  return newState;
};
