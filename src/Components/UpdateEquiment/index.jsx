import React,{ useState} from 'react';
import './UpdateEquiment.css'
import BellandUser from '../BellandUser'
import Dropdown from 'react-dropdown';
import {Link} from 'react-router-dom'

export default function UpdateEquiment() {


    const [codeEquiment , setCodeEquiment] = useState('KIO_01')
    const [nameEquiment , setNameEquiment] = useState('Kiosk')
    

    const [ipEquiment , setIpEquiment] = useState('128.172.308')

    const [typeEquiment , setTypeEquiment] = useState()
    const [userEquiment , setUserEquiment] = useState('Linhkyo011')
    const [passwordEquiment , setPassWordEquiment] = useState('CMS')
   



    const options = [
        'Kios', 'Displaycounter'
      ];

      const handleDropdownValue = (e)=>{
            
        console.log(e.value);
         
   }
   const defaultOption = options[0];




  return <div className="UpdateEquiment">

            
                <div className="ServiceInfor">

                <div className="ServiceInforTitle">
                    <span className="ServiceTItle">Thiết bị</span>   
                    <span className="Servicepointer">{'>'}  </span>
                    <span className="ServiceTItle">Danh sách thiết bị</span>   
                    <span className="Servicepointer">{'>'}  </span>
                    <span className="ListService">Cập nhập thiết bị</span>   
                </div>

                <div className="ServiceInforUser">
                    <BellandUser/>
                </div>


                </div>

                <div className="AddService_Title">
                        Quản lý thiết bị
                </div>

                <div className="AddEquiment__container">


                    <div className="AddService_Container">
                <div className="AddService_Container__Title">
                    Thông tin thiết bị
                </div>

                <div className="AddService_Container__Inputs">
                    <div className="AddService_Container__Inputs__1">


                        <div className="AddService_Container__Inputs__ServiceCode">
                                        <div className="AddService_Container__Inputs__ServiceCode__Title">
                                            Mã thiết bị: <span>*</span>
                                        </div>
                                        <div className="AddService_Container__Inputs__ServiceCode__Input">
                                            <input type="text" value={codeEquiment} onChange={ e=> setCodeEquiment(e.target.value)} 
                                                placeholder="Nhập mã thiết bị"
                                            />
                                        </div>
                        </div>
                        <div className="AddService_Container__Inputs__ServiceCode">
                                        <div className="AddService_Container__Inputs__ServiceCode__Title">
                                            Tên thiết bị: <span>*</span>
                                        </div>
                                        <div className="AddService_Container__Inputs__ServiceCode__Input">
                                            <input type="text" value={nameEquiment} onChange={ e=> setNameEquiment(e.target.value)}  
                                                placeholder="Nhập tên thiết bị"
                                            />
                                        </div>
                        </div>
                        <div className="AddService_Container__Inputs__ServiceCode">
                                        <div className="AddService_Container__Inputs__ServiceCode__Title">
                                            Địa chỉ IP: <span>*</span>
                                        </div>
                                        <div className="AddService_Container__Inputs__ServiceCode__Input">
                                            <input type="text" value={ipEquiment} onChange={ e=> setIpEquiment(e.target.value)}  
                                            
                                            placeholder="Nhập dịa chỉ IP"
                                            />
                                        </div>
                        </div>


                    </div>

                    <div className="AddService_Container__Inputs__1">


                        <div className="AddService_Container__Inputs__ServiceCode AddService_Container__Inputs__ServiceCode__Equiment_dropdown">
                                        <div className="AddService_Container__Inputs__ServiceCode__Title">
                                        Loại thiết bị: <span>*</span>
                                        </div>
                                        <div className="AddService_Container__Inputs__ServiceCode__Input">
                                        <Dropdown options={options} 
                                        value = {defaultOption}
                                        onChange={(e)=>handleDropdownValue(e)} 
                                        placeholder="Chọn loại thiết bị" />
                                        </div>
                        </div>
                        <div className="AddService_Container__Inputs__ServiceCode">
                                        <div className="AddService_Container__Inputs__ServiceCode__Title">
                                        Tên đăng nhập: <span>*</span>
                                        </div>
                                        <div className="AddService_Container__Inputs__ServiceCode__Input">
                                            <input type="text" value={userEquiment} onChange={ e=> setUserEquiment(e.target.value)}  
                                                placeholder="Nhập tài khoản"
                                            />
                                        </div>
                        </div>
                        <div className="AddService_Container__Inputs__ServiceCode">
                                        <div className="AddService_Container__Inputs__ServiceCode__Title">
                                        Mật khẩu: <span>*</span>
                                        </div>
                                        <div className="AddService_Container__Inputs__ServiceCode__Input">
                                            <input type="text" value={passwordEquiment} onChange={ e=> setPassWordEquiment(e.target.value)}  
                                                placeholder="Nhập mật khẩu"
                                            
                                            />
                                        </div>
                        </div>


                    </div>
                            
                </div>


                <div className="AddService_Container__Rules">

                        <div className="AddService_Container__Inputs__ServiceCode">
                                        <div className="AddService_Container__Inputs__ServiceCode__Title">
                                        Dịch vụ sử dụng: <span>*</span>
                                        </div>
                                        <div className="AddService_Container__Inputs__ServiceCode__Input">
                                            <div className="UpdateEquiment__Service_use">
                                                    <div className="UpdateEquiment__Service_use__item">
                                                         <span>Khám tim mạch </span> <span>&times;</span>
                                                    </div>
                                                    <div className="UpdateEquiment__Service_use__item">
                                                         <span>Khám sản phụ khoa</span> <span>&times;</span>
                                                    </div>
                                                    <div className="UpdateEquiment__Service_use__item">
                                                         <span>Khám răng hàm mặt </span> <span>&times;</span>
                                                    </div>
                                                    <div className="UpdateEquiment__Service_use__item">
                                                         <span>Khám tai mũi họng </span> <span>&times;</span>
                                                    </div>
                                                    <div className="UpdateEquiment__Service_use__item">
                                                         <span>Khám hô hấp </span> <span>&times;</span>
                                                    </div>
                                                    <div className="UpdateEquiment__Service_use__item">
                                                         <span>Khám tổng quát </span> <span>&times;</span>
                                                    </div>
                                            </div>
                                        </div>
                        </div>

                </div>


                <div className="AddService_Container__More">
                    <div className="AddService_Container__Inputs__ServiceCode__Title">
                    <span>*</span> <span className="AddService_Container__More_require">Là trường thông tin bắt buộc</span> 
                    </div>
                </div>

                    </div>



                </div>


                <div className="AddService_Button">
                <div className="AddService_Button__cancle">
                <Link to="/equimeequimentnt/detail"><button>Hủy bỏ</button></Link>
                </div>
                <div className="AddService_Button__addService">
                <button>Cập nhập</button>
                </div>
                </div>






        </div>;
}
