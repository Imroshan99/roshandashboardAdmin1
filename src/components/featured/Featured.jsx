import "./Featured.scss";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon style={{color:"gray",cursor:"pointer"}}/>
        </div>
        <div className="bottom"  >
                <div className="bar" >
                        <CircularProgressbar value="70" text="70%" />
                </div>
                <div className="text">
                        <p className="texts">Total sales made today
                        </p>
                        <p className="texts" style={{fontWeight:"bold"}} >$420
                        </p>
                        <p className="texts">Priviour transection processing. Last payment may not be included
                        </p>
                </div>
                <div className="target">
                        <div className="target1">
                                <span>Target</span>
                                <span  className="targetcol positive">
                                        <KeyboardArrowDownOutlinedIcon/>9.21k
                                </span>
                        </div>
                        <div className="target1">
                                <span>Last Week</span>
                                <span className="targetcol negetive">
                                <KeyboardArrowDownOutlinedIcon/>12.5k
                                </span>
                        </div>
                        <div className="target1">
                                <span>Last Month</span>
                                <span className="targetcol positive">
                                <KeyboardArrowDownOutlinedIcon/>$12.6k
                                </span>
                        </div>

                </div>
        </div>
    </div>
  )
}

export default Featured