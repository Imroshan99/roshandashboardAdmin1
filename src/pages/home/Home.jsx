import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widgets/Widget';
import Navbar from "../../components/navbar/Navbar";
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homecontainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
            <Featured/>
            <Chart/>
        </div>
        <div className="listcontainer">
          <div className="listtitle">
            list container
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home