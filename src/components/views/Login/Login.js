import React from 'react';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

//import PropTypes from 'prop-types';
import styles from './Login.module.scss';

const Login = () => (
  <div className={styles.component}>
    <h2>Login page</h2>
    <form className={styles.root} noValidate autoComplete="off">
      <Input placeholder="Name" className={styles.input} inputProps={{ 'aria-label': 'description' }} />
      <Input placeholder="Password" className={styles.input} inputProps={{ 'aria-label': 'description' }} />
    </form>
    <Button variant="contained" size="large" color="primary" className={styles.margin}>Login</Button>
  </div>
);

export default Login;
