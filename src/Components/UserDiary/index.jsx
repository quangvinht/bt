import React,{ useState} from 'react'
import "./UserDiary.css"
import BellandUser from '../BellandUser'
import searchlogo from '../../style/img/search.svg'
import Dropdown from 'react-dropdown';
import DatePicker from "react-datepicker";
import Vector from '../../style/img/Vector.svg'
import ChosePage from '../ChosePage'



export default function UserDiary() {

   
   const [startDate, setStartDate] = useState(new Date());

   const [search , setSeatch] = useState('')


   const dataUserDiary = [

   {
       username: 'tuyetnguyen@12',
       time:'01/12/2021 15:12:17',
       ip:'192.168.3.1',
       operation:'Cập nhật thông tin dịch vụ DV_01'
   },
   {
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
{
    username: 'tuyetnguyen@12',
    time:'01/12/2021 15:12:17',
    ip:'192.168.3.1',
    operation:'Cập nhật thông tin dịch vụ DV_01'
},
      
      
]



    return (
        <div className="UserDiary">
                <div className="ServiceInfor">

                    <div className="ServiceInforTitle">
                        <span className="ServiceTItle">Cài đặt hệ thống</span>   
                        <span className="Servicepointer">{'>'}  </span>
                        <span className="ListService">Nhật ký hoạt động</span>   
                    </div>

                    <div className="ServiceInforUser">
                        <BellandUser/>
                    </div>


                </div>



                <div className="UserDiary__Table">

                <div className="ServiceDropdownsSarch">

                        <div className="ServiceDropdownsItem1">
                                
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


                 <div className="UserDiary_Table_Data">

                 

                    <div className="DetailService__container__table__detail">

                        <div className="DetailService__container__table__detail__title">
                                <div className="DetailService__container__table__detail__title__item">
                                        <span>Tên đăng nhập</span>
                                </div>
                                <div className="DetailService__container__table__detail__title__item">
                                        <span>Thời gian tác động</span>
                                </div>
                                <div className="DetailService__container__table__detail__title__item">
                                        <span>IP thực hiện</span>
                                </div>
                                <div className="DetailService__container__table__detail__title__item">
                                        <span>Thao tác thực hiện</span>
                                </div>
                        </div>



                        
                            

                                {
                                    dataUserDiary.map ( (item,index)=>
                                    
                                            <div className="DetailService__container__table__detail__infor" key={index}>
                                                    <div className="DetailService__container__table__detail__title__item">
                                                            <span>{item.username}</span>
                                                    </div>
                                                    <div className="DetailService__container__table__detail__title__item">
                                                            <span>{item.time}</span>
                                                    </div>
                                                    <div className="DetailService__container__table__detail__title__item">
                                                            <span>{item.ip}</span>
                                                    </div>
                                                    <div className="DetailService__container__table__detail__title__item">
                                                    

                                                                <span >
                                                                    {item.operation}
                                                                </span>
                                                        
                                                    </div>

                                        </div>
                                    
                                    )
                                }

                               
                                
                              
                        



                    </div>   






                 </div>


                 <div className="ServiceChosePage">
                   <ChosePage/>
                </div>






                </div>
        </div>
    )
}
