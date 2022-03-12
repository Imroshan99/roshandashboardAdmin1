import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Table = () => {
    const rows=[
        {
            id:113444,
            product:"Acer Nitro 5",
            img:"",
            customer:"Roshan Tambe",
            data:"1 March",
            amount:785,
            method:"Cash On Devlivery",
            status:"Approved"
        },
        {
            id:113444,
            product:"Acer Nitro 5",
            img:"",
            customer:"Roshan Tambe",
            data:"1 March",
            amount:785,
            method:"Cash On Devlivery",
            status:"Approved"
        },
        {
            id:113444,
            product:"Acer Nitro 5",
            img:"",
            customer:"Roshan Tambe",
            data:"1 March",
            amount:785,
            method:"Cash On Devlivery",
            status:"Approved"
        },

    ]
  return (
    <TableContainer component={Paper} className="table" >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
                <TableCell className='tableCell'>Tracking Id</TableCell>
                <TableCell className='tableCell'>Product</TableCell><TableCell className='tableCell'>Tracking Id</TableCell><TableCell className='tableCell'>Tracking Id</TableCell><TableCell className='tableCell'>Tracking Id</TableCell>
                <TableCell className='tableCell'>Customer</TableCell><TableCell className='tableCell'>Tracking Id</TableCell><TableCell className='tableCell'>Tracking Id</TableCell><TableCell className='tableCell'>Tracking Id</TableCell>
                <TableCell className='tableCell'>Date</TableCell><TableCell className='tableCell'>Tracking Id</TableCell><TableCell className='tableCell'>Tracking Id</TableCell><TableCell className='tableCell'>Tracking Id</TableCell>
                <TableCell className='tableCell'>Amount</TableCell><TableCell className='tableCell'>Tracking Id</TableCell><TableCell className='tableCell'>Tracking Id</TableCell><TableCell className='tableCell'>Tracking Id</TableCell>
                <TableCell className='tableCell'>Payment Method</TableCell><TableCell className='tableCell'>Tracking Id</TableCell><TableCell className='tableCell'>Tracking Id</TableCell><TableCell className='tableCell'>Tracking Id</TableCell>
                <TableCell className='tableCell'>Status</TableCell><TableCell className='tableCell'>Tracking Id</TableCell><TableCell className='tableCell'>Tracking Id</TableCell><TableCell className='tableCell'>Tracking Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Table