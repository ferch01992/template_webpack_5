import React from 'react';
import ReactDom from 'react-dom';
import Ejemplo from './ejemplo.jsx';
let example = '!21212';
ReactDom.render(
  <Ejemplo titulo="Hola Ejemplo" />,
  document.getElementById('app')
);
