import React	 from 'react';
import PropTypes from 'prop-types';

const Ejemplo = React.memo( ( { titulo } ) => (
	<h1> { titulo } </h1>
) );

Ejemplo.propTypes = {
	titulo: PropTypes.string,
};

Ejemplo.displayName = 'Ejemplo';

export  default ( Ejemplo );
