import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
//import Header from '../Header/Header';

const MainLayout = ({children}) => (
  <div>
    <PageNav/>
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
