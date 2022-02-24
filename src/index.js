import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import React from 'react';
import Routers from './routers/router.jsx';

import { PersistGate } from 'redux-persist/integration/react';

import { render } from 'react-dom';

import configStore from './store/configStore.js';
const { persistor, store } = configStore;

console.log(
  '%c<== F . L . C ==>',
  'color:#FF8A71;font-size:2rem;font-weight:bold;'
);

const APP = document.getElementById('app');

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  APP
);
