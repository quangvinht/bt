
import './Equiment.css'
import BellandUser from '../BellandUser'
import searchlogo from '../../style/img/search.svg'
import {Link} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Vector from '../../style/img/Vector.svg'
import addSquare from '../../style/img/add-square.svg'
import ChosePage from '../ChosePage'

export default function Equiment() {

    const options = [
        'Tất cả', 'Hoạt động', 'Ngừng hoạt động'
      ];

      const handleDropdownValue = (e)=>{
            
        console.log(e.value);
         
   }
   const defaultOption = options[0];

   const optionsConnect = [
    'Tất cả', 'Kết nối', 'Mất kết nối'
  ];

  const handleDropdownValueConnect = (e)=>{
        
    console.log(e.value);
     
}
        const defaultOptionConnect = optionsConnect[0];



        const ServiceActivePoint = ({value})=>{
                return (
                        <><span className="ActivePoint"></span><span>{value}</span></>
                )
        }  
                
                       
                
        

        const ServiceUnactivePoint = ({value})=>{
              return (  <><span className="UnActivePoint"></span><span>{value}</span></>
              
              ) 
        }

        const dataEquiment = [

                {
                        code : 'KIO_01',
                        name: 'Kiosk',
                        ip : '192.168.1.10',
                        state : <ServiceUnactivePoint value={'Ngưng hoạt động'}/>,
                        connect:<ServiceUnactivePoint value={'Mất kết nối'}/>,
                        serviceUse:'Khám tim mạch, Khám mắt...'
                },
                {
                    code : 'KIO_01',
                    name: 'Kiosk',
                    ip : '192.168.1.10',
                    state : <ServiceActivePoint value={' Hoạt động'}/>,
                    connect:<ServiceActivePoint value={' Kết nối'}/>,
                    serviceUse:'Khám tim mạch, Khám mắt...'
                },
                {
                    code : 'KIO_01',
                    name: 'Kiosk',
                    ip : '192.168.1.10',
                    state : <ServiceActivePoint value={' Hoạt động'}/>,
                    connect:<ServiceUnactivePoint value={'Mất kết nối'}/>,
                    serviceUse:'Khám tim mạch, Khám mắt...'
                },
                {
                    code : 'KIO_01',
                    name: 'Kiosk',
                    ip : '192.168.1.10',
                    state : <ServiceUnactivePoint value={'Ngưng hoạt động'}/>,
                    connect:<ServiceActivePoint value={' Kết nối'}/>,
                    serviceUse:'Khám tim mạch, Khám mắt...'
                },
                {
                    code : 'KIO_01',
                    name: 'Kiosk',
                    ip : '192.168.1.10',
                    state : <ServiceActivePoint value={' Hoạt động'}/>,
                    connect:<ServiceUnactivePoint value={'Mất kết nối'}/>,
                    serviceUse:'Khám tim mạch, Khám mắt...'
                },
                {
                    code : 'KIO_01',
                    name: 'Kiosk',
                    ip : '192.168.1.10',
                    state : <ServiceActivePoint value={' Hoạt động'}/>,
                    connect:<ServiceActivePoint value={' Kết nối'}/>,
                    serviceUse:'Khám tim mạch, Khám mắt...'
                },
                {
                    code : 'KIO_01',
                    name: 'Kiosk',
                    ip : '192.168.1.10',
                    state : <ServiceUnactivePoint value={'Ngưng hoạt động'}/>,
                    connect:<ServiceActivePoint value={' Kết nối'}/>,
                    serviceUse:'Khám tim mạch, Khám mắt...'
                },
                {
                    code : 'KIO_01',
                    name: 'Kiosk',
                    ip : '192.168.1.10',
                    state : <ServiceActivePoint value={' Hoạt động'}/>,
                    connect:<ServiceActivePoint value={' Kết nối'}/>,
                    serviceUse:'Khám tim mạch, Khám mắt...'
                },
                {
                    code : 'KIO_01',
                    name: 'Kiosk',
                    ip : '192.168.1.10',
                    state : <ServiceActivePoint value={' Hoạt động'}/>,
                    connect:<ServiceUnactivePoint value={'Mất kết nối'}/>,
                    serviceUse:'Khám tim mạch, Khám mắt...'
                },
          
          
              
                
                
        ]

        
        const [showMore , setShowMore] = useState(false)

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
                        dataEquiment.map( (item,index)=>
                        
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
                                        <span> {item.state}</span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span>{item.connect} </span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        {
                                            !showMore ?(
                                                <span> {item.serviceUse} <br /> 
                                        
                                        
                                        
                                            <a href="" onClick={ () => setShowMore(!showMore) }>Xem thêm</a> 
                                            
                                            </span>  
                                            ): ( <span>Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt,
                                                Khám tai mũi họng, Khám hô hấp, Khám tổng quát</span>)
                                        }    
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> <Link to="/equimeequimentnt/detail">Chi tiết</Link>  </span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> <a href="">Cập nhật</a>  </span>      
                                </div>
                        </div>
                        
                        
                        )
                    }
                           
                             
                            
    
                     
                   
                    
    
    
                       
                
    
    
    
    
    
                </div>


            </div>

             <Link to="/equiment/add-equiment"><div className="ServiceAdd">
                 <div className="ServiceAddIMG">
                         <img src={addSquare} alt="" />  
                </div>
                <span>Thêm thiết bị</span>
            </div></Link>
          

            <div className="ServiceChosePage">
                                <ChosePage/>
            </div>

    </div>
    
    )}
