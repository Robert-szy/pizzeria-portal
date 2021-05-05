import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


//import PropTypes from 'prop-types';
import styles from './Orders.module.scss';

const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'delivered', order: 345},
  {id: '6', status: 'paid', order: 456},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
          <Button>new order</Button>
        </>
      );
    case 'thinking':
      return (
        <Button>new order</Button>
      );
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button>delivered</Button>
      );
    case 'delivered':
      return (
        <Button>paid</Button>
      );
    case 'paid':
      return (
        <Button>free</Button>
      );
    default:
      return null;
  }
};

const Orders = () => {

  return (
    <div className={styles.component}>
      <h2>Orders view</h2>

      <Grid item xs={12} container justify="space-around" alignItems='center'>
        <Grid item xs={6} container justify="space-around" alignItems='center'>
          <Button className={styles.link} component={Link} variant='outlined' fullWidth='true' to={`${process.env.PUBLIC_URL}/orders/order/new`} activeClassName='active'>New order</Button>
        </Grid>
        <Grid item xs={6} container justify="space-around" alignItems='center'>
          <TextField id="orderId" placeholder="Type order ID" margin="normal"></TextField>
          <Button className={styles.link} component={Link} variant='outlined' to={`${process.env.PUBLIC_URL}/orders/order/:id`} activeClassName='active'>Go!</Button>
        </Grid>
      </Grid>

      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Table</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Order</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
                <TableCell>
                  {row.order && (
                    <Button to={`${process.env.PUBLIC_URL}/orders/order/${row.order}`}>
                      {row.order}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {renderActions(row.status)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Orders;
