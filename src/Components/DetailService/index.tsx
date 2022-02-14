
import './DetailService.css'
import BellandUser from '../BellandUser'
import searchlogo from '../../style/img/search.svg'
import {Link} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import Vector from '../../style/img/Vector.svg'
import addSquare from '../../style/img/add-square.svg'
import ChosePage from '../ChosePage'
import updateSquare from '../../style/img/updateSquare.svg'
import backSquare from '../../style/img/backSquare.svg'

import "react-datepicker/dist/react-datepicker.css";


import prevArrow from '../../style/img/prevArrow.svg'
import nextArrow from '../../style/img/nextArrow.svg'
import ReactPaginate from 'react-paginate';


import {connect} from 'react-redux';



import {fetchDataChart} from '../../redux/DatAlta/DataAltaActions'

function DetailService({dataTableRedux,fetchDataChart}:any) {



        useEffect(() => {
        
                fetchDataChart()
                
            
            
            },[])


        
        

            




            const ServiceActivePoint = ()=>{
                return (
                        <><span className="ActivePoint"></span><span>Đã hoàn thành</span></>
                )
        }  
                
        const ServiceProcessPoint = ()=>{
            return (
                    <><span className="ProcessPoint"></span><span>Đang thực hiện</span></>
            )
    }  
                     
                
        

        const ServiceStopPoint = ()=>{
              return (  <><span className="StopPoint"></span><span>Vắng</span></>
              
              ) 
        }

    const options = [
        'Tất cả', 'Đã hoàn thành', 'Đang thực hiện','Vắng'
      ];

   const defaultOption = options[0];

   const optionsConnect = [
    'Tất cả', 'Kết nối', 'Mất kết nối'
  ];

     const defaultOptionConnect = optionsConnect[0];



      

        const dataServiceTableDetail1 = [

              {
                    numberOrder: '2010001',
                     state:<ServiceActivePoint />
               
              },
              {
                    numberOrder: '2010002',
                     state:<ServiceActivePoint />
               
              },
              {
                    numberOrder: '2010003',
                    state:<ServiceProcessPoint />
               
              },
              {
                    numberOrder: '2010004',
                    state:<ServiceStopPoint />
               
              },
              {
                    numberOrder: '2010005',
                    state:<ServiceActivePoint />
               
              },
              {
                    numberOrder: '2010006',
                    state:<ServiceProcessPoint />
               
              },
              {
                    numberOrder: '2010007',
                    state:<ServiceStopPoint />
               
              },
              {
                    numberOrder: '2010008',
                    state:<ServiceActivePoint/>
               
              }
                
                
        ]

        const dataServiceTableDetail = dataTableRedux.dateServiceDetail

        const [data , setData] = useState(dataServiceTableDetail)

        const [startDate, setStartDate] = useState<Date | null>(new Date());


        const [search , setSeatch] = useState('')




        ////Pagination:
        
        
        const [pageNumber , setpageNumber] = useState(0)

        const dataPerPage = 9

        const pagesVisited =  pageNumber * dataPerPage

        const dataBeforDisplay = data.slice( pagesVisited , pagesVisited + dataPerPage )

        const dataDisplay = dataBeforDisplay.map ( (item:any,index:any)=> 
                                                
        <div className="DetailService__container__table__detail__infor" key={index}>
                <div className="DetailService__container__table__detail__title__item">
                        <span>{item.numberOrder}</span>
                </div>
                <div className="DetailService__container__table__detail__title__item">
                        <span>
                                {item.state == 'Đã hoàn thành' && <ServiceActivePoint/>}
                                {item.state == 'Đang thực hiện' && <ServiceProcessPoint/>}
                                {item.state == 'Vắng' && <ServiceStopPoint/>}
                        
                        
                        </span>
                </div>

        </div>
    )
        
        

        const pageCount =  Math.ceil(data.length / dataPerPage)

       const changePage = ( {selected}:any ) =>{
                setpageNumber(selected)
       }
       /////
        
      const handleDropdownValue = (e:any)=>{
            
        
        if(e.value == "Đã hoàn thành"){

                const filterdata =  dataServiceTableDetail.filter( (item:any) =>  item.state === "Đã hoàn thành")
                 
                
                setData(filterdata)

                
            }else if(e.value == "Đang thực hiện"){
    
                const filterdata =  dataServiceTableDetail.filter( (item:any) =>  item.state === "Đang thực hiện")
                 
                
                setData(filterdata)
            }else if(e.value == "Vắng"){
    
                const filterdata =  dataServiceTableDetail.filter( (item:any) =>  item.state === "Vắng")
                 
                
                setData(filterdata)
            } else {
                        
                setData( dataServiceTableDetail )
        }

         

   }
  
   
        


    return (
        <div className="DetailService">
                <div className="ServiceInfor">

                    <div className="ServiceInforTitle">
                        <span className="ServiceTItle">Dịch vụ</span>   
                        <span className="Servicepointer">{'>'}  </span>
                        <span className="ServiceTItle">Danh sách dịch vụ</span>  
                        <span className="Servicepointer">{'>'}  </span> 
                        <span className="ListService">Chi tiết</span>  
                    </div>

                    <div className="ServiceInforUser">
                        <BellandUser/>
                    </div>


                </div>

                <div className="DetailService_title">
                     Quản lý dịch vụ
                </div>
                <div className="DetailService__container">

                        <div className="DetailService__container_items">
                            <div className="DetailService__container_items__item">
                                <div className="DetailService__container_items__item__title">
                                    Thông tin dịch vụ
                                </div>
                                <div className="DetailService__container_items__item_1">
                                        <span>Mã dịch vụ: </span> <span>201</span>
                                </div>
                                <div className="DetailService__container_items__item_1">
                                        <span>Tên dịch vụ: </span> <span>Chuyên các bệnh lý về tim</span>
                                </div>
                                <div className="DetailService__container_items__item_1">
                                        <span>Mô tả: </span> <span>Chuyên các bệnh lý về tim</span>
                                </div>
                            </div>
                            <div className="DetailService__container_items__item">
                                <div className="DetailService__container_items__item__title">
                                    Quy tắc cấp số
                                </div>
                                <div className="DetailService__container_items__item_1">
                                        <span>Tăng tự động:  </span> 
                                        <div className="DetailService__container_items__item_1__inputs">
                                                <input type="text" onChange={ e=>'value'} value='0001' /> <span>đến</span> <input type="text" onChange={ e=>'value'}  value='9999'  />
                                        </div>
                                </div>
                                <div className="DetailService__container_items__item_1">
                                        <span>Prefix: </span>
                                        <div className="DetailService__container_items__item_1__inputs">
                                               <input type="text" className='prefix'  value='0001' onChange={ e=>'value'} />
                                        </div> 
                                </div>
                                <div className="DetailService__container_items__item_1">
                                        <span>Reset mỗi ngày</span> 
                                </div>
                                <div className="DetailService__container_items__item_1">
                                        <div className="example">Ví dụ: 201-2001</div> 
                                </div>
                            </div>
                        </div>

                        <div className="DetailService__container__table">


                                <div className="ServiceDropdownsSarch">

                    <div className="ServiceDropdownsItem1">
                            <div className="ServiceDropdownsSarchFirst">
                                    <div className="ServiceDropdownsSarchFirstName">Trạng thái </div>
                                    <div className="ServiceDropdowns_1">
                                    <Dropdown options={options} 
                                            
                                            onChange={(e)=>handleDropdownValue(e)} 
                                            value={defaultOption} placeholder="Select an option" />
                                    </div>
                            </div>
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
                            <div className="ServiceDropdownsSarchFirstName choseKey ServiceDropdownsSarchFirstName--detailService">Từ khóa</div>
                                <div className="ServiceDropdowns_input ServiceDropdowns_input--detailService">
                                        <input placeholder="Nhập từ khóa" value={search} onChange={(e)=> setSeatch(e.target.value)}/>
                                        <div className="seacrchlogo">
                                        <img src={searchlogo} alt="" />
                                        </div>
                                </div>
                
                        </div>

                                </div> 

                                <div className="DetailService__container__table__detail">

                                    <div className="DetailService__container__table__detail__title">
                                            <div className="DetailService__container__table__detail__title__item">
                                                    <span>Số thứ tự</span>
                                            </div>
                                            <div className="DetailService__container__table__detail__title__item">
                                                    <span>Trạng thái</span>
                                            </div>
                                    </div>


                                     {
                                        //   data.map ( (item:any,index:any)=> 
                                                
                                        //     <div className="DetailService__container__table__detail__infor" key={index}>
                                        //             <div className="DetailService__container__table__detail__title__item">
                                        //                     <span>{item.numberOrder}</span>
                                        //             </div>
                                        //             <div className="DetailService__container__table__detail__title__item">
                                        //                     <span>
                                        //                             {item.state == 'Đã hoàn thành' && <ServiceActivePoint/>}
                                        //                             {item.state == 'Đang thực hiện' && <ServiceProcessPoint/>}
                                        //                             {item.state == 'Vắng' && <ServiceStopPoint/>}
                                                            
                                                            
                                        //                     </span>
                                        //             </div>

                                        //     </div>
                                        // )
                                    } 

                                    {dataDisplay}

                                   


        
        

           






   
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

                              <Link to="/service/detail-service/update-service"> <div className="ServiceAdd ServiceAdd--update">
                                    <div className="ServiceAddIMG">
                                            <img src={updateSquare} alt="" />  
                                    </div>
                                    <span>Cập nhập danh sách</span>
                                </div></Link> 

                              <Link to="/service"> <div className="ServiceAdd ServiceAdd--back">
                                    <div className="ServiceAddIMG">
                                            <img src={backSquare} alt="" />  
                                    </div>
                                    <span>Quay lại</span>
                                </div></Link> 




                        </div>
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
      
      
      
      
      export default connect(mapStateToProps,mapDispatchToProps)(DetailService)
      
      
