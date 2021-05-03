import React from 'react';
import { Link } from 'react-router-dom';

//import PropTypes from 'prop-types';

import styles from './Orders.module.scss';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Orders view</h2>
    <Link to={`${process.env.PUBLIC_URL}/orders/order/new`} activeClassName='active'>New order</Link>
    <Link to={`${process.env.PUBLIC_URL}/orders/order/:id`} activeClassName='active'>Order id</Link>
  </div>
);

export default Waiter;
