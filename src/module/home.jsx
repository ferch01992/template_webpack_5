import PropTypes from 'prop-types';
import React from 'react';
import Title from 'Components/title.jsx';
import imageEslint from 'Images/eslint.svg';
import imagePrettier from 'Images/prettier.svg';
import imageReact from 'Images/react.svg';
import imageRedux from 'Images/redux.svg';
import imageWebpack from 'Images/webpack.svg';

const Home = React.memo(() => (
  <div className="container">
    <div className="container-bac">
      <Title titulo="< F . L . C />" />
    </div>
    <div className="container-bac">
      <img src={imageReact} className="image image-animation" alt="  React" />
      <img src={imageRedux} className="image image-animation" alt="Redux" />
      <img src={imagePrettier} className="image" alt="Prettier" />
      <img src={imageWebpack} className="image image-animation" alt="Webpack" />
      <img src={imageEslint} className="image image-animation" alt="Eslint" />
    </div>
  </div>
));

Home.propTypes = {
  titulo: PropTypes.string,
};

Home.displayName = 'Home';

export default Home;
