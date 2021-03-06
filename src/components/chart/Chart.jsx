import "./Chart.scss"
import { AreaChart, Area, XAxis,  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const data = [
    {name:"January",Total:1200},
    {name:"February",Total:2100},
    {name:"March",Total:500},
    {name:"April",Total:2000},
    {name:"May",Total:1999},
    {name:"June",Total:1800}
  ];
  return (
    <div className='chart'>
      <div className="title">
        <h1 className="title6month">Last 6 Months Revenue</h1> </div>
        <ResponsiveContainer width="100%" height="90.5%">
        <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    
  </defs>
  <XAxis dataKey="name" />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  
</AreaChart>

      </ResponsiveContainer>
    </div>
  )
}

export default Chart