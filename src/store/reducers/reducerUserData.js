import { CONSTANS_USER_DATA_STORE } from '../constants/constansUserData';
import { reducerFirstLevel } from './reducerCommons';

export default (state = {}, action = {}) => {
  if (!state) {
    return null;
  }

  let newState = state;
  const { type, payload, rest } = action;

  if (type === CONSTANS_USER_DATA_STORE.ACTION_USER_DATA_FIRST_LEVEL) {
    newState = reducerFirstLevel(state, payload, rest);
  }

  return newState;
};
