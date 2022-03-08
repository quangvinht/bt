
import './Service.css'
import BellandUser from '../BellandUser'
import searchlogo from '../../style/img/search.svg'
import {Link} from 'react-router-dom'
import Dropdown, { Option } from 'react-dropdown';
import React, { useState ,useEffect} from "react";
import DatePicker from "react-datepicker";
import Vector from '../../style/img/Vector.svg'
import addSquare from '../../style/img/add-square.svg'
import ChosePage from '../ChosePage'

import "react-datepicker/dist/react-datepicker.css";

import prevArrow from '../../style/img/prevArrow.svg'
import nextArrow from '../../style/img/nextArrow.svg'
import ReactPaginate from 'react-paginate';


import {connect} from 'react-redux';



import {fetchDataChart} from '../../redux/DatAlta/DataAltaActions'



function Service({dataTableRedux,fetchDataChart}:any) {

        useEffect(() => {
        
                fetchDataChart()
                
            
            
            },[])

            
            


        const ServiceActivePoint = ()=>{
                return (
                        <><span className="ActivePoint"></span><span>Hoạt động</span></>
                )
        }  
                
                       
                
        

        const ServiceUnactivePoint = ()=>{
              return (  <><span className="UnActivePoint"></span><span>Ngưng hoạt động</span></>
              
              ) 
        }

        // const data1= [

        //         {
        //                 codeService : 'KIO_01',
        //                 nameService : 'Kiosk',
        //                 desService : 'Mô tả dịch vụ 1',
        //                 stateService : <ServiceActivePoint />,
        //                 stateFilter:'Hoạt động'
        //         },
        //         {
        //                 codeService : 'KIO_01',
        //                 nameService : 'Kiosk',
        //                 desService : 'Hoạt động',
        //                 stateService :  <ServiceUnactivePoint />,
        //                 stateFilter:'Ngưng hoạt động'

        //         },
        //         {
        //                 codeService : 'KIO_01',
        //                 nameService : 'Kiosk',
        //                 desService : ' Hoạt động',
        //                 stateService :  <ServiceActivePoint />
        //                 ,
        //                 stateFilter:'Hoạt động'
        //         },
        //         {
        //                 codeService : 'KIO_01',
        //                 nameService : 'Kiosk',
        //                 desService : 'Hoạt động',
        //                 stateService :  <ServiceActivePoint /> ,
        //                 stateFilter:'Hoạt động'
        //         },
        //         {
        //                 codeService : 'KIO_01',
        //                 nameService : 'Kiosk',
        //                 desService : 'Hoạt động',
        //                 stateService : <ServiceActivePoint /> ,
        //                 stateFilter:'Hoạt động'
        //         },
        //         {
        //                 codeService : 'KIO_01',
        //                 nameService : 'Kiosk',
        //                 desService : 'Hoạt động',
        //                 stateService :  <ServiceActivePoint /> ,
        //                 stateFilter:'Hoạt động'
        //         },
        //         {
        //                 codeService : 'KIO_01',
        //                 nameService : 'Kiosk',
        //                 desService : 'Hoạt động',
        //                 stateService :  <ServiceActivePoint /> ,
        //                 stateFilter:'Hoạt động'
        //         },
        //         {
        //                 codeService : 'KIO_01',
        //                 nameService : 'Kiosk',
        //                 desService : 'Hoạt động',
        //                 stateService : <ServiceUnactivePoint /> ,
        //                 stateFilter:'Ngưng hoạt động'
        //         },
        //         {
        //                 codeService : 'KIO_01',
        //                 nameService : 'Kiosk',
        //                 desService : 'Hoạt động',
        //                 stateService :   <ServiceActivePoint />,
        //                 stateFilter:'Hoạt động'
        //         }
                
                
        // ]

        const data = dataTableRedux.dataService
        

        const [dataServiceTable , setDataServiceTable] = useState(data)




    const options = [
        'Tất cả', 'Hoạt động', 'Ngưng hoạt động'
      ];

     
   const defaultOption = options[0];

  

         ////Pagination:
        
        
         const [pageNumber , setpageNumber] = useState(0)

         const dataPerPage = 9
 
         const pagesVisited =  pageNumber * dataPerPage
 
         const dataBeforDisplay = dataServiceTable.slice( pagesVisited , pagesVisited + dataPerPage )
 
         const dataDisplay = dataBeforDisplay.map ( (item:any,index:any)=> 
                         
         <div className="ServiceTableDetailItem" key={index}>
                 <div className="ServiceTableDetailTitles_Item">
                         <span> {item.codeService}</span>    
                 </div>
                 <div className="ServiceTableDetailTitles_Item">
                         <span> {item.nameService} </span>      
                 </div>
                 <div className="ServiceTableDetailTitles_Item">
                         <span> {item.desService} </span>      
                 </div>
                 <div className="ServiceTableDetailTitles_Item">
                         <span> {item.stateFilter == 'Hoạt động'? <ServiceActivePoint/> : <ServiceUnactivePoint/>}</span>      
                 </div>
                 <div className="ServiceTableDetailTitles_Item">
                         <span> <Link to="/service/detail-service">Chi tiết </Link> </span>      
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


        const handleDropdownValue = (e: any)=>{
            
                if(e.value=='Hoạt động'){
                        const filterdata = data.filter( (item:any)=> item.stateFilter == 'Hoạt động')
                        setDataServiceTable(filterdata)
                }else if(e.value=='Ngưng hoạt động') {
                        const filterdata = data.filter((item:any) => item.stateFilter == 'Ngưng hoạt động')
                        setDataServiceTable(filterdata)
                }
                
                else{
                        setDataServiceTable(data)
                }
                 
           }

        const [startDate, setStartDate] = useState<Date | null>(new Date());


        const [search , setSeatch] = useState('')

        

    return (
        <div className="Service">

            <div className="ServiceInfor">

                <div className="ServiceInforTitle">
                      <span className="ServiceTItle">Dịc vụ</span>   
                      <span className="Servicepointer">{'>'}  </span>
                      <span className="ListService">Danh sách dịch vụ</span>   
                </div>

                <div className="ServiceInforUser">
                    <BellandUser/>
                </div>


            </div>

           <div className="ServiceCOntainer">
                
            <div className="ServiceDropdownsSearchTItle">
                        Quản lý dịch vụ
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

            <div className="ServiceTableDetail">

                <div className="ServiceTableDetailTitles">
                        <div className="ServiceTableDetailTitles_Item">
                                <span> Mã dịch vụ  </span>    
                        </div>
                        <div className="ServiceTableDetailTitles_Item">
                                  <span> Tên dịch vụ  </span>      
                        </div>
                        <div className="ServiceTableDetailTitles_Item">
                                  <span> Mô tả </span>      
                        </div>
                        <div className="ServiceTableDetailTitles_Item">
                                  <span> Trạng thái hoạt động  </span>      
                        </div>
                        <div className="ServiceTableDetailTitles_Item">
                                  <span>  </span>      
                        </div>
                        <div className="ServiceTableDetailTitles_Item">
                                  <span>   </span>      
                        </div>
                </div>
                
              
                {
                        //  dataServiceTable.map ( (item:any,index:any)=> 
                         
                        // <div className="ServiceTableDetailItem" key={index}>
                        //         <div className="ServiceTableDetailTitles_Item">
                        //                 <span> {item.codeService}</span>    
                        //         </div>
                        //         <div className="ServiceTableDetailTitles_Item">
                        //                 <span> {item.nameService} </span>      
                        //         </div>
                        //         <div className="ServiceTableDetailTitles_Item">
                        //                 <span> {item.desService} </span>      
                        //         </div>
                        //         <div className="ServiceTableDetailTitles_Item">
                        //                 <span> {item.stateFilter == 'Hoạt động'? <ServiceActivePoint/> : <ServiceUnactivePoint/>}</span>      
                        //         </div>
                        //         <div className="ServiceTableDetailTitles_Item">
                        //                 <span> <Link to="/service/detail-service">Chi tiết </Link> </span>      
                        //         </div>
                        //         <div className="ServiceTableDetailTitles_Item">
                        //                 <span> <a href="">Cập nhật</a>  </span>      
                        //         </div>
                        // </div>

                        //  )     
                }
                {dataDisplay}
                
               
                


                   
          </div>     





           </div>

           





        <Link to="/service/add-service"> <div className="ServiceAdd">
                                        <div className="ServiceAddIMG">
                                                <img src={addSquare} alt="" />  
                                        </div>
                                        <span>Thêm dịch vụ</span>
                                </div>
        </Link>         

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
      
      
      
      
      export default connect(mapStateToProps,mapDispatchToProps)(Service)
      
      