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
import styles from './Orders.module.scss';

const columns = [
  { id: 'table', label: 'Table', minWidth: 170 },
  {
    id: 'status',
    label: 'Order status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'lastActivity',
    label: 'Last activity',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'orderTime',
    label: 'Order time',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(table, status, lastActivity, orderTime, action) {
  return {table, status, lastActivity, orderTime, action};
}

const rows = [
  createData('Table 1', 'in progress', '12:00', '11:00', 'akcje?'),
  createData('Table 2', 'in progress', '12:00', '11:00', 'akcje?'),
  createData('Table 3', 'in progress', '12:00', '11:00', 'akcje?'),

];

const Orders = () => {
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(3);
  return (
    <div className={styles.component}>
      <h2>Orders view</h2>

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
          <Button className={styles.link} component={Link} variant='outlined' fullWidth='true' to={`${process.env.PUBLIC_URL}/orders/order/new`} activeClassName='active'>New order</Button>
        </Grid>
        <Grid item xs={6} container justify="space-around" alignItems='center'>
          <TextField id="orderId" placeholder="Type order ID" margin="normal"></TextField>
          <Button className={styles.link} component={Link} variant='outlined' to={`${process.env.PUBLIC_URL}/orders/order/:id`} activeClassName='active'>Go!</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Orders;
