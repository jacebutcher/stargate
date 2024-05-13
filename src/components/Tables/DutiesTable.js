import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DutiesTable({ rows }) { 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Duty ID</TableCell>
            <TableCell align="right">Rank</TableCell>
            <TableCell align="right">Duty Title</TableCell>
            <TableCell align="right">Duty Start Date</TableCell>
            <TableCell align="right">Duty End Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.rank}</TableCell>
              <TableCell align="right">{row.dutyTitle}</TableCell>
              <TableCell align="right">{row.dutyStartDate}</TableCell>
              <TableCell align="right">{row.dutyEndDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}