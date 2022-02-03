import Home from 'Module/home.jsx';
import React from 'react';
import ReactDom from 'react-dom';

console.log(
  '%c<== F . L . C ==>',
  'color:#FF8A71;font-size:2rem;font-weight:bold;'
);

ReactDom.render(<Home />, document.getElementById('app'));
