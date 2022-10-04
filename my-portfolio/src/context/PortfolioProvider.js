import React from 'react';
import PropTypes from 'prop-types';
import PortfolioContext from './PortfolioContext';

function PortfolioProvider({ children }) {
  return (
    <PortfolioContext.Provider
      value={ {} }
    >
      {children}
    </PortfolioContext.Provider>
  );
}
  
PortfolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
  
export default PortfolioProvider;
  