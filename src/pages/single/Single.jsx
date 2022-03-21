import Chart from "../../components/chart/Chart"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Tables from "../../components/Table/Tables"
import "./Single.scss"
const Single = () => {
  return (
    <div className="single">
         <div className='home'>
        <Sidebar/>
        <div className="homecontainer">
        <Navbar/>
        
        <div className="chartss">
              <div className="featured">
                  <div className="userdetail">
                    <div className="top-user">
                        <span className="userhead">Information</span>
                        <div className="editbtn"><span className="edit">Edit</span></div>
                    </div>
                    <div className="bottom-user">
                        <div className="imguser">
                          <img src="https://1.bp.blogspot.com/-pCFqdkf3Bao/YDz46yypzJI/AAAAAAAAAnA/X2wcRuGOTnE3NXEIPwjeohQWf_21s0KhgCLcBGAsYHQ/s543/20201007_230238.png" alt="" />

                        </div>
                        <div className="contentuser">
                            <h1>Roshan Tambe</h1>
                            <span>Email:roshan@gmail.com</span>
                            <span>Phone:7507142994</span>
                            <span>Address: Nagpur</span>
                            <span>Country:India</span>
                        </div>
                    </div>
                  </div>
              </div>
            <Chart/>
        </div>
        <div className="listcontainer">
          <div className="listtitle">
            Letest Transections
          </div>
          <Tables/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Single