
import './Service.css'
import BellandUser from '../BellandUser'
import searchlogo from '../../style/img/search.svg'
import {Link} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Vector from '../../style/img/Vector.svg'
import addSquare from '../../style/img/add-square.svg'
import ChosePage from '../ChosePage'

import "react-datepicker/dist/react-datepicker.css";

export default function Service() {

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

        const dataServiceTable = [

                {
                        codeService : 'KIO_01',
                        nameService : 'Kiosk',
                        desService : 'Mô tả dịch vụ 1',
                        stateService : <ServiceActivePoint value={'Hoạt động'}/>
                },
                {
                        codeService : 'KIO_01',
                        nameService : 'Kiosk',
                        desService : 'Hoạt động',
                        stateService :  <ServiceUnactivePoint value={'Ngưng hoạt động'}/>
                },
                {
                        codeService : 'KIO_01',
                        nameService : 'Kiosk',
                        desService : ' Hoạt động',
                        stateService :  <ServiceActivePoint value={'Hoạt động'}/>
                },
                {
                        codeService : 'KIO_01',
                        nameService : 'Kiosk',
                        desService : 'Hoạt động',
                        stateService :  <ServiceActivePoint value={'Hoạt động'}/>
                },
                {
                        codeService : 'KIO_01',
                        nameService : 'Kiosk',
                        desService : 'Hoạt động',
                        stateService : <ServiceActivePoint value={'Hoạt động'}/>
                },
                {
                        codeService : 'KIO_01',
                        nameService : 'Kiosk',
                        desService : 'Hoạt động',
                        stateService :  <ServiceActivePoint value={'Hoạt động'}/>
                },
                {
                        codeService : 'KIO_01',
                        nameService : 'Kiosk',
                        desService : 'Hoạt động',
                        stateService :  <ServiceActivePoint value={'Hoạt động'}/>
                },
                {
                        codeService : 'KIO_01',
                        nameService : 'Kiosk',
                        desService : 'Hoạt động',
                        stateService : <ServiceUnactivePoint value={'Ngưng hoạt động'}/>
                },
                {
                        codeService : 'KIO_01',
                        nameService : 'Kiosk',
                        desService : 'Hoạt động',
                        stateService :   <ServiceActivePoint value={'Hoạt động'}/>
                }
                
                
        ]

        const [startDate, setStartDate] = useState(new Date());


        const [search , setSeatch] = useState('')

        

    return (
        <div className="Service">

            <div className="ServiceInfor">

                <div className="ServiceInforTitle">
                      <span className="ServiceTItle">Dịc vụ</span>   
                      <span className="Servicepointer">{'>'}  </span>
                      <span className="ListService">Danh sách dịch vụ</span>   
                </div>

                <div className="ServiceInforUser">
                    <BellandUser/>
                </div>


            </div>

           <div className="ServiceCOntainer">
                
            <div className="ServiceDropdownsSearchTItle">
                        Quản lý dịch vụ
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
                                <span> Mã dịch vụ  </span>    
                        </div>
                        <div className="ServiceTableDetailTitles_Item">
                                  <span> Tên dịch vụ  </span>      
                        </div>
                        <div className="ServiceTableDetailTitles_Item">
                                  <span> Mô tả </span>      
                        </div>
                        <div className="ServiceTableDetailTitles_Item">
                                  <span> Trạng thái hoạt động  </span>      
                        </div>
                        <div className="ServiceTableDetailTitles_Item">
                                  <span>  </span>      
                        </div>
                        <div className="ServiceTableDetailTitles_Item">
                                  <span>   </span>      
                        </div>
                </div>
                
              
                {
                         dataServiceTable.map ( (item,index)=> 
                         
                        <div className="ServiceTableDetailItem" key={index}>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> {item.codeService}</span>    
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> {item.nameService} </span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> {item.desService} </span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> {item.stateService}</span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> <Link to="/service/detail-service">Chi tiết </Link> </span>      
                                </div>
                                <div className="ServiceTableDetailTitles_Item">
                                        <span> <a href="">Cập nhật</a>  </span>      
                                </div>
                        </div>

                         )     
                }
                
               
                


                   
          </div>     





           </div>

           





        <Link to="/service/add-service"> <div className="ServiceAdd">
                                        <div className="ServiceAddIMG">
                                                <img src={addSquare} alt="" />  
                                        </div>
                                        <span>Thêm dịch vụ</span>
                                </div>
        </Link>         

        <div className="ServiceChosePage">
                                <ChosePage/>
         </div>
       
        </div>


    )
}
