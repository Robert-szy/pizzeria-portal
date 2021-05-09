import React from 'react';

//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//import PropTypes from 'prop-types';
import styles from './WaiterOrderId.module.scss';

const WaiterOrderId = () => (
  <div className={styles.component}>
    <h2>WaiterOrderId view</h2>
    <Grid container spacing={3}>
      <Grid container xs={6} justify='space-around' alignContent='flex-start'>
        <Grid item container xs={12} justify='space-around' >
          <Button>stolik</Button>
        </Grid>

        <Button>menu</Button>
        <Grid item xs={3}>
          <Button>opcje</Button>
        </Grid>

      </Grid>


      <Grid container xs={6} justify='space-around' alignContent='flex-end'>

        <Grid container xs={6} justify='space-around'>
          <Grid item xs={6}>
            <Button>Zamówienie</Button>
            <Button>cena</Button>
          </Grid><Grid item xs={6}>
            <Button>Kwota do zapłaty</Button>
          </Grid>
        </Grid>

      </Grid>
      <Grid container xs={12} justify='space-around'>
        <Button>Save</Button>
      </Grid>
    </Grid>

  </div>
);

export default WaiterOrderId;
