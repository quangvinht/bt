import './UserList.css'
import BellandUser from '../BellandUser'
import searchlogo from '../../style/img/search.svg'
import {Link} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Vector from '../../style/img/Vector.svg'
import addSquare from '../../style/img/add-square.svg'
import ChosePage from '../ChosePage'


export default function UserList() {

    const options = [
        'Tất cả', 'Kế toán', 'Quản lý' , 'Admin'
      ];

    const defaultOption = options[0]

      const handleDropdownValue = (e)=>{
            
        console.log(e.value);
         
   }


  const [search , setSeatch] = useState('')


  const ServiceActivePoint = ({value})=>{
    return (
            <><span className="ActivePoint"></span><span>{value}</span></>
    )
}  
    
           
    


const ServiceUnactivePoint = ({value})=>{
  return (  <><span className="UnActivePoint"></span><span>{value}</span></>
  
  ) 
}


const dataUserList = [

    {
            user : 'tuyetnguyen@12',
            name: 'Nguyen Văn A',
            sdt : '0919256712',
            email :'tuyetnguyen123@gmail.com',
            role:'Kế toán',
           state:<ServiceActivePoint value={'Hoạt động'}/>,
            
    },
    {
        user : 'tuyetnguyen@10',
        name: 'Nguyen Văn B',
        sdt : '0919236712',
        email :'tuyetnguyen123@gmail.com',
        role:'Kế toán',
       state:<ServiceActivePoint value={'Hoạt động'}/>,
        
},
{
    user : 'tuyetnguyen@22',
    name: 'Nguyen Văn C',
    sdt : '0919116712',
    email :'tuyetnguyen222@gmail.com',
    role:'Kế toán',
   state:<ServiceUnactivePoint value={'Ngưng hoạt động'}/>,
    
},

{
    user : 'tuyetnguyen@18',
    name: 'Nguyen Văn D',
    sdt : '0919253715',
    email :'tuyetnguyen232@gmail.com',
    role:'Kế toán',
    state:<ServiceActivePoint value={'Hoạt động'}/>,
        
    
},

{
    user : 'tuyetnguyen@19',
    name: 'Nguyen Văn T',
    sdt : '0919233712',
    email :'tuyetnguyen244@gmail.com',
    role:'Kế toán',
    state:<ServiceActivePoint value={'Hoạt động'}/>,
        
    
},

{
    user : 'tuyetnguyen@18',
    name: 'Nguyen Văn K',
    sdt : '0919277712',
    email :'tuyetnguyen242@gmail.com',
    role:'Kế toán',
    state:<ServiceActivePoint value={'Hoạt động'}/>,
        
    
},
{
    user : 'tuyetnguyen@16',
    name: 'Nguyen Văn N',
    sdt : '0919257008',
    email :'tuyetnguyen122@gmail.com',
    role:'Kế toán',
    state:<ServiceActivePoint value={'Hoạt động'}/>,
        
    
},

{
    user : 'tuyetnguyen@14',
    name: 'Nguyen Văn M',
    sdt : '0919258003',
    email :'tuyetnguyen227@gmail.com',
    role:'Kế toán',
    state:<ServiceActivePoint value={'Hoạt động'}/>,
        
    
},
   
{
    user : 'tuyetnguyen@13',
    name: 'Nguyen Văn L',
    sdt : '0919251274',
    email :'tuyetnguyen278@gmail.com',
    role:'Kế toán',
   state:<ServiceUnactivePoint value={'Ngưng hoạt động'}/>,
    
},


  
    
    
]




  return <div className="UserList">


            <div className="ServiceInfor">

            <div className="ServiceInforTitle">
                <span className="ServiceTItle">Cài đặt hệ thống</span>   
                <span className="Servicepointer">{'>'}  </span>
                <span className="ListService">Quản lý tài khoản</span>   
            </div>

            <div className="ServiceInforUser">
                <BellandUser/>
            </div>


            </div>

            

            <div className="UserList__container">

                <div className="ServiceDropdownsSearchTItle">
                    Danh sách tài khoản
                </div>

                <div className="ServiceDropdownsSarch">
        
        <div className="ServiceDropdownsItem1">
                <div className="ServiceDropdownsSarchFirst">
                        <div className="ServiceDropdownsSarchFirstName">Tên vai trò</div>
                        <div className="ServiceDropdowns_1">
                        <Dropdown options={options} 
                                
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
                                    <span> Tên đăng nhập </span>    
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                      <span> Họ tên </span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                      <span> Số điện thoại</span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                      <span> Email</span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                      <span> Vai trò </span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                      <span> Trạng thái hoạt động </span>      
                            </div>
                            <div className="ServiceTableDetailTitles_Item">
                                      <span>  </span>      
                            </div>
                            
                    </div>
                    
                  
                   
                        
                        {
                            dataUserList.map( (item,index) =>
                            
                            <div className="ServiceTableDetailItem" key={index}>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> {item.user}</span>    
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> {item.name}</span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> {item.sdt}</span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> {item.email}</span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span>{item.role} </span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                    
                                        
                                        
                                        <span>{item.state} </span>  
                                            
                                        
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> <Link to="/user-list/update-user">Cập nhật</Link> </span>      
                                </div>
                            
                            </div>
                            
                            )
                        }
                        
                        
                       
                             
                            
    
                     
                   
                    
    
    
                       
                
    
    
    
    
    
                </div>




            </div>


           <Link to="/user-list/add-user"> <div className="ServiceAdd">
                 <div className="ServiceAddIMG">
                         <img src={addSquare} alt="" />  
                </div>
                <span>Thêm tài khoản</span>
            </div></Link>
          

            <div className="ServiceChosePage">
                                <ChosePage/>
            </div>
            

  </div>;
}
