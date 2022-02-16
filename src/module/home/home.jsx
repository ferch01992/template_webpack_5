import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Title from 'Components/title.jsx';
import imageEslint from 'Images/eslint.svg';
import imagePrettier from 'Images/prettier.svg';
import imageReact from 'Images/react.svg';
import imageRedux from 'Images/redux.svg';
import imageSass from 'Images/sass.svg';
import imageWebpack from 'Images/webpack.svg';
import {
  actionSetLevel1,
  actionSetLevel2,
  actionSetLevel3,
} from '../../store/actions/actionsLevel1';
import { bindActionCreators } from 'redux';

class Home extends Component {
  onClikButton = nameButton => {
    const { actionSetLevel1, actionSetLevel2, actionSetLevel3 } = this.props;
    if (nameButton === 'lavel1') {
      actionSetLevel1('propertyLevel1', 'hola 1');
    } else if (nameButton === 'lavel2') {
      actionSetLevel2('propertyLevel2', 'hola 2');
    } else if (nameButton === 'lavel3') {
      actionSetLevel3('propertyLevel3', 'hola 3');
    } else {
      console.log('Action undefined');
    }
  };

  render() {
    const { level1 } = this.props;
    return (
      <div className="container">
        <div className="container-bac">
          <Title titulo={level1.level2.level3.propertyLevel3} />
        </div>
        <div className="container-bac">
          <img src={imageReact} className="image image-animation" alt="React" />
          <img src={imageRedux} className="image image-animation" alt="Redux" />
          <img src={imageSass} className="image" alt="Sass" />
          <img src={imagePrettier} className="image" alt="Prettier" />
          <img
            src={imageEslint}
            className="image image-animation"
            alt="Eslint"
          />
          <img
            src={imageWebpack}
            className="image image-animation"
            alt="Webpack"
          />
        </div>
        <div className="container-bac">
          <button onClick={() => this.onClikButton('lavel1')}>
            {'Set Action Level 1'}
          </button>
          <button onClick={() => this.onClikButton('lavel2')}>
            {'Set Action Level 2'}
          </button>
          <button onClick={() => this.onClikButton('lavel3')}>
            {'Set Action Level 3'}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  level1: state.level1,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      actionSetLevel1,
      actionSetLevel2,
      actionSetLevel3,
    },
    dispatch
  );

Home.propTypes = {
  actionSetLevel1: PropTypes.func,
  actionSetLevel2: PropTypes.func,
  actionSetLevel3: PropTypes.func,
  level1: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
