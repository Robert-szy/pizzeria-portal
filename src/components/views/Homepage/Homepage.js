import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

//import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';



//export default function CenteredGrid() {
const Homepage = () => (


  <div className={styles.component}>
    <h2>Dashboard</h2>
    <div className={styles.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h6" className={styles.title}>
              Local statistics
          </Typography>
          <Paper className={styles.paper}>
            <List className={styles.root}>
              <ListItem>
                <ListItemText primary="Jeden" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Dwa" secondary="Jan 9, 2014" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={styles.title}>
            Remote statistics
          </Typography>
          <Paper className={styles.paper}>
            <List className={styles.root}>
              <ListItem>
                <ListItemText primary="Trzy" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Cztery" secondary="Jan 9, 2014" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={styles.title}>
              Today events
          </Typography>
          <Paper className={styles.paper}>
            <List className={styles.root}>
              <ListItem>
                <ListItemText primary="Pięć" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Sześć" secondary="Jan 9, 2014" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={styles.title}>
              Today reservations
          </Typography>
          <Paper className={styles.paper}>
            <List className={styles.root}>
              <ListItem>
                <ListItemText primary="Siedem" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Osiem" secondary="Jan 9, 2014" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default Homepage;
