import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'>Booking id</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New events</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'>Event id</Link>

  </div>
);

export default Tables;
