import { CONSTANS_USER_DATA_STORE } from '../constants/constansUserData';
import { returnData } from './actionsCommons';

export const actionUserDataFirstLevel = (payload, rest) =>
  returnData(payload, CONSTANS_USER_DATA_STORE.ACTION_USER_DATA_FIRST_LEVEL, {
    rest,
  });
