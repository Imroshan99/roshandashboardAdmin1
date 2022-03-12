import "./Navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="input-box">
      <input placeholder="Search..." type="text"  />
      <SearchIcon className="search-icon"/>
      </div>
      <div className="right-navbar">
        <div className="lang">
          <LanguageIcon className="icon"/>
          Englishs
        </div>
        <div className="mode">
          <NightsStayOutlinedIcon className="icon"/>
        </div>
        <div className="notfi">
          <NotificationsActiveOutlinedIcon className="icon"/>
          <div className="notify-icon">1</div>
        </div>
        <div className="chat-icon">
          <ChatOutlinedIcon className="icon"/>
          <div className="notify-icon">3</div>

        </div>
        <div className="menu-icon">
          <ListOutlinedIcon className="icon"/>
        </div>
        <div className="profile-icon">
        <AssignmentIndOutlinedIcon className="icon"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar