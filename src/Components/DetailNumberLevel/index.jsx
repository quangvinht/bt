
import './DetailNumberLevel.css'
import BellandUser from '../BellandUser'
import searchlogo from '../../style/img/search.svg'
import {Link} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Vector from '../../style/img/Vector.svg'
import backSquare from '../../style/img/backSquare.svg'
import ChosePage from '../ChosePage'




export default function DetailNumberLevel(item) {

        
      const dataRecive = item.value
       console.log(dataRecive);


  return <div className="DetailNumberLevel">

                <div className="ServiceInfor">

                <div className="ServiceInforTitle">
                    <span className="ServiceTItle">Thiết bị</span>   
                    <span className="Servicepointer">{'>'}  </span>
                    <span className="ServiceTItle">Danh sách cấp số</span>   
                    <span className="Servicepointer">{'>'}  </span>
                    <span className="ListService">Chi tiết</span>   
                </div>

                <div className="ServiceInforUser">
                    <BellandUser/>
                </div>


                </div>

                <div className="ServiceDropdownsSearchTItle">
                        Quản lý cấp số
                </div>

                <div className="DetailNumberLevel__container">
                    <div className="DetailNumberLevel__container__title">
                        Thông tin cấp số
                    </div>
                    <div className="DetailNumberLevel__container__list">
                        <div className="DetailNumberLevel__container__items">

                                <div className="DetailNumberLevel__container__item">
                                        <span>Họ tên:</span>
                                        <span>{dataRecive.guest}</span>    
                                </div>
                                <div className="DetailNumberLevel__container__item">
                                        <span>Tên dịch vụ:</span>
                                        <span>{dataRecive.service}</span>    
                                </div>
                                <div className="DetailNumberLevel__container__item">
                                        <span>Số thứ tự:</span>
                                        <span>{dataRecive.stt}</span>    
                                </div>
                                <div className="DetailNumberLevel__container__item">
                                        <span>Thời gian cấp:</span>
                                        <span>{dataRecive.time1}</span>    
                                </div>
                                <div className="DetailNumberLevel__container__item">
                                        <span>Hạn sử dụng:</span>
                                        <span>{dataRecive.time2}</span>    
                                </div>
                        </div>
                        <div className="DetailNumberLevel__container__items">

                                <div className="DetailNumberLevel__container__item">
                                        <span>Nguồn cấp:</span>
                                        <span>{dataRecive.source}</span>    
                                </div>
                                <div className="DetailNumberLevel__container__item">
                                        <span>Trạng thái:</span>
                                        <span>
                                                {dataRecive.state}
                                        </span>    
                                </div>
                                <div className="DetailNumberLevel__container__item">
                                        <span>Số điện thoại:</span>
                                        <span>0948523623</span>    
                                </div>
                                <div className="DetailNumberLevel__container__item">
                                        <span>Địa chỉ Email:</span>
                                        <span>nguyendung@gmail.com</span>    
                                </div>
                                
                        </div>
                    </div>
                </div>
                
              <Link to="/number-level"><div className="ServiceAdd">
                                        <div className="ServiceAddIMG">
                                                <img src={backSquare} alt="" />  
                                        </div>
                                        <span>Quay lại</span>
                </div></Link> 







  </div>;
}
