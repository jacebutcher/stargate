import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function PeopleTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Person ID</TableCell>
            <TableCell align="right">Current Rank</TableCell>
            <TableCell align="right">Current Duty Title</TableCell>
            <TableCell align="right">Career Start Date</TableCell>
            <TableCell align="right">Career End Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(rows) && rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.personId}</TableCell>
              <TableCell align="right">{row.currentRank}</TableCell>
              <TableCell align="right">{row.currentDutyTitle}</TableCell>
              <TableCell align="right">{row.careerStartDate}</TableCell>
              <TableCell align="right">{row.careerEndDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
