import React from 'react';
import PropTypes from 'prop-types';

let hola = 'Hola';
     const Title = React.memo(({ titulo }) => (
  			<h1 className="gradient-tex"> {titulo} </h1>
));

Title.propTypes = {
			  titulo: PropTypes.string,
  aaaa: PropTypes.string,
};

Title.displayName = 'Title';

export default Title;
