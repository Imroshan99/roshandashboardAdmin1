import "./Widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';const Widget = ({type}) => {
    // console.log(type,"type")
    let data;
    let amount=1000;
    let diff=25;
        switch (type) {
            case "user":
                        data={
                            title:"USER",
                            isMoney:false,
                            link:"See all users",
                            icon:<AccountCircleIcon className="icon negetive"/>
                        }
                break;
            case "order":
                        data={
                            title:"ORDER",
                            isMoney:false,
                            link:"View all orders",
                            icon: <LocalShippingIcon style={{color:"orange"}}/>
                        }
                        break;

            case "earning":
                        data={
                            title:"EARNING",
                            isMoney:true,
                            link:"See all earnings",
                            icon:<MonetizationOnIcon className="icon positive"/>
                        }
                        break;

            case "balance":
                        data={
                            title:"BALANCE",
                            isMoney:true,
                            link:"Check Balance",
                            icon:<AccountBalanceWalletIcon className="icon"/>
                        }
                        break;

            default:
                break;
        }

    return (
        <div className="widget">
            <div className="left">
                <div className="left-data">
                    <span className="left-user">{data.title}</span>
                    <span className="left-nu">{data.isMoney && "$"} {amount}</span>
                    <span className="left-see">{data.link}</span>
                </div>

            </div>
            <div className="right">
                <div className="right-per positive">
                    <KeyboardArrowUpOutlinedIcon/>
                    {diff}%
                </div>
                <div className="right-icon">
                    {data.icon}
                </div>
            </div>
        </div>
    )
}

export default Widget