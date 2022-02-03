import PropTypes from 'prop-types';
import React from 'react';

const Title = React.memo(({ titulo }) => (
  <h1 className="gradient__text "> {titulo} </h1>
));

Title.propTypes = {
  titulo: PropTypes.string,
};

Title.displayName = 'Title';

export default Title;
