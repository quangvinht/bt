import React from 'react'
import './Chart.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart() {

    const options = [
        'Ngày', 'Tuần', 'Tháng'
      ];

      const handleDropdownValue = (e)=>{
            console.log(e.value);
      }
      const defaultOption = options[0];

      const data = [
        {
          name: '1',
          value:2700,
        
        },
        {
          name: '13',
          value: 3500,
          
        },
        {
          name: '7',
          value: 5800,
          
        },
        {
          name: '19',
          value: 4221,
         
        },
        {
          name: '31',
          value: 3980,
         
        },
        
      ];


    return (
        <div className="chart">
            <div className="chartItemFirst">
                <div className="chartItemFirstTitle">
                    <span className="ChartTitle">
                         Bảng thống kê theo tháng
                    </span>
                    <span className="ChartTItleDate">
                        Tháng 11/2021
                    </span>
                </div>

                <div className="chartItemDropdown">
                    <span className="chartDropdownTitle">
                            Xem theo
                    </span>
                    <Dropdown options={options} 
                        className='chartDropdown'
                        onChange={(e)=>handleDropdownValue(e)} 
                        value={defaultOption} placeholder="Select an option" />
                 </div>
                    
            </div>

          <div className="chartItemChart">

            <ResponsiveContainer width="100%" aspect={ 4 / 1}>
                <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#CEDDFF" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#CEDDFF" stopOpacity={0}/>
                    </linearGradient>
                 </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="url(#colorUv)" />
                </AreaChart>
        </ResponsiveContainer>




          </div>
            
        </div>
    )
}
