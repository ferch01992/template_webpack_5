import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import Router from './routers/router.jsx';
import { render } from 'react-dom';
console.log(
  '%c<== F . L . C ==>',
  'color:#FF8A71;font-size:2rem;font-weight:bold;'
);

const APP = document.getElementById('app');

render(<Router history={BrowserRouter} />, APP);
