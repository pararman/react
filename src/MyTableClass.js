import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class MyTableClass extends React.Component {
    state = {
        parkData: [];
        row: [];
    }

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
            <TableCell>Designation</TableCell>
            <TableCell>Select</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </Paper>
    );
  }
  else {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Park Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Select</TableCell>
          </TableRow>
        </TableHead>
        
        
        <TableBody>
          {parkData.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.states}</TableCell>
              <TableCell>{row.designation}</TableCell>
              <TableCell>
                <button onClick={onSelect(row.description)}>Details</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
  }
}
}