import React,{useEffect} from 'react';
import {connect} from 'react-redux';


import {fetchDataChart} from './redux/DataChart/DataChartActions'


 function Test({dataChartRedux,fetchDataChart}:any) {

    useEffect(() => {
        
        fetchDataChart()
        
        
    },[])

    // console.log(dataChartRedux);
    
    
    


  return <div></div>;
}

const mapStateToProps = (state:any) =>{
    return {
        dataChartRedux:state.dataChart
    }
}




const mapDispatchToProps = (dispatch:any) =>{
    return {
        fetchDataChart: ()=>  dispatch(fetchDataChart()),
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Test)
