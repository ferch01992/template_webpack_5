import { combineReducers } from 'redux';

import reducerCatalog from './reducers/reducerCatalog';
import reducerUserData from './reducers/reducerUserData';

export default combineReducers({
  catalogos: reducerCatalog,
  user_data: reducerUserData,
});
