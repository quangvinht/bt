
import './DetailNumberLevel.css'
import BellandUser from '../BellandUser'
import searchlogo from '../../style/img/search.svg'
import {Link} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import Vector from '../../style/img/Vector.svg'
import backSquare from '../../style/img/backSquare.svg'
import ChosePage from '../ChosePage'


import {connect} from 'react-redux';



import {fetchDataChart,SENDDATA} from '../../redux/DatAlta/DataAltaActions'





 function DetailNumberLevel({dataTableRedux,fetchDataChart,SENDDATA}:any) {

        
     
       
              
        
        useEffect(() => {

                fetchDataChart()
                
       
        },[])

        const dataRevice =dataTableRedux.dataSend
       
        
        
        
        const ServiceWaitPoint = ()=>{
                return (
                        <><span className="WaitPoint"></span><span>Đang chờ</span></>
                )
        }  
    
        
        const ServiceUsedPoint = ()=>{
            return (
                    <><span className="UsedPoint"></span><span>Đã sử dụng</span></>
            )
    }  
      
    
         const ServiceUnactivePoint = ()=>{
                  return (  <><span className="UnActivePoint"></span><span>Bỏ qua</span></>
                  
                  ) 
            }

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
                                        <span>{dataRevice.guest}</span>    
                                </div>
                                <div className="DetailNumberLevel__container__item">
                                        <span>Tên dịch vụ:</span>
                                        <span>{dataRevice.service}</span>    
                                </div>
                                <div className="DetailNumberLevel__container__item">
                                        <span>Số thứ tự:</span>
                                        <span>{dataRevice.stt}</span>    
                                </div>
                                <div className="DetailNumberLevel__container__item">
                                        <span>Thời gian cấp:</span>
                                        <span>{dataRevice.time1}</span>    
                                </div>
                                <div className="DetailNumberLevel__container__item">
                                        <span>Hạn sử dụng:</span>
                                        <span>{dataRevice.time2}</span>    
                                </div>
                        </div>
                        <div className="DetailNumberLevel__container__items">

                                <div className="DetailNumberLevel__container__item">
                                        <span>Nguồn cấp:</span>
                                        <span>{dataRevice.source}</span>    
                                </div>
                                <div className="DetailNumberLevel__container__item">
                                        <span>Trạng thái:</span>
                                        <span>
                                              
                                                {dataRevice.stateFilter == 'Đang chờ' && <ServiceWaitPoint/>}
                                                {dataRevice.stateFilter == 'Đã sử dụng' && <ServiceUsedPoint/>}
                                                {dataRevice.stateFilter == 'Bỏ qua' && <ServiceUnactivePoint/>}
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


const mapStateToProps = (state:any) =>{
        return {

          dataTableRedux:state.dataAlta
      
         
            
            
            
        }
      }
      
      
      
      
      const mapDispatchToProps = (dispatch:any) =>{
        return {

                fetchDataChart: ()=>  dispatch(fetchDataChart()),
                SENDDATA: (data:any)=> dispatch(SENDDATA(data))
          
        }
      }
      
      
      
      
      export default connect(mapStateToProps,mapDispatchToProps)(DetailNumberLevel)
      
      
