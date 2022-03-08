import {useState,useEffect} from 'react'
import './Chart.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {connect} from 'react-redux';



import {fetchDataChart} from '../../redux/DatAlta/DataAltaActions'




 function Chart({dataChartRedux,fetchDataChart}:any) {


    
  useEffect(() => {
        
    fetchDataChart()
    


},[])






 

  

 
  const data = dataChartRedux.dataChart.sort((a:any, b:any) => {
    return a.name - b.name;
});

  

  

  const dataweek = dataChartRedux.dataWeek.sort((a:any, b:any) => {
    return a.name - b.name;
});


  const datamonth = dataChartRedux.dataMonth.sort((a:any, b:any) => {
    return a.name - b.name;
});

  
  


  const [dataChart,setDataChart] = useState(data)

    const options = [
        'Ngày', 'Tuần', 'Tháng'
      ];

      const handleDropdownValue = (e:any)=>{
            
           if(e.value === 'Ngày'){
             setDataChart(data)

           }else if(e.value === 'Tuần'){
              setDataChart(dataweek)
           }else if(e.value === 'Tháng'){
             setDataChart(datamonth)
           }
            
      }
      const defaultOption = options[0];

     
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

            <ResponsiveContainer width="100%" aspect={ 8.5/2.5}>
                <AreaChart
                width={500}
                height={400}
                data={dataChart}
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


const mapStateToProps = (state:any) =>{
  return {
    dataChartRedux:state.dataAlta

   
      
      
      
  }
}




const mapDispatchToProps = (dispatch:any) =>{
  return {
    fetchDataChart: ()=>  dispatch(fetchDataChart()),
    
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(Chart)

