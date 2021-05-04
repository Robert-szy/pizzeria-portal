import React from 'react';

//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//import PropTypes from 'prop-types';
import styles from './TablesBookingNew.module.scss';

const TablesBookingNew = () => (
  <div className={styles.component}>
    <h2>TablesBookingNew view</h2>
    <Grid container spacing={3}>
      <Grid container xs={6} justify='space-around' alignContent='flex-start'>

        <Grid item container xs={12} justify='space-around' >
          <Button>stolik</Button>
        </Grid>
        <Grid item xs={6}>
          <Button>data</Button>
        </Grid>

        <Grid item xs={6}>
          <Button>godzina</Button>
        </Grid>
      </Grid>


      <Grid container xs={6} justify='space-around' alignContent='flex-start'>

        <Grid item container xs={12} justify='space-around'>
          <Button>ID</Button>
        </Grid>
        <Grid container xs={6} justify='space-around'>
          <Grid item xs={12}>
            <Button>l. osób</Button>
          </Grid><Grid item xs={12}>
            <Button>l. godzin</Button>
          </Grid><Grid item xs={12}>
            <Button>starters</Button>
          </Grid>
        </Grid>

        <Grid container xs={6} justify='space-around'>
          <Grid item xs={12}>
            <Button>phone</Button>
          </Grid>
          <Grid item xs={12}>
            <Button>address</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={12} justify='space-around'>
        <Button>Save</Button>
      </Grid>
    </Grid>

  </div>
);

export default TablesBookingNew;
