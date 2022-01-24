import React,{ useState} from 'react';
import './AddUserList.css';
import BellandUser from '../BellandUser'
import Dropdown from 'react-dropdown';
import {Link} from 'react-router-dom'


export default function AddUserList() {

    const [ userName , setuserName] = useState()

    const [ number, setNumber] = useState()
    const [ email, setEmail] =  useState()
    const [userEquiment , setUserEquiment] = useState()
    const [password ,setPassword] = useState('123456789')
    const [repassword ,setRePassword] = useState('123456789')
    

    const optionsRole = [
        'Kế toán', 'Quản lý' , 'Admin'
      ];

      const optionState = [
        'Tất cả','Hoạt động', 'Ngừng hoạt động '
      ];

      const handleDropdownValue = (e)=>{
            
        console.log(e.value);
         
   }
   


  return <div className="AddUserList">


            <div className="ServiceInfor">

            <div className="ServiceInforTitle">
                <span className="ServiceTItle">Cài đặt hệ thống</span>   
                <span className="Servicepointer">{'>'}  </span>
                <span className="ServiceTItle">Quản lý tài khoản</span>   
                <span className="Servicepointer">{'>'}  </span>
                <span className="ListService">Thêm tài khoản</span>   
            </div>

            <div className="ServiceInforUser">
                <BellandUser/>
            </div>


            </div>

            <div className="AddService_Title">
                Quản lý tài khoản
            </div>

            <div className="AddEquiment__container">


                <div className="AddService_Container">
            <div className="AddService_Container__Title">
                Thông tin tài khoản
            </div>

            <div className="AddService_Container__Inputs">
                <div className="AddService_Container__Inputs__1">


                    <div className="AddService_Container__Inputs__ServiceCode">
                                    <div className="AddService_Container__Inputs__ServiceCode__Title">
                                        Họ tên: <span>*</span>
                                    </div>
                                    <div className="AddService_Container__Inputs__ServiceCode__Input">
                                        <input type="text" value={userName} onChange={ e=> setuserName(e.target.value)} 
                                            placeholder="Nhập họ tên"
                                        />
                                    </div>
                    </div>
                    <div className="AddService_Container__Inputs__ServiceCode">
                                    <div className="AddService_Container__Inputs__ServiceCode__Title">
                                        Số điện thoại: <span>*</span>
                                    </div>
                                    <div className="AddService_Container__Inputs__ServiceCode__Input">
                                        <input type="text" value={number} onChange={ e=> setNumber(e.target.value)}  
                                            placeholder="Nhập số điện thoại"
                                        />
                                    </div>
                    </div>
                    <div className="AddService_Container__Inputs__ServiceCode">
                                    <div className="AddService_Container__Inputs__ServiceCode__Title">
                                        Email: <span>*</span>
                                    </div>
                                    <div className="AddService_Container__Inputs__ServiceCode__Input">
                                        <input type="text" value={email} onChange={ e=> setEmail(e.target.value)}  
                                        
                                        placeholder="Nhập dịa chỉ IP"
                                        />
                                    </div>
                    </div>
                    <div className="AddService_Container__Inputs__ServiceCode AddService_Container__Inputs__ServiceCode__Equiment_dropdown">
                                    <div className="AddService_Container__Inputs__ServiceCode__Title">
                                    Vai trò: <span>*</span>
                                    </div>
                                    <div className="AddService_Container__Inputs__ServiceCode__Input">
                                    <Dropdown options={optionsRole} 
                                    
                                    onChange={(e)=>handleDropdownValue(e)} 
                                    placeholder="Chọn vai trò" />
                                    </div>
                    </div>


                </div>

                <div className="AddService_Container__Inputs__1 AddService_Container__Inputs__1--fix">


                   
                    <div className="AddService_Container__Inputs__ServiceCode">
                                    <div className="AddService_Container__Inputs__ServiceCode__Title">
                                    Tên đăng nhập: <span>*</span>
                                    </div>
                                    <div className="AddService_Container__Inputs__ServiceCode__Input">
                                        <input type="text" value={userEquiment} onChange={ e=> setUserEquiment(e.target.value)}  
                                            placeholder="Nhập tên đăng nhập"
                                        />
                                    </div>
                    </div>
                    <div className="AddService_Container__Inputs__ServiceCode">
                                    <div className="AddService_Container__Inputs__ServiceCode__Title">
                                    Mật khẩu: <span>*</span>
                                    </div>
                                    <div className="AddService_Container__Inputs__ServiceCode__Input">
                                        <input type="password" value={password} onChange={ e=> setPassword(e.target.value)}  
                                            placeholder="Nhập mật khẩu"
                                        
                                        />
                                    </div>
                    </div>
                    <div className="AddService_Container__Inputs__ServiceCode">
                                    <div className="AddService_Container__Inputs__ServiceCode__Title">
                                    Nhập lại mật khẩu: <span>*</span>
                                    </div>
                                    <div className="AddService_Container__Inputs__ServiceCode__Input">
                                        <input type="password" value={repassword} onChange={ e=> setRePassword(e.target.value)}  
                                            placeholder="Nhập mật khẩu"
                                        
                                        />
                                    </div>
                    </div>
                    <div className="AddService_Container__Inputs__ServiceCode AddService_Container__Inputs__ServiceCode__Equiment_dropdown">
                                    <div className="AddService_Container__Inputs__ServiceCode__Title">
                                    Tình trạng: <span>*</span>
                                    </div>
                                    <div className="AddService_Container__Inputs__ServiceCode__Input AddService_Container__Inputs__ServiceCode__Input--fixUser">
                                    <Dropdown options={optionState} 
                                    value={optionState[1]}
                                    
                                    onChange={(e)=>handleDropdownValue(e)} 
                                    placeholder="Chọn vai trò" />
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
            <Link to="/user-list"><button>Hủy bỏ</button></Link>
            </div>
            <div className="AddService_Button__addService">
            <button>Thêm </button>
            </div>
            </div>













  </div>;
}
