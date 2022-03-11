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
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">
                RoshanAdmin
            </span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <AccountCircleIcon className="icon"/>
                    <span>Users</span>
                </li> 
                <li>
                    <ProductionQuantityLimitsIcon className="icon"/>
                    <span>Product</span>
                </li> 
                <li>
                    <AddBusinessIcon className="icon"/>
                    <span>Orders</span>
                </li> 
                <li>
                    <LocalShippingIcon className="icon"/>
                    <span>Delivery</span>
                </li> 
                <p className="title">USEFUL</p>

                <li>
                    <QueryStatsIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationAddIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICES</p>
                <li>
                    <LocalHospitalIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Setting</span>
                </li>
                <p className="title">USER</p>

                <li>
                    <AssignmentIndIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
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