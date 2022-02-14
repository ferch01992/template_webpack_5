import { CONSTANS_CATALOG } from '../../constants/constansCatalog';
import PropTypes from 'prop-types';
// eslint-disable-next-line sort-imports
import React, { useEffect } from 'react';
import Title from 'Components/title.jsx';
import imageEslint from 'Images/eslint.svg';
import imagePrettier from 'Images/prettier.svg';
import imageReact from 'Images/react.svg';
import imageRedux from 'Images/redux.svg';
import imageSass from 'Images/sass.svg';
import imageWebpack from 'Images/webpack.svg';
// eslint-disable-next-line sort-imports
import { useDispatch, useSelector } from 'react-redux';
import { actionAllCatalogs } from '../../store/actions/actionsCatalogs';
import { actionUserDataFirstLevel } from '../../store/actions/actionsUserData';
import isEmpty from 'lodash/isEmpty';

const Home = React.memo(() => {
  const { catalogos } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(catalogos)) {
      dispatch(actionAllCatalogs(CONSTANS_CATALOG));
    }
  });

  const onChange = event => {
    dispatch(
      actionUserDataFirstLevel(event.target.value, { propKey: event.target.id })
    );
  };

  return (
    <div className="container">
      <div className="container-bac">
        <Title titulo="< F . L . C />" />
      </div>
      <div className="container-bac">
        <img src={imageReact} className="image image-animation" alt="React" />
        <img src={imageRedux} className="image image-animation" alt="Redux" />
        <img src={imageSass} className="image" alt="Sass" />
        <img src={imagePrettier} className="image" alt="Prettier" />
        <img src={imageEslint} className="image image-animation" alt="Eslint" />
        <img
          src={imageWebpack}
          className="image image-animation"
          alt="Webpack"
        />
      </div>
      <div className="container-bac">
        <input
          className="input-html"
          type="text"
          id="name"
          name="name"
          required
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
});

Home.propTypes = {
  titulo: PropTypes.string,
};

Home.displayName = 'Home';

export default Home;
