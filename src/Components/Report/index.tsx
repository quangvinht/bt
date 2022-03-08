
import './Report.css'
import BellandUser from '../BellandUser'
import searchlogo from '../../style/img/search.svg'
import {Link} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import Vector from '../../style/img/Vector.svg'
import addSquare from '../../style/img/add-square.svg'
import Checkbox from '../../style/img/Checkbox.svg'
import ChosePage from '../ChosePage'

import SaveSquare from '../../style/img/Save.svg'

import {connect} from 'react-redux';

import prevArrow from '../../style/img/prevArrow.svg'
import nextArrow from '../../style/img/nextArrow.svg'
import ReactPaginate from 'react-paginate';

import {fetchDataChart} from '../../redux/DatAlta/DataAltaActions'





 function Report({dataTableRedux,fetchDataChart}:any) {


    useEffect(() => {
        
        fetchDataChart()
        
    
    
    },[])

    


 
    const ServiceWaitPoint = ()=>{
    return (
            <><span className="WaitPoint"></span><span>Đang chờ</span></>
    )
}  


    const ServiceUsedPoint = ()=>{
return (
        <><span className="UsedPoint"></span><span>Bỏ qua</span></>
)
}  


    const ServiceUnactivePoint = ()=>{
      return (  <><span className="UnActivePoint"></span><span>Đã sử dụng</span></>
      
      ) 
}
const data1 = [

    {
        stt: '2010001',
        
        service:'Khám tim mạch',
        time1:'14:35 - 07/11/2021',
       
        state: <ServiceWaitPoint />,
        stateFilter:'Đang chờ',
        source:'Kiosk'
    },
    {
        stt: '2010002',
        
        service:'Răng hàm mặt',
        time1:'14:35 - 07/11/2021',
       
        state: <ServiceUsedPoint />,
        stateFilter:'Đã sử dụng',
        source:'Hệ thống'
 },
 {
    stt: '2010003',
    
    service:'Khám sản - phụ khoa',
    time1:'14:35 - 07/11/2021',
   
    state: <ServiceUnactivePoint />,
    stateFilter:'Bỏ qua',
    source:'Kiosk'
},
 {
    stt: '2010004',
    
    service:'Răng hàm mặt',
    time1:'14:35 - 07/11/2021',
   
    state: <ServiceWaitPoint />,
    stateFilter:'Đang chờ',
    source:'Hệ thống'
 },
 {
    stt: '2010005',
    
    service:'Tai mũi họng',
    time1:'14:35 - 07/11/2021',
   
    state: <ServiceWaitPoint />,
    stateFilter:'Đang chờ',
    source:'Kiosk'
 },
 {
    stt: '2010006',
    
    service:'Khám tổng quát',
    time1:'14:35 - 07/11/2021',
   
    state: <ServiceUnactivePoint />,
    stateFilter:'Bỏ qua',
    source:'Hệ thống'
 },
 {
    stt: '2010007',
    
    service:'Khám hô hấp',
    time1:'14:35 - 07/11/2021',
   
    state: <ServiceWaitPoint />,
    stateFilter:'Đang chờ',
    source:'Kiosk'
 },
 {
    stt: '2010008',
    
    service:'Khám hô hấp',
    time1:'14:35 - 07/11/2021',
   
    state: <ServiceUsedPoint />,
    stateFilter:'Đã sử dụng',
    source:'Hệ thống'
 },
 
 {
    stt: '2010009',
    
    service:'Tai mũi họng',
    time1:'14:35 - 07/11/2021',
   
    state: <ServiceUnactivePoint />,
    stateFilter:'Bỏ qua',
    source:'Hệ thống'
 },
 {
    stt: '20100010',
    
    service:'Tai mũi họng',
    time1:'14:35 - 07/11/2021',
   
    state: <ServiceWaitPoint />,
    stateFilter:'Đang chờ',
    source:'Hệ thống'
 },
 
]
    const data = dataTableRedux.dataReport

    const [ dataReport , setDataReport] = useState(data)













    const options = [
        'Tất cả', '2040001', '2060001','2050002'
      ];

     
   const defaultOption = options[0];

//    const ItemServiceName = (value)=>{
//        return   <div className="Report__checkboxs"> 
//                         <span  className="Report__checkboxs__span">{value}</span>  
//                         <input  className="Report__checkboxs__input" type="checkbox" />
//                  </div>
//    }

   const optionsServiceName = [
        
      'Tất cả' , 'Khám tim mạch','Khám mắt','Khám tổng quát'

            
           
   ]
   const optionsTime1 = ['Tất cả' , '07:10  01/10/2021','07:15  01/10/2021','07:28  01/10/2021']
  
   const optionsState = ['Tất cả' , 'Đang chờ','Đã sử dụng','Bỏ qua']

   const optionsProduct = ['Tất cả' , 'Kiosk','Hệ thống']
  

    ////Pagination:
        
        
    const [pageNumber , setpageNumber] = useState(0)

    const dataPerPage = 9

    const pagesVisited =  pageNumber * dataPerPage

    const dataBeforDisplay = dataReport.slice( pagesVisited , pagesVisited + dataPerPage )

    const dataDisplay = dataBeforDisplay.map( (item:any,index:any)=>

    <div className="ServiceTableDetailItem" key={index}>
    <div className="ServiceTableDetailTitles_Item">
            <span> {item.stt}</span>    
    </div>
    <div className="ServiceTableDetailTitles_Item">
            <span> {item.service}</span>      
    </div>
    <div className="ServiceTableDetailTitles_Item">
            <span> {item.time1}</span>      
    </div>
    <div className="ServiceTableDetailTitles_Item">
            <span> 
                {item.stateFilter == 'Đang chờ' && <ServiceWaitPoint/>}
                {item.stateFilter == 'Bỏ qua' && <ServiceUsedPoint/>}
                {item.stateFilter == 'Đã sử dụng' && <ServiceUnactivePoint/>}
            
            </span>      
    </div>
    <div className="ServiceTableDetailTitles_Item">
            <span>{item.source}</span>      
    </div>

</div>

)
    
    

    const pageCount =  Math.ceil(data.length / dataPerPage)

   const changePage = ( {selected}:any ) =>{
            setpageNumber(selected)
   }
   /////
  
   const handleDropdownValue = (e:any)=>{
            
        if(e.value == 'Khám tim mạch'){
            const filterdata = data.filter( (item:any )=> item.service == 'Khám tim mạch')
            setDataReport(filterdata)
        }else if(e.value == 'Khám mắt'){
            const filterdata = data.filter(  (item:any ) => item.service == 'Khám mắt')
            setDataReport(filterdata)
        }else if(e.value == 'Khám tổng quát'){
            const filterdata = data.filter(  (item:any ) => item.service == 'Khám tổng quát')
            setDataReport(filterdata)
        }else if(e.value == 'Đang chờ'){
            const filterdata = data.filter(  (item:any ) => item.stateFilter== 'Đang chờ')
            setDataReport(filterdata)
        }
        else if(e.value == 'Đã sử dụng'){
            const filterdata = data.filter(  (item:any ) => item.stateFilter== 'Đã sử dụng')
            setDataReport(filterdata)
        }
        else if(e.value == 'Bỏ qua'){
            const filterdata = data.filter( (item:any )=> item.stateFilter== 'Bỏ qua')
            setDataReport(filterdata)
        }
        else if(e.value == 'Kiosk'){
            const filterdata = data.filter(  (item:any )=> item.source== 'Kiosk')
            setDataReport(filterdata)
        }else if(e.value == 'Hệ thống'){
            const filterdata = data.filter(  (item:any )=> item.source== 'Hệ thống')
            setDataReport(filterdata)
        }


        else{
            setDataReport(data)
        }
        
         
}



    const [startDate, setStartDate] = useState<Date | null>(new Date());

  return <div className="Report">

                <div className="ServiceInfor">

                <div className="ServiceInforTitle">
                    <span className="ServiceTItle">Báo cáo</span>   
                    <span className="Servicepointer">{'>'}  </span>
                    <span className="ListService">Lập báo cáo</span>   
                </div>

                <div className="ServiceInforUser">
                    <BellandUser/>
                </div>


                </div>

                <div className="Report__DatePicker">
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                         
                                         <div className="Report__DatePicker__icon"><img src={Vector} alt="" /> </div>
                                
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>

                <div className="Report__container">
              


   
                
           
            

            <div className="ServiceTableDetail">

                <div className="ServiceTableDetailTitles">
                        <div className="ServiceTableDetailTitles_Item">
                            <div className="Report__container__dropdown">

                            <Dropdown options={options} 
                                            
                                            onChange={(e)=>handleDropdownValue(e)} 
                                            value={defaultOption} placeholder="Select an option" />
                            
                                <span>Số thứ tự</span>
                            </div>
                            
                                               
                        </div>
                        <div className="ServiceTableDetailTitles_Item">
                            <div className="Report__container__dropdown Report__container__dropdown--service">

                            <Dropdown options={optionsServiceName} 
                                            
                                            onChange={(e)=>handleDropdownValue(e)} 
                                            value={defaultOption} placeholder="Select an option" />
                            
                                <span>Tên dịch vụ</span>
                            </div>
                            
                                               
                        </div>
                        <div className="ServiceTableDetailTitles_Item">
                            <div className="Report__container__dropdown">

                            <Dropdown options={optionsTime1} 
                                            
                                            onChange={(e)=>handleDropdownValue(e)} 
                                            value={defaultOption} placeholder="Select an option" />
                            
                                <span>Thời gian cấp</span>
                            </div>
                            
                                               
                        </div>
                        <div className="ServiceTableDetailTitles_Item">
                            <div className="Report__container__dropdown">

                            <Dropdown options={optionsState} 
                                            
                                            onChange={(e)=>handleDropdownValue(e)} 
                                            value={defaultOption} placeholder="Select an option" />
                            
                                <span>Tình trạng</span>
                            </div>
                            
                                               
                        </div>
                        <div className="ServiceTableDetailTitles_Item">
                            <div className="Report__container__dropdown">

                            <Dropdown options={optionsProduct} 
                                            
                                            onChange={(e)=>handleDropdownValue(e)} 
                                            value={defaultOption} placeholder="Select an option" />
                            
                                <span>Nguồn cấp</span>
                            </div>
                            
                                               
                        </div>
                      
                </div>
                


                    
                   

                        {
                        //     dataReport.map( (item:any,index:any)=>

                        //         <div className="ServiceTableDetailItem" key={index}>
                        //         <div className="ServiceTableDetailTitles_Item">
                        //                 <span> {item.stt}</span>    
                        //         </div>
                        //         <div className="ServiceTableDetailTitles_Item">
                        //                 <span> {item.service}</span>      
                        //         </div>
                        //         <div className="ServiceTableDetailTitles_Item">
                        //                 <span> {item.time1}</span>      
                        //         </div>
                        //         <div className="ServiceTableDetailTitles_Item">
                        //                 <span> 
                        //                     {item.stateFilter == 'Đang chờ' && <ServiceWaitPoint/>}
                        //                     {item.stateFilter == 'Bỏ qua' && <ServiceUsedPoint/>}
                        //                     {item.stateFilter == 'Đã sử dụng' && <ServiceUnactivePoint/>}
                                        
                        //                 </span>      
                        //         </div>
                        //         <div className="ServiceTableDetailTitles_Item">
                        //                 <span>{item.source}</span>      
                        //         </div>
                            
                        // </div>
                            
                        //     )
                        }
                        {dataDisplay}
                        
                    
                
                        
                        

                

                


                






            </div>


                            
                </div>

                <div className="Pagination">
                        <ReactPaginate 

                                previousLabel={ 
                                        <div className="ChosePage__preArrow">
                                                <img src={prevArrow} alt="" />
                                        </div>}
                                nextLabel={
                                        <div className="ChosePage__preArrow">
                                                <img src={nextArrow} alt="" />
                                        </div>
                                } 
                                pageCount={pageCount} 
                                onPageChange={changePage}   
                                containerClassName={"paginationBttns"}      
                                previousLinkClassName={"previousBttn"}    
                                nextLinkClassName = {"nextBttn"}  
                                disabledClassName={"paginationDisabled"}     
                                activeClassName={"paginationActive"}         
                />
            </div>

                 <div className="ServiceAdd">
                        <div className="ServiceAddIMG">
                                <img src={SaveSquare} alt="" />  
                        </div>
                        <span>Tải về</span>
            </div>



  </div>;
}


const mapStateToProps = (state:any) =>{
    return {
      dataTableRedux:state.dataAlta
  
     
        
        
        
    }
  }
  
  
  
  
  const mapDispatchToProps = (dispatch:any) =>{
    return {
            fetchDataChart: ()=>  dispatch(fetchDataChart()),
      
    }
  }
  
  
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Report)
