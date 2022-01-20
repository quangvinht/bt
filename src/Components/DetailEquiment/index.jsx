import React,{ useState} from 'react';
import BellandUser from '../BellandUser'
import Dropdown from 'react-dropdown';
import {Link} from 'react-router-dom'
import UpdateSquare from '../../style/img/updateSquare.svg'

import './DetailEquiment.css'



export default function DetailEquiment() {
  return <div className="DetailEquiment">

                <div className="ServiceInfor">

                <div className="ServiceInforTitle">
                    <span className="ServiceTItle">Thiết bị</span>   
                    <span className="Servicepointer">{'>'}  </span>
                    <span className="ServiceTItle">Danh sách thiết bị</span>   
                    <span className="Servicepointer">{'>'}  </span>
                    <span className="ListService">Chi tiết thiết bị</span>   
                </div>

                <div className="ServiceInforUser">
                    <BellandUser/>
                </div>


                </div>

                <div className="AddService_Title">
                        Quản lý thiết bị
                </div>

                <div className="DetailEquiment__container">
                    <div className="DetailEquiment__container__title">
                            Thông tin thiết bị
                    </div>
                    <div className="DetailEquiment__container__list">
                            <div className="DetailEquiment__container__item">
                                    <div className="DetailEquiment__container__item__spans">
                                            <span>Mã thiết bị:</span>
                                            <span>KIO_01</span>
                                    </div>
                                    <div className="DetailEquiment__container__item__spans">
                                            <span>Tên thiết bị:</span>
                                            <span>Kiosk</span>
                                    </div>
                                    <div className="DetailEquiment__container__item__spans">
                                            <span>Địa chỉ IP:</span>
                                            <span>128.172.308</span>
                                    </div>
                                    
                            </div>
                            <div className="DetailEquiment__container__item">
                                    <div className="DetailEquiment__container__item__spans">
                                            <span>Loại thiết bị:</span>
                                            <span>Kiosk</span>
                                    </div>
                                    <div className="DetailEquiment__container__item__spans">
                                            <span>Tên đăng nhập:</span>
                                            <span>Linhkyo011</span>
                                    </div>
                                    <div className="DetailEquiment__container__item__spans">
                                            <span>Mật khẩu:</span>
                                            <span>CMS</span>
                                    </div>
                                    
                            </div>
                    </div>

                    <div className="DetailEquiment__container__service_use">
                            <span>Dịch vụ sử dụng:</span>
                            <span>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt,
                                 Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</span>
                    </div>



                </div>



               <Link to="/equimeequimentnt/detail/update-equiment"><div className="ServiceAdd">
                 <div className="ServiceAddIMG">
                         <img src={UpdateSquare} alt="" />  
                </div>
                <span>Cập nhật thiết bị</span>
                                
                 </div></Link> 


        </div>;
}
