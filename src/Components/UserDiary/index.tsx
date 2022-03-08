import React,{ useState,useEffect} from 'react'
import "./UserDiary.css"
import BellandUser from '../BellandUser'
import searchlogo from '../../style/img/search.svg'
import Dropdown from 'react-dropdown';
import DatePicker from "react-datepicker";
import Vector from '../../style/img/Vector.svg'
import ChosePage from '../ChosePage'

import {connect} from 'react-redux';

import prevArrow from '../../style/img/prevArrow.svg'
import nextArrow from '../../style/img/nextArrow.svg'
import ReactPaginate from 'react-paginate';

import {fetchDataChart} from '../../redux/DatAlta/DataAltaActions'



 function UserDiary({dataTableRedux,fetchDataChart}:any) {


    useEffect(() => {
        
        fetchDataChart()
        
    
        return(fetchDataChart())
    },[])

   
    
    

   
   const [startDate, setStartDate] = useState<Date | null>(new Date());

   const [search , setSeatch] = useState('')


   const dataUserDiary1 = [

   {
       username: 'tuyetnguyen@12',
       time:'01/12/2021 15:12:17',
       ip:'192.168.3.1',
       operation:'Cập nhật thông tin dịch vụ DV_01'
   },
   {
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
      
      
]
    const dataUserDiary = dataTableRedux.dataUserDiary

    const [data,setData]  = useState(dataUserDiary)

    
        ////Pagination:
        
        
        const [pageNumber , setpageNumber] = useState(0)

        const dataPerPage = 9

        const pagesVisited =  pageNumber * dataPerPage

        const dataBeforDisplay = data.slice( pagesVisited , pagesVisited + dataPerPage )

        const dataDisplay = dataBeforDisplay.map ( (item:any,index:any)=>
                                    
        <div className="DetailService__container__table__detail__infor" key={index}>
                <div className="DetailService__container__table__detail__title__item">
                        <span>{item.username}</span>
                </div>
                <div className="DetailService__container__table__detail__title__item">
                        <span>{item.time}</span>
                </div>
                <div className="DetailService__container__table__detail__title__item">
                        <span>{item.ip}</span>
                </div>
                <div className="DetailService__container__table__detail__title__item">
                

                            <span >
                                {item.operation}
                            </span>
                    
                </div>

    </div>

)

        
        

        const pageCount =  Math.ceil(data.length / dataPerPage)

       const changePage = ( {selected}:any ) =>{
                setpageNumber(selected)
       }
       /////

    return (
        <div className="UserDiary">
                <div className="ServiceInfor">

                    <div className="ServiceInforTitle">
                        <span className="ServiceTItle">Cài đặt hệ thống</span>   
                        <span className="Servicepointer">{'>'}  </span>
                        <span className="ListService">Nhật ký hoạt động</span>   
                    </div>

                    <div className="ServiceInforUser">
                        <BellandUser/>
                    </div>


                </div>



                <div className="UserDiary__Table">

                <div className="ServiceDropdownsSarch">

                        <div className="ServiceDropdownsItem1">
                                
                                <div className="ServiceDropdownsSarchFirst">
                                        <div className="ServiceDropdownsSarchFirstName chooseTime">Chọn thời gian</div>
                                        <div className="ServiceDropdowns_1">
                                    
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                            
                                                    <img src={Vector} alt="" /> 
                                            
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                        
                                        
                                        </div>
                                </div>
                        </div>
                        <div className="ServiceDropdownsSarchFirst  ServiceDropdownsSarchFirst_input">
                                <div className="ServiceDropdownsSarchFirstName choseKey">Từ khóa</div>
                                <div className="ServiceDropdowns_input">
                                        <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSeatch(e.target.value)}/>
                                        <div className="seacrchlogo">
                                        <img src={searchlogo} alt="" />
                                </div>
                                </div>
                                
                        </div>

                 </div>


                 <div className="UserDiary_Table_Data">

                 

                    <div className="DetailService__container__table__detail">

                        <div className="DetailService__container__table__detail__title">
                                <div className="DetailService__container__table__detail__title__item">
                                        <span>Tên đăng nhập</span>
                                </div>
                                <div className="DetailService__container__table__detail__title__item">
                                        <span>Thời gian tác động</span>
                                </div>
                                <div className="DetailService__container__table__detail__title__item">
                                        <span>IP thực hiện</span>
                                </div>
                                <div className="DetailService__container__table__detail__title__item">
                                        <span>Thao tác thực hiện</span>
                                </div>
                        </div>



                        
                            

                                {/* {
                                    data.map ( (item:any,index:any)=>
                                    
                                            <div className="DetailService__container__table__detail__infor" key={index}>
                                                    <div className="DetailService__container__table__detail__title__item">
                                                            <span>{item.username}</span>
                                                    </div>
                                                    <div className="DetailService__container__table__detail__title__item">
                                                            <span>{item.time}</span>
                                                    </div>
                                                    <div className="DetailService__container__table__detail__title__item">
                                                            <span>{item.ip}</span>
                                                    </div>
                                                    <div className="DetailService__container__table__detail__title__item">
                                                    

                                                                <span >
                                                                    {item.operation}
                                                                </span>
                                                        
                                                    </div>

                                        </div>
                                    
                                    )
                                } */}

                                {dataDisplay}

                               
                                
                              
                        



                    </div>   






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
        </div>
    )
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
  
  
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(UserDiary)
