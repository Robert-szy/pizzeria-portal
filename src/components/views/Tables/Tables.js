import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const columns = [
  { id: 'time', label: 'Time', minWidth: 170 },
  {
    id: 'table1',
    label: 'Table 1',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'table2',
    label: 'Table 2',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'table3',
    label: 'Table 3',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(time, table1, table2, table3) {
  return {time, table1, table2, table3};
}

const rows = [
  createData('12:00', 'IN', 1324171354, 3287263),
  createData('12:30', 'CN', 1403500365, 9596961),
  createData('13:00', 'IT', 60483973, 301340),
  createData('13:30', 'US', 327167434, 9833520),
  createData('14:00', 'CA', 37602103, 9984670),
  createData('14:30', 'AU', 25475400, 7692024),
  createData('15:30', 'DE', 83019200, 357578),
  createData('15:30', 'IE', 4857000, 70273),
  createData('16:00', 'MX', 126577691, 1972550),
  createData('16:30', 'JP', 126317000, 377973),
  createData('17:00', 'FR', 67022000, 640679),
  createData('17:30', 'GB', 67545757, 242495),
  createData('18:00', 'RU', 146793744, 17098246),
  createData('18:30', 'NG', 200962417, 923768),
  createData('19:00', 'BR', 210147125, 8515767),
  createData('19:30', 'BR', 210147125, 8515767),
  createData('20:00', 'BR', 210147125, 8515767),
  createData('20:30', 'BR', 210147125, 8515767),
  createData('21:00', 'BR', 210147125, 8515767),
  createData('21:30', 'BR', 210147125, 8515767),
  createData('22:00', 'BR', 210147125, 8515767),
  createData('22:30', 'BR', 210147125, 8515767),
  createData('23:00', 'BR', 210147125, 8515767),
  createData('23:30', 'BR', 210147125, 8515767),

];

const Tables = () => {
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(25);

  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Grid container justify="space-around">
        <form className={styles.container} noValidate>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue="2017-05-24"
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="Time"
            type="time"
            defaultValue="12:00"
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Grid>

      <Paper className={styles.root}>
        <TableContainer className={styles.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Grid item xs={12} container justify="space-around" alignItems='center'>
        <Grid item xs={6} container justify="space-around" alignItems='center'>
          <Button className={styles.link} component={Link} variant='outlined' fullWidth='true' to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New booking</Button>
        </Grid>
        <Grid item xs={6} container justify="space-around" alignItems='center'>
          <TextField id="bookingId" placeholder="Type booking ID" margin="normal"></TextField>
          <Button className={styles.link} component={Link} variant='outlined' to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'>Go!</Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container justify="space-around" alignItems='center'>
        <Grid item xs={6} container justify="space-around" alignItems='center'>
          <Button className={styles.link} component={Link} variant='outlined' fullWidth='true' to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>New event</Button>
        </Grid>
        <Grid item xs={6} container justify="space-around" alignItems='center'>
          <TextField id="eventId" placeholder="Type event ID" margin="normal"></TextField>
          <Button className={styles.link} component={Link} variant='outlined' to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'>Go!</Button>
        </Grid>
      </Grid>

    </div>
  );
};

export default Tables;
