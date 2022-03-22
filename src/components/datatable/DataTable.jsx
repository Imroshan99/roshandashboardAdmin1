import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from "react-router-dom";

const DataTable = () => {
  return (
    <div className='datatable'>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">User</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Status</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Roshan</td>
      <td>roshan@gamil.com</td>
      <td>22</td>
      <td className="status Pending">
          Pending
      </td>
      <td>
      <Link to="/users/test" style={{textDecoration:"none", color:"black"}}>
          <Button variant="outlined">View</Button>
      </Link>
          <Button variant="outlined">Delete</Button>
      </td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>jayshree</td>
      <td>jayshree@gmail</td>
      <td>21</td>
      <td className="status Approved">
          Approved
      </td>
      <td>
          <Button variant="outlined">View</Button>
          <Button variant="outlined">Delete</Button>
      </td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Shyam</td>
      <td>shyam@gmail</td>
      <td>25</td>
      <td className="status Rejected">
             Rejected
      </td>
      <td>
          <Button  variant="outlined">View</Button>
          <Button variant="outlined">Delete</Button>
      </td>

    </tr>
  </tbody>
</table>
    </div>
  )
}

export default DataTable