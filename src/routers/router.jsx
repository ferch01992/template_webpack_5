import { Route, Routes } from 'react-router-dom';
import Container from './../containers/containerGeneral.jsx';
import Home from './../module/home/home.jsx';

import PropTypes from 'prop-types';
import React from 'react';

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Container>
            <Home />
          </Container>
        }
      />
    </Routes>
  );
};

Routers.propTypes = {
  navigation: PropTypes.object,
};
Routers.displayName = 'Router';

export default Routers;
