import DataTable from "../../components/datatable/DataTable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./List.scss"
const List = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homecontainer">
        <Navbar/>
          <DataTable/>
        </div>
    </div>
  )
}

export default List