
import './Equiment.css'
import BellandUser from '../BellandUser'
import searchlogo from '../../style/img/search.svg'
import {Link} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import Vector from '../../style/img/Vector.svg'
import addSquare from '../../style/img/add-square.svg'
import ChosePage from '../ChosePage'

import prevArrow from '../../style/img/prevArrow.svg'
import nextArrow from '../../style/img/nextArrow.svg'
import ReactPaginate from 'react-paginate';


import {connect} from 'react-redux';



import {fetchDataChart} from '../../redux/DatAlta/DataAltaActions'





 function Equiment({dataTableRedux,fetchDataChart}:any) {


        
        

        useEffect(() => {
        
                fetchDataChart()
                
            
            
            },[])

            
            
            
            
            
             





        const ServiceActivePoint = (value:any)=>{
                return (
                        <><span className="ActivePoint"></span><span> Hoạt động</span></>
                )
        }  
                
                       
                
        

        const ServiceUnactivePoint = (value:any)=>{
              return (  <><span className="UnActivePoint"></span><span>Ngưng hoạt động</span></>
              
              ) 
        }


        const ServiceActivePoint1 = (value:any)=>{
                return (
                        <><span className="ActivePoint"></span><span> Kết nối</span></>
                )
        }  
                
                       
                
        

        const ServiceUnactivePoint1 = (value:any)=>{
              return (  <><span className="UnActivePoint"></span><span>Mất kết nối</span></>
              
              ) 



        }





        // const data1 = [

        //         {
        //                 code : 'KIO_01',
        //                 name: 'Kiosk',
        //                 ip : '192.168.1.10',
        //                 state : <ServiceUnactivePoint />,
        //                 stateFilter:'Ngưng hoạt động',
        //                 connectFilter:'Mất kết nối',
        //                 connect:<ServiceUnactivePoint1 />,
                        
        //                 serviceUse:'Khám tim mạch, Khám mắt...'
        //         },
        //         {
        //             code : 'KIO_01',
        //             name: 'Kiosk',
        //             ip : '192.168.1.10',
        //             state : <ServiceActivePoint />,
        //             connect:<ServiceActivePoint1 />,
        //             stateFilter:'Hoạt động',
        //             connectFilter:'Kết nối',
        //             serviceUse:'Khám tim mạch, Khám mắt...'
        //         },
        //         {
        //             code : 'KIO_01',
        //             name: 'Kiosk',
        //             ip : '192.168.1.10',
        //             state : <ServiceActivePoint />,
        //             connect:<ServiceUnactivePoint1 />,
        //             stateFilter:'Hoạt động',
        //             connectFilter:'Mất kết nối',
        //             serviceUse:'Khám tim mạch, Khám mắt...'
        //         },
        //         {
        //             code : 'KIO_01',
        //             name: 'Kiosk',
        //             ip : '192.168.1.10',
        //             state : <ServiceUnactivePoint />,
        //             connect:<ServiceActivePoint1 />,
        //             serviceUse:'Khám tim mạch, Khám mắt...',
        //             stateFilter:'Ngưng hoạt động',
        //             connectFilter:'Kết nối',
        //         },
        //         {
        //             code : 'KIO_01',
        //             name: 'Kiosk',
        //             ip : '192.168.1.10',
        //             state : <ServiceActivePoint />,
        //             connect:<ServiceUnactivePoint1 />,
        //             serviceUse:'Khám tim mạch, Khám mắt...',
        //             stateFilter:'Hoạt động',
        //             connectFilter:'Mất kết nối',
                    
        //         },
        //         {
        //             code : 'KIO_01',
        //             name: 'Kiosk',
        //             ip : '192.168.1.10',
        //             state : <ServiceActivePoint />,
        //             connect:<ServiceActivePoint1 />,
        //             serviceUse:'Khám tim mạch, Khám mắt...',
        //             stateFilter:'Hoạt động',
        //                 connectFilter:'Kết nối',
        //         },
        //         {
        //             code : 'KIO_01',
        //             name: 'Kiosk',
        //             ip : '192.168.1.10',
        //             state : <ServiceUnactivePoint />,
        //             connect:<ServiceActivePoint1 />,
        //             serviceUse:'Khám tim mạch, Khám mắt...',
        //             stateFilter:'Ngưng hoạt động',
        //                 connectFilter:'Kết nối',
        //         },
        //         {
        //             code : 'KIO_01',
        //             name: 'Kiosk',
        //             ip : '192.168.1.10',
        //             state : <ServiceActivePoint />,
        //             connect:<ServiceActivePoint1 />,
        //             serviceUse:'Khám tim mạch, Khám mắt...',
        //             stateFilter:'Hoạt động',
        //                 connectFilter:'Kết nối',
        //         },
        //         {
        //             code : 'KIO_01',
        //             name: 'Kiosk',
        //             ip : '192.168.1.10',
        //             state : <ServiceActivePoint />,
        //             connect:<ServiceUnactivePoint1 />,
        //             serviceUse:'Khám tim mạch, Khám mắt...',
        //             stateFilter:'Hoạt động',
        //                 connectFilter:'Mất kết nối',
        //         },
          
          
              
                
                
        // ]

        const data = dataTableRedux.dataEquiment
        
        
       
        


  const [dataEquiment,setDataEquiment] = useState(data)

    const options = [
        'Tất cả', 'Hoạt động', 'Ngưng hoạt động'
      ];

      
   const defaultOption = options[0];

   const optionsConnect = [
    'Tất cả', 'Kết nối', 'Mất kết nối'
  ];
  const [showMore , setShowMore] = useState(false)
 
        ////Pagination:
        
        
        const [pageNumber , setpageNumber] = useState(0)

        const dataPerPage = 9

        const pagesVisited =  pageNumber * dataPerPage

        const dataBeforDisplay = dataEquiment.slice( pagesVisited , pagesVisited + dataPerPage )

        const dataDisplay = dataBeforDisplay.map( (item:any,index:any)=>
                        
        <div className="ServiceTableDetailItem" key={index}>
                <div className="ServiceTableDetailTitles_Item">
                        <span> {item.code}</span>    
                </div>
                <div className="ServiceTableDetailTitles_Item">
                        <span> {item.name}</span>      
                </div>
                <div className="ServiceTableDetailTitles_Item">
                        <span> {item.ip}</span>      
                </div>
                <div className="ServiceTableDetailTitles_Item">
                        <span> {item.stateFilter == 'Hoạt động'? <ServiceActivePoint/> : <ServiceUnactivePoint/>  }</span>      
                </div>
                <div className="ServiceTableDetailTitles_Item">
                        <span>{item.connectFilter == 'Kết nối'? <ServiceActivePoint1/> : <ServiceUnactivePoint1/>  } </span>      
                </div>
                <div className="ServiceTableDetailTitles_Item">
                        
                                <span> {item.serviceUse} 
                                {
                                        showMore && <span> khám Sản - Phụ khoa, Khám răng hàm mặt, 
                                                Khám tai mũi họng, Khám hô hấp, Khám tổng quát</span>
                                }
                        
                                {
                                        !showMore && <><br /><a href="" onClick={() => setShowMore(!showMore)}> Xem thêm</a></>
                                } 
                        
                           
                            
                            </span>  
                          
                </div>
                <div className="ServiceTableDetailTitles_Item">
                        <span> <Link to="/equimeequimentnt/detail">Chi tiết</Link>  </span>      
                </div>
                <div className="ServiceTableDetailTitles_Item">
                        <span> <a href="">Cập nhật</a>  </span>      
                </div>
        </div>
        
        
        )
        
        

        const pageCount =  Math.ceil(data.length / dataPerPage)

       const changePage = ( {selected}:any ) =>{
                setpageNumber(selected)
       }
       /////


        const handleDropdownValue = (e:any)=>{
            
                
                if(e.value=='Hoạt động'){
                        const filterdata = data.filter( (item:any) => item.stateFilter == 'Hoạt động')
                        setDataEquiment(filterdata)
                }else if(e.value=='Ngưng hoạt động') {
                        const filterdata = data.filter((item:any)=> item.stateFilter == 'Ngưng hoạt động')
                        setDataEquiment(filterdata)
                }
                else if(e.value=='Ngưng hoạt động') {
                        const filterdata = data.filter((item:any)=> item.stateFilter == 'Ngưng hoạt động')
                        setDataEquiment(filterdata)
                }
                else if(e.value=='Kết nối') {
                        const filterdata = data.filter((item:any)=> item.connectFilter == 'Kết nối')
                        setDataEquiment(filterdata)
                }
                else if(e.value=='Mất kết nối') {
                        const filterdata = data.filter((item:any)=> item.connectFilter == 'Mất kết nối')
                        setDataEquiment(filterdata)
                }
                
                else{
                        setDataEquiment(data)
                }
                 
           }
        
        
        

        const [search , setSeatch] = useState('')




  return (
    <div className="Equiment">


            <div className="ServiceInfor">

            <div className="ServiceInforTitle">
                <span className="ServiceTItle">Thiết bị</span>   
                <span className="Servicepointer">{'>'}  </span>
                <span className="ListService">Danh sách thiết bị</span>   
            </div>

            <div className="ServiceInforUser">
                <BellandUser/>
            </div>


            </div>


            <div className="Equiment__container">


               
                
                <div className="ServiceDropdownsSearchTItle">
                         Danh sách thiết bị
                </div>
                    
                <div className="ServiceDropdownsSarch">
    
                        <div className="ServiceDropdownsItem1">
                                <div className="ServiceDropdownsSarchFirst">
                                        <div className="ServiceDropdownsSarchFirstName">Trạng thái hoạt động</div>
                                        <div className="ServiceDropdowns_1">
                                        <Dropdown options={options} 
                                                
                                                onChange={(e)=>handleDropdownValue(e)} 
                                                value={defaultOption} placeholder="Select an option" />
                                        </div>
                                </div>
                                <div className="ServiceDropdownsSarchFirst">
                                        <div className="ServiceDropdownsSarchFirstName">Trạng kết nối</div>
                                        <div className="ServiceDropdowns_1">
                                        <Dropdown options={optionsConnect} 
                                                
                                                onChange={(e)=>handleDropdownValue(e)} 
                                                value={defaultOption} placeholder="Select an option" />
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
    
                <div className="ServiceTableDetail">
    
                    <div className="ServiceTableDetailTitles">
                            <div className="ServiceTableDetailTitles_Item">
                                    <span> Mã thiết bị  </span>    
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                      <span> Tên thiết bị </span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                      <span> Địa chỉ IP</span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                      <span> Trạng thái hoạt động</span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                      <span> Trạng thái kết nối </span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                      <span> Dịch vụ sử dụng  </span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                      <span>  </span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                      <span>   </span>      
                            </div>
                    </div>
                    
                  
                    {
                        dataDisplay
                    }
                           
                             
                            
    
                     
                   
                    
    
    
                       
                
    
    
    
    
    
                </div>


            </div>

             <Link to="/equiment/add-equiment"><div className="ServiceAdd">
                 <div className="ServiceAddIMG">
                         <img src={addSquare} alt="" />  
                </div>
                <span>Thêm thiết bị</span>
            </div></Link>
          

            {/* <div className="ServiceChosePage">
                                <ChosePage/>
            </div> */}
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
    
    )}




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
      
      
      
      
      export default connect(mapStateToProps,mapDispatchToProps)(Equiment)
      
      