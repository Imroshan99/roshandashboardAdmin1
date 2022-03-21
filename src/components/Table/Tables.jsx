import * as React from 'react';
import "./Tables.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables = () => {
    const rows=[
        {
            id:1134464,
            product:"Redmi note 11t 5g",
            img:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled87.jpg",
            customer:"Roshan Tambe",
            date:"15 March",
            amount:"18,999",
            method:"Cash On Devlivery",
            status:"Pending"
        },
        {
            id:5454782,
            product:"Dell Laptop",
            img:"https://5.imimg.com/data5/EL/GI/MY-53288271/dell-laptop-500x500.jpg",
            customer:"Shrutika Narad",
            date:"15 March",
            amount:"52,199",
            method:"Online Payment",
            status:"Approved"
        },
        {
            id:7058608,
            product:"Back Cover",
            img:"https://m.media-amazon.com/images/I/61sFL3mYDPL._SY450_.jpg",
            customer:"Sakshi Wankhede",
            date:"15 March",
            amount:875,
            method:"Online",
            status:"Rejected"
        },

    ]
  return (
    <TableContainer component={Paper} className="table" >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
                <TableCell className='tableCell'>Tracking Id</TableCell>
                <TableCell className='tableCell'>Product</TableCell><TableCell className='tableCell'>Customer</TableCell><TableCell className='tableCell'>Date</TableCell><TableCell className='tableCell'>Amount</TableCell>
                <TableCell className='tableCell'>Payment Method</TableCell><TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className='tableCells'>
                {row.id}
              </TableCell>
              <TableCell className='tableCells'>
                  <div className="wrapper">
                    <img src={row.img} alt="imgg" className="image" />{row.product}
                  </div>
                </TableCell>
              <TableCell className='tableCells'>{row.customer}</TableCell>
              <TableCell className='tableCells'>{row.date}</TableCell>
              <TableCell className='tableCells'>₹{row.amount}</TableCell>
              <TableCell className='tableCells'>{row.method}</TableCell>
              <TableCell className='tableCells'>
                <span className={`status ${row.status}`}>
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tables;