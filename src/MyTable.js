import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: any) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));
  
  var parkData = [];
  
  function onSelect(description) {
      console.log('testing on select', description);
  }
  
  export default function SimpleTable(data) { 
  const classes = useStyles();
  parkData = data.data;
  console.log('PARK DATA', parkData);
  if (typeof parkData === "undefined") {
    return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Park Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Designation</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </Paper>
    );
  }
  else {
    //Goes through and adds the data to the table
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Park Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Designation</TableCell>
          </TableRow>
        </TableHead>
        
        
        <TableBody>
          {parkData.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.states}</TableCell>
              <TableCell>{row.parkCode}</TableCell>
              <TableCell>{row.designation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
  }
}