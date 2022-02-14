import { CONST_CATALOG_STORE } from '../constants/constansCatalog';

export const actionAllCatalogs = payload => ({
  payload,
  type: CONST_CATALOG_STORE.ACTION_ALL_CATALOG,
});
