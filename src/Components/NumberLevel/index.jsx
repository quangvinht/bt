import './NumberLevel.css'

import BellandUser from '../BellandUser'
import searchlogo from '../../style/img/search.svg'
import {Link} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Vector from '../../style/img/Vector.svg'
import addSquare from '../../style/img/add-square.svg'
import ChosePage from '../ChosePage'







export default function NumberLevel(props) {


        

        const ServiceActivePoint = ({value})=>{
                return (
                        <><span className="ActivePoint"></span><span>{value}</span></>
                )
        }  

        const ServiceWaitPoint = ({value})=>{
            return (
                    <><span className="WaitPoint"></span><span>{value}</span></>
            )
    }  

    
    const ServiceUsedPoint = ({value})=>{
        return (
                <><span className="UsedPoint"></span><span>{value}</span></>
        )
}  
  

const ServiceUnactivePoint = ({value})=>{
              return (  <><span className="UnActivePoint"></span><span>{value}</span></>
              
              ) 
        }

        const dataNumberLevel = [

               {
                   stt: '2010001',
                   guest: 'Lê Huỳnh Ái Vân',
                   service:'Khám tim mạch',
                   time1:'14:35 - 07/11/2021',
                   time2: '14:35 - 12/11/2021',
                   state: <ServiceWaitPoint value={'Đang chờ'}/>,
                   source:'Kiosk'
               },
               {
                stt: '2010002',
                guest: 'Huỳnh Ái Vân',
                service:'Khám sản - Phụ Khoa',
                time1:'14:35 - 07/11/2021',
                time2: '14:35 - 12/11/2021',
                state: <ServiceUsedPoint value={'Đã sử dụng'}/>,
                source:'Kiosk'
            },
            {
                stt: '2010003',
                guest: 'Lê Ái Vân',
                service:'Khám răng hàm mặt',
                time1:'14:35 - 07/11/2021',
                time2: '14:35 - 12/11/2021',
                state: <ServiceWaitPoint value={'Đang chờ'}/>,
                source:'Hệ thống'
            },
            {
                stt: '2010004',
                guest: 'Nguyễn Ái Vân',
                service:'Khám tai mũi họng',
                time1:'14:35 - 07/11/2021',
                time2: '14:35 - 12/11/2021',
                state: <ServiceWaitPoint value={'Đang chờ'}/>,
                source:'Hệ thống'
            },
            {
                stt: '2010005',
                guest: 'Trần Thị Ái Vân',
                service:'Khám hô hấp',
                time1:'14:35 - 07/11/2021',
                time2: '14:35 - 12/11/2021',
                state: <ServiceWaitPoint value={'Đang chờ'}/>,
                source:'Kiosk'
            },
            {
                stt: '2010006',
                guest: 'Lê Huỳnh Nghĩa',
                service:'Khám tổng quát',
                time1:'14:35 - 07/11/2021',
                time2: '14:35 - 12/11/2021',
                state: <ServiceUsedPoint value={'Đã sử dụng'}/>,
                source:'Hệ thống'
            },
            {
                stt: '2010007',
                guest: 'Lê Huỳnh Đức',
                service:'Khám tai mũi họng',
                time1:'14:35 - 07/11/2021',
                time2: '14:35 - 12/11/2021',
                state: <ServiceUsedPoint value={'Đã sử dụng'}/>,
                source:'Kiosk'
            },
            {
                stt: '2010008',
                guest: 'Phạm Văn Mạnh',
                service:'Khám tổng quát',
                time1:'14:35 - 07/11/2021',
                time2: '14:35 - 12/11/2021',
                state: <ServiceUnactivePoint value={'Bỏ qua'}/>,
                source:'Hệ thống'
            },
            {
                stt: '2010009',
                guest: 'Lê Thị Cẩm Tiên',
                service:'Khám tai mũi họng',
                time1:'14:35 - 07/11/2021',
                time2: '14:35 - 12/11/2021',
                state: <ServiceUsedPoint value={'Đã sử dụng'}/>,
                source:'Hệ thống'
            },
          
          
              
                
                
        ]
        

        const dataNumberLevelWait = [

                {
                    stt: '2010001',
                    guest: 'Lê Huỳnh Ái Vân',
                    service:'Khám tim mạch',
                    time1:'14:35 - 07/11/2021',
                    time2: '14:35 - 12/11/2021',
                    state: <ServiceWaitPoint value={'Đang chờ'}/>,
                    source:'Kiosk'
                },
                {
                 stt: '2010002',
                 guest: 'Huỳnh Ái Vân',
                 service:'Khám sản - Phụ Khoa',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceWaitPoint value={'Đang chờ'}/>,
                 source:'Kiosk'
             },
             {
                 stt: '2010003',
                 guest: 'Lê Ái Vân',
                 service:'Khám răng hàm mặt',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceWaitPoint value={'Đang chờ'}/>,
                 source:'Hệ thống'
             },
             {
                 stt: '2010004',
                 guest: 'Nguyễn Ái Vân',
                 service:'Khám tai mũi họng',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceWaitPoint value={'Đang chờ'}/>,
                 source:'Hệ thống'
             },
             {
                 stt: '2010005',
                 guest: 'Trần Thị Ái Vân',
                 service:'Khám hô hấp',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceWaitPoint value={'Đang chờ'}/>,
                 source:'Kiosk'
             },
             {
                 stt: '2010006',
                 guest: 'Lê Huỳnh Nghĩa',
                 service:'Khám tổng quát',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceWaitPoint value={'Đang chờ'}/>,
                 source:'Hệ thống'
             },
             {
                 stt: '2010007',
                 guest: 'Lê Huỳnh Đức',
                 service:'Khám tai mũi họng',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceWaitPoint value={'Đang chờ'}/>,
                 source:'Kiosk'
             },
             {
                 stt: '2010008',
                 guest: 'Phạm Văn Mạnh',
                 service:'Khám tổng quát',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceWaitPoint value={'Đang chờ'}/>,
                 source:'Hệ thống'
             },
             {
                 stt: '2010009',
                 guest: 'Lê Thị Cẩm Tiên',
                 service:'Khám tai mũi họng',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceWaitPoint value={'Đang chờ'}/>,
                 source:'Hệ thống'
             },
           
           
               
                 
                 
         ]

         const dataNumberLevelUsed = [

                {
                    stt: '2010001',
                    guest: 'Lê Huỳnh Ái Vân',
                    service:'Khám tim mạch',
                    time1:'14:35 - 07/11/2021',
                    time2: '14:35 - 12/11/2021',
                    state: <ServiceUsedPoint value={'Đã sử dụng'}/>,
                    source:'Kiosk'
                },
                {
                 stt: '2010002',
                 guest: 'Huỳnh Ái Vân',
                 service:'Khám sản - Phụ Khoa',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUsedPoint value={'Đã sử dụng'}/>,
                 source:'Kiosk'
             },
             {
                 stt: '2010003',
                 guest: 'Lê Ái Vân',
                 service:'Khám răng hàm mặt',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUsedPoint value={'Đã sử dụng'}/>,
                 source:'Hệ thống'
             },
             {
                 stt: '2010004',
                 guest: 'Nguyễn Ái Vân',
                 service:'Khám tai mũi họng',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUsedPoint value={'Đã sử dụng'}/>,
                 source:'Hệ thống'
             },
             {
                 stt: '2010005',
                 guest: 'Trần Thị Ái Vân',
                 service:'Khám hô hấp',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUsedPoint value={'Đã sử dụng'}/>,
                 source:'Kiosk'
             },
             {
                 stt: '2010006',
                 guest: 'Lê Huỳnh Nghĩa',
                 service:'Khám tổng quát',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUsedPoint value={'Đã sử dụng'}/>,
                 source:'Hệ thống'
             },
             {
                 stt: '2010007',
                 guest: 'Lê Huỳnh Đức',
                 service:'Khám tai mũi họng',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUsedPoint value={'Đã sử dụng'}/>,
                 source:'Kiosk'
             },
             {
                 stt: '2010008',
                 guest: 'Phạm Văn Mạnh',
                 service:'Khám tổng quát',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUsedPoint value={'Đã sử dụng'}/>,
                 source:'Hệ thống'
             },
             {
                 stt: '2010009',
                 guest: 'Lê Thị Cẩm Tiên',
                 service:'Khám tai mũi họng',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUsedPoint value={'Đã sử dụng'}/>,
                 source:'Hệ thống'
             },
           
           
               
                 
                 
         ]

         const dataNumberLevelUnActive= [

                {
                    stt: '2010001',
                    guest: 'Lê Huỳnh Ái Vân',
                    service:'Khám tim mạch',
                    time1:'14:35 - 07/11/2021',
                    time2: '14:35 - 12/11/2021',
                    state: <ServiceUnactivePoint value={'Bỏ qua'}/>,
                    source:'Kiosk'
                },
                {
                 stt: '2010002',
                 guest: 'Huỳnh Ái Vân',
                 service:'Khám sản - Phụ Khoa',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUnactivePoint value={'Bỏ qua'}/>,
                 source:'Kiosk'
             },
             {
                 stt: '2010003',
                 guest: 'Lê Ái Vân',
                 service:'Khám răng hàm mặt',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUnactivePoint value={'Bỏ qua'}/>,
                 source:'Hệ thống'
             },
             {
                 stt: '2010004',
                 guest: 'Nguyễn Ái Vân',
                 service:'Khám tai mũi họng',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUnactivePoint value={'Bỏ qua'}/>,
                 source:'Hệ thống'
             },
             {
                 stt: '2010005',
                 guest: 'Trần Thị Ái Vân',
                 service:'Khám hô hấp',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUnactivePoint value={'Bỏ qua'}/>,
                 source:'Kiosk'
             },
             {
                 stt: '2010006',
                 guest: 'Lê Huỳnh Nghĩa',
                 service:'Khám tổng quát',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUnactivePoint value={'Bỏ qua'}/>,
                 source:'Hệ thống'
             },
             {
                 stt: '2010007',
                 guest: 'Lê Huỳnh Đức',
                 service:'Khám tai mũi họng',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUnactivePoint value={'Bỏ qua'}/>,
                 source:'Kiosk'
             },
             {
                 stt: '2010008',
                 guest: 'Phạm Văn Mạnh',
                 service:'Khám tổng quát',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUnactivePoint value={'Bỏ qua'}/>,
                 source:'Hệ thống'
             },
             {
                 stt: '2010009',
                 guest: 'Lê Thị Cẩm Tiên',
                 service:'Khám tai mũi họng',
                 time1:'14:35 - 07/11/2021',
                 time2: '14:35 - 12/11/2021',
                 state: <ServiceUnactivePoint value={'Bỏ qua'}/>,
                 source:'Hệ thống'
             },
           
           
               
                 
                 
         ]




        const [data,setData] = useState(dataNumberLevel)
    
    const optionService = [
        'Tất cả', 'Khám sản - Phụ khoa', 'Khám răng hàm mặt','Khám tai mũi họng'
      ];

      const handleDropdownValue = (e)=>{
            
        e.value == 'Đang chờ' && setData(dataNumberLevelWait)
        e.value == 'Đã sử dụng' && setData(dataNumberLevelUsed)
        e.value == 'Bỏ qua' && setData(dataNumberLevelUnActive)
        e.value == 'Tất cả' && setData(dataNumberLevel)
         
   }
   const defaultOptionService = optionService[0];




   const optionState = [
    'Tất cả', 'Đang chờ', 'Đã sử dụng','Bỏ qua'
  ];
  
  const optionSource = [
    'Tất cả', 'Kiosk', 'Hệ thống'
  ];


        





        

        
        const [showMore , setShowMore] = useState(false)

        const [search , setSeatch] = useState('')

        const [startDate, setStartDate] = useState(new Date());


        let handleSend = (item)=>{
                
                props.parentCallbackNL(item);
        }





  return <div className="NumberLevel">

    
            <div className="ServiceInfor">

            <div className="ServiceInforTitle">
                <span className="ServiceTItle">Cấp số</span>   
                <span className="Servicepointer">{'>'}  </span>
                <span className="ListService">Danh sách cấp số</span>   
            </div>

            <div className="ServiceInforUser">
                <BellandUser/>
            </div>


            </div>


            <div className="Equiment__container">


   
    
                <div className="ServiceDropdownsSearchTItle">
                        Quản lý cấp số
                </div>
                    
                <div className="ServiceDropdownsSarch">

                        <div className="ServiceDropdownsItem1">
                                <div className="ServiceDropdownsSarchFirst">
                                        <div className="ServiceDropdownsSarchFirstName">Tên dịch vụ</div>
                                        <div className="ServiceDropdowns_1">
                                        <Dropdown options={optionService} 
                                                
                                                onChange={(e)=>handleDropdownValue(e)} 
                                                value={defaultOptionService} placeholder="Select an option" />
                                        </div>
                                </div>
                                <div className="ServiceDropdownsSarchFirst">
                                        <div className="ServiceDropdownsSarchFirstName">Tình trạng</div>
                                        <div className="ServiceDropdowns_1">
                                        <Dropdown options={optionState} 
                                                
                                                onChange={(e)=>handleDropdownValue(e)} 
                                                value={defaultOptionService} placeholder="Select an option" />
                                        </div>
                                </div>

                                <div className="ServiceDropdownsSarchFirst">
                                        <div className="ServiceDropdownsSarchFirstName">Nguồn cấp</div>
                                        <div className="ServiceDropdowns_1">
                                        <Dropdown options={optionSource} 
                                                
                                                onChange={(e)=>handleDropdownValue(e)} 
                                                value={defaultOptionService} placeholder="Select an option" />
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
                                    <span> STT </span>    
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                    <span> Tên khách hàng </span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                    <span> Tên dịch vụ </span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                    <span> Thời gian cấp</span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                    <span> Hạn sử dụng </span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                    <span> Trạng thái </span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                    <span> Nguồn cấp </span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                    <span>   </span>      
                            </div>
                    </div>
                    
                
                
                        
                        {
                            data.map ( (item,index)=>
                            

                            <div className="ServiceTableDetailItem" key={index}>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> {item.stt}</span>    
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> {item.guest}</span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> {item.service}</span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> {item.time1}</span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span>{item.time2}</span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        
                                        <span> {item.state}</span>
                                        
                                        
                                        
                                            
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span>  {item.source}  </span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span 
                                                onClick={()=> handleSend(item)}
                                        > <Link to="/number-level/detail-number-level">Chi tiết</Link>  </span>      
                                </div>
                            </div>
                            
                            )
                        }
                        
                        
                     
                            
                            

                    
                
                    


                    
                





                </div>


            </div>

            <Link to="/number-level/add-number-level">
                <div className="ServiceAdd">
                        <div className="ServiceAddIMG">
                                <img src={addSquare} alt="" />  
                        </div>
                        <span>Cấp số mới</span>
            </div></Link>


            <div className="ServiceChosePage">
                                <ChosePage/>
            </div>


  </div>;
}
