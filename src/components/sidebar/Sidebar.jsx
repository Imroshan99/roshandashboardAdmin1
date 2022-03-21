import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">
                RoshanAdmin
            </span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p> 
                <Link to="/" style={{textDecoration:"none", color:"rgb(124, 82, 165)"}}>
                <li>
                <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>  
                 </Link>

                <p className="title">LISTS</p>
                <li>
                <Link to="/users" style={{textDecoration:"none", color:"rgb(124, 82, 165)"}}>
                    <AccountCircleIcon className="icon"/>
                    <span>Users</span>
                </Link>
                </li> 
                <li>
                <Link to="/product" style={{textDecoration:"none", color:"rgb(124, 82, 165)"}}>
                    <ProductionQuantityLimitsIcon className="icon"/>
                    <span>Product</span>
                </Link>
                </li> 
                <li>
                    <AddBusinessIcon className="icon"/>
                    <span style={{color:"rgb(124, 82, 165)"}}>Orders</span>
                </li> 
                <li>
                    <LocalShippingIcon className="icon"/>
                    <span style={{color:"rgb(124, 82, 165)"}}>Delivery</span>
                </li> 
                <p className="title">USEFUL</p>

                <li>
                    <QueryStatsIcon className="icon"/>
                    <span style={{color:"rgb(124, 82, 165)"}}>Stats</span>
                </li>
                <li>
                    <NotificationAddIcon className="icon"/>
                    <span style={{color:"rgb(124, 82, 165)"}}>Notifications</span>
                </li>
                <p className="title">SERVICES</p>
                <li>
                    <LocalHospitalIcon className="icon"/>
                    <span style={{color:"rgb(124, 82, 165)"}}>System Health</span>
                </li>
                <li>
                    <PsychologyIcon className="icon"/>
                    <span style={{color:"rgb(124, 82, 165)"}}>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                    <span style={{color:"rgb(124, 82, 165)"}}>Setting</span>
                </li>
                <p className="title">USER</p>

                <li>
                    <AssignmentIndIcon className="icon"/>
                    <span style={{color:"rgb(124, 82, 165)"}}>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span style={{color:"rgb(124, 82, 165)"}}>Logout</span>
                </li>
            </ul>
            
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar