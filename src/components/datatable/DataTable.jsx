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
      <th scope="col">Phone</th>
      <th scope="col">Status</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Smita</td>
      <td>smita@gamil.com</td>
      <td>92245674</td>
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
      <td>75045821</td>
      <td className="status Approved">
          Approved
      </td>
      <td>
      <Link to="/users/test" style={{textDecoration:"none", color:"black"}}>
          <Button variant="outlined">View</Button>
      </Link>
          <Button variant="outlined">Delete</Button>
      </td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Saurabh</td>
      <td>saurabh@gmail</td>
      <td>99226534</td>
      <td className="status Pending">
             Pending
      </td>
      <td>
      <Link to="/users/test" style={{textDecoration:"none", color:"black"}}>
          <Button  variant="outlined">View</Button>
      </Link>
          <Button variant="outlined">Delete</Button>
      </td>

    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Rohan</td>
      <td>rohan@gmail</td>
      <td>69877458</td>
      <td className="status Rejected">
             Rejected
      </td>
      <td>
      <Link to="/users/test" style={{textDecoration:"none", color:"black"}}>
          <Button  variant="outlined">View</Button>
      </Link>
          <Button variant="outlined">Delete</Button>
      </td>
      

    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Kapil</td>
      <td>kapil@gmail</td>
      <td>9834130</td>
      <td style={{color:"green"}} className="status Approved">
             Approved
      </td>
      <td>
      <Link to="/users/test" style={{textDecoration:"none", color:"black"}}>
          <Button  variant="outlined">View</Button>
      </Link>
          <Button variant="outlined">Delete</Button>
      </td>

    </tr>
  </tbody>
</table>
    </div>
  )
}

export default DataTable