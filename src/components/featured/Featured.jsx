import "./Featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
        </div>
    </div>
  )
}

export default Featured