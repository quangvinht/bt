
import './DetailService.css'
import BellandUser from '../BellandUser'
import searchlogo from '../../style/img/search.svg'
import {Link} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Vector from '../../style/img/Vector.svg'
import addSquare from '../../style/img/add-square.svg'
import ChosePage from '../ChosePage'
import updateSquare from '../../style/img/updateSquare.svg'
import backSquare from '../../style/img/backSquare.svg'

import "react-datepicker/dist/react-datepicker.css";

export default function DetailService() {

    const options = [
        'Tất cả', 'Đã hoàn thành', 'Đã thực hiện','Vắng'
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
                
        const ServiceProcessPoint = ({value})=>{
            return (
                    <><span className="ProcessPoint"></span><span>{value}</span></>
            )
    }  
                     
                
        

        const ServiceStopPoint = ({value})=>{
              return (  <><span className="StopPoint"></span><span>{value}</span></>
              
              ) 
        }

        const dataServiceTableDetail = [

              {
                    numberOrder: '2010001',
                    state:<ServiceActivePoint value={'Đã hoàn thành'}/>
              },
              {
                    numberOrder: '2010002',
                    state:<ServiceActivePoint value={'Đã hoàn thành'}/>
              },
              {
                    numberOrder: '2010003',
                    state:<ServiceProcessPoint value={'Đang thực hiện'}/>
              },
              {
                    numberOrder: '2010004',
                    state:<ServiceStopPoint value={'Vắng'}/>
              },
              {
                    numberOrder: '2010005',
                    state:<ServiceActivePoint value={'Đã hoàn thành'}/>
              },
              {
                    numberOrder: '2010006',
                    state:<ServiceProcessPoint value={'Đang thực hiện'}/>
              },
              {
                    numberOrder: '2010007',
                    state:<ServiceStopPoint value={'Vắng'}/>
              },
              {
                    numberOrder: '2010008',
                    state:<ServiceActivePoint value={'Đã hoàn thành'}/>
              }
                
                
        ]

        const [startDate, setStartDate] = useState(new Date());


        const [search , setSeatch] = useState('')


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
                                                <input type="text" /> <span>đến</span> <input type="text" />
                                        </div>
                                </div>
                                <div className="DetailService__container_items__item_1">
                                        <span>Prefix: </span>
                                        <div className="DetailService__container_items__item_1__inputs">
                                               <input type="text" className='prefix' />
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
                                        dataServiceTableDetail.map ((item,index)=> 
                                            <div className="DetailService__container__table__detail__infor" key={index}>
                                                    <div className="DetailService__container__table__detail__title__item">
                                                            <span>{item.numberOrder}</span>
                                                    </div>
                                                    <div className="DetailService__container__table__detail__title__item">
                                                            <span>{item.state}</span>
                                                    </div>

                                            </div>
                                        )
                                    }

                                   


        
        

           






   
                                </div>    


                                <div className="DetailService__container__Chose-page">
                                        <ChosePage/>
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
