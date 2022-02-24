import allReducers from './allReducers';

import { initialState } from './initialState';

import { applyMiddleware, compose, createStore } from 'redux';

import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';

import storageSession from 'redux-persist/lib/storage/session';

import { WHITE_LIST } from 'StoreConstans/constantWhiteList';

const persistConfig = {
  key: 'template-webpack-5',
  storage: storageSession,
  version: 0,
  whitelist: WHITE_LIST,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const middleWareGeneral = store => next => action => next(action);

const ejemploCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  initialState,
  ejemploCompose(applyMiddleware(thunk, middleWareGeneral))
);

const persistor = persistStore(store);

export default { persistor, store };
