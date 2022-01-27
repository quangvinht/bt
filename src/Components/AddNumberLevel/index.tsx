import React,{ useState} from 'react';
import './AddNumberLevel.css'
import BellandUser from '../BellandUser'
import Dropdown from 'react-dropdown';
import {Link} from 'react-router-dom'

export default function AddNumberLevel() {

    const options = [
        'Khám tim mạch', 'Khám sản - Phụ khoa','Khám răng hàm mặt','Khám tai mũi họng'
      ];

      const handleDropdownValue = (e:any)=>{
            
        console.log(e.value);
         
   }
   const [showModal , setShowModal] = useState(false);
   


  return <div className="AddNumberLevel">
                
                
                
                
                <div className="ServiceInfor">

                        <div className="ServiceInforTitle">
                            <span className="ServiceTItle">Cấp số</span>   
                            <span className="Servicepointer">{'>'}  </span>
                            <span className="ServiceTItle">Danh sách cấp số</span>   
                            <span className="Servicepointer">{'>'}  </span>
                            <span className="ListService">Cấp số mới</span>   
                        </div>

                        <div className="ServiceInforUser">
                            <BellandUser/>
                        </div>


                </div>

                <div className="AddService_Title">
                        Quản lý cấp số
                </div>    

                <div className="AddNumberLevel__container">
                        <div className="AddNumberLevel__container__title">
                                 CẤP SỐ MỚI
                        </div>
                        <div className="AddNumberLevel__container__serviceguset">
                                Dịch vụ khách hàng lựa chọn
                        </div>
                        <div className="AddNumberLevel__container__dropdown">
                                        <Dropdown options={options} 
                                            
                                            onChange={(e)=>handleDropdownValue(e)} 
                                             placeholder="Chọn dịch vụ" />
                        </div>
                        <div className="AddNumberLevel__container__button">
                            <Link to="/number-level"><button> <span>Hủy bỏ</span>    </button></Link>
                            <button onClick={()=>setShowModal(true)}> <p>In số</p>   </button>
                        </div>
                        <div>

                        </div>

                </div>
                
                {
                    showModal && (

                        <div className="AddNumberLevel__modal">
                        <div className="AddNumberLevel__modal__item">
                            <div className="AddNumberLevel__modal__item_times"
                                onClick={()=>setShowModal(false)}
                            >
                                    &times;
                            </div>
                            <div className="AddNumberLevel__modal__item_numberproduct">
                                Số thứ tự được cấp
                            </div>
                            <div className="AddNumberLevel__modal__item_number">
                                    2001201
                            </div>
                            <div className="AddNumberLevel__modal__item__servoce">
                                 DV: Khám răng hàm mặt <b>(tại quầy số 1)</b>
                            </div>
                            <div className="AddNumberLevel__modal__item__footer">
                                        <span>
                                        Thời gian cấp: 09:30 11/10/2021
                                        </span>
                                        <span>
                                            <span>Hạn sử dụng: </span>  17:30 11/10/2021
                                        </span>
                            </div>
                           
                        </div>
                </div>

                    )
                }


  </div>;
}
