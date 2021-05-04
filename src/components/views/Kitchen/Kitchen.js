import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';

// import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


//import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';

const columns = [
  { id: 'table', label: 'Table/remote', minWidth: 170 },
  {
    id: 'order',
    label: 'Order',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(table, order, status) {
  return {table, order, status};
}

const rows = [
  createData('1', 'Ryba z frytkami', 'in progress'),
  createData('2', 'Ryba z frytkami', 'realized'),
  createData('1250', 'Ryba z frytkami', 'in progress'),

];

const Kitchen = () => {
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(3);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };



  return (
    <div className={styles.component}>
      <h2>Kitchen view</h2>

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
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>


    </div>
  );
};

export default Kitchen;

