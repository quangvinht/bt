import {useState,useEffect} from 'react'
import './UpdateRoleManagement.css'
import {Link} from 'react-router-dom'
import BellandUser from '../BellandUser'

import {connect} from 'react-redux';



import {fetchDataChart} from '../../redux/DatAlta/DataAltaActions'

 function UpdateRoleManagement({dataTableRedux,fetchDataChart}:any) {

    useEffect(() => {
        
        fetchDataChart()
        
    
    
    },[])

    console.log(dataTableRedux.dataSendRole);
    

     
    const value = dataTableRedux.dataSendRole

    const [nameAddRole, setNameAddRole] = useState(value.nameRole)
    
    const [desAddRole , setDesAddRole] = useState(value.des)

    

    return (
        <div className="UpdateRoleManagement">
            <div className="ServiceInfor">

                    <div className="ServiceInforTitle">
                        <span className="ServiceTItle">Cài đặt hệ thống</span>   
                        <span className="Servicepointer">{'>'}  </span>
                        <span className="ServiceTItle">Quản lý vai trò</span>   
                        <span className="Servicepointer">{'>'}  </span>
                        <span className="ListService">Cập nhật vai trò</span>   
                    </div>

                    <div className="ServiceInforUser">
                        <BellandUser/>
                    </div>


            </div>


             <div className="AddService_Title">
                        Danh sách vai trò
            </div>

            <div className="AddRoleManageMent__container">

                    <div className="AddService_Container">
                                    <div className="AddService_Container__Title">
                                        Thông tin vai trò
                                    </div>


                                    <div className="AddRoleManageMent__container__InPut">


                                    <div className="AddService_Container__Inputs">
                                        <div className="AddService_Container__Inputs__1">
                                            <div className="AddService_Container__Inputs__ServiceCode">
                                                            <div className="AddService_Container__Inputs__ServiceCode__Title">
                                                            Tên vai trò: <span>*</span>
                                                            </div>
                                                            <div className="AddService_Container__Inputs__ServiceCode__Input">
                                                                <input type="text" value={nameAddRole} onChange={ e=> setNameAddRole(e.target.value)} placeholder="Nhập tên vai trò"  />
                                                            </div>
                                            </div>
                                        
                                        </div>
                                        <div className="AddService_Container__Inputs__2">
                                                <div className="AddService_Container__Inputs__ServiceCode__Title">
                                                                        Mô tả: <span>*</span>
                                                </div>
                                                <div className="AddService_Container__Inputs__ServiceCode__Input">
                                                    
                                                    <textarea rows={4} cols={50} placeholder="Mô tả dịch vụ" value={desAddRole} onChange={ e=> setDesAddRole(e.target.value)}></textarea>
                                                </div>
                                        </div>

                                        <div className="AddService_Container__More">
                                                <div className="AddService_Container__Inputs__ServiceCode__Title">
                                                <span>*</span> <span className="AddService_Container__More_require">Là trường thông tin bắt buộc</span> 
                                                </div>
                                        </div>
                                                
                                    </div>


                                    <div className="AddService_Container__Rules">
                                        
                                                <div className="AddService_Container__Inputs__ServiceCode__Title">
                                                    Phân quyền chức năng: <span>*</span>
                                                </div>


                                                <div className="AddRoleManageMent__container__InPut__function">
                                                        
                                                        <div className="AddRoleManageMent__container__InPut__function__Item">

                                                                    <div className="AddRoleManageMent__container__InPut__function__Item__TItle">
                                                                            Nhóm chức năng A
                                                                    </div>

                                                                    <div className="AddRoleManageMent__container__InPut__function__Item__Checkboxs">
                                                                        <div className="AddService_Container__Rules__Checkboxs__Items">
                                                                                    <div className="AddService_Container__Rules__Checkboxs__Item">
                                                                                        <input type="checkbox" defaultChecked={true}/> 
                                                                                        <span>Tất cả</span>
                                                                                    </div> 
                                                                                    <div className="AddService_Container__Rules__Checkboxs__Item">
                                                                                        <input type="checkbox" defaultChecked={true}/> 
                                                                                        <span>Chức năng x</span>
                                                                                    </div>   
                                                                                    <div className="AddService_Container__Rules__Checkboxs__Item">
                                                                                        <input type="checkbox" defaultChecked={true}/> 
                                                                                        <span>Chức năng y</span>
                                                                                    </div>   
                                                                                    <div className="AddService_Container__Rules__Checkboxs__Item">
                                                                                        <input type="checkbox" defaultChecked={true}/> 
                                                                                        <span>Chức năng z</span>
                                                                                    </div>   
                                                                            
                                                                        </div>
                                                                    </div>


                                                        </div>

                                                        <div className="AddRoleManageMent__container__InPut__function__Item">

                                                            <div className="AddRoleManageMent__container__InPut__function__Item__TItle">
                                                                    Nhóm chức năng B
                                                            </div>

                                                            <div className="AddRoleManageMent__container__InPut__function__Item__Checkboxs">
                                                                <div className="AddService_Container__Rules__Checkboxs__Items">
                                                                                    <div className="AddService_Container__Rules__Checkboxs__Item">
                                                                                        <input type="checkbox"/> 
                                                                                        <span>Tất cả</span>
                                                                                    </div> 
                                                                                    <div className="AddService_Container__Rules__Checkboxs__Item">
                                                                                        <input type="checkbox"/> 
                                                                                        <span>Chức năng x</span>
                                                                                    </div>   
                                                                                    <div className="AddService_Container__Rules__Checkboxs__Item">
                                                                                        <input type="checkbox"/> 
                                                                                        <span>Chức năng y</span>
                                                                                    </div>   
                                                                                    <div className="AddService_Container__Rules__Checkboxs__Item">
                                                                                        <input type="checkbox"/> 
                                                                                        <span>Chức năng z</span>
                                                                                    </div>   
                                                                    
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div className="AddRoleManageMent__container__InPut__function__Item">

                    <div className="AddRoleManageMent__container__InPut__function__Item__TItle">
                    Nhóm chức năng C
                    </div>

                    <div className="AddRoleManageMent__container__InPut__function__Item__Checkboxs">
                    <div className="AddService_Container__Rules__Checkboxs__Items">
                            <div className="AddService_Container__Rules__Checkboxs__Item">
                                <input type="checkbox"/> 
                                <span>Tất cả</span>
                            </div> 
                            <div className="AddService_Container__Rules__Checkboxs__Item">
                                <input type="checkbox"/> 
                                <span>Chức năng x</span>
                            </div>   
                            <div className="AddService_Container__Rules__Checkboxs__Item">
                                <input type="checkbox"/> 
                                <span>Chức năng y</span>
                            </div>   
                            <div className="AddService_Container__Rules__Checkboxs__Item">
                                <input type="checkbox"/> 
                                <span>Chức năng z</span>
                            </div>   

                    </div>
                    </div>


                    </div>




                                                </div>



                                    </div>



                                    </div>
                    </div>


                    <div className="AddService_Button">
                        <Link to="/system/role-management">
                            <div className="AddService_Button__cancle">
                                    <button>Hủy bỏ</button>
                                </div>
                            </Link> 
                            <div className="AddService_Button__addService">
                                <button>Cập nhật</button>
                            </div>
                    </div>





            </div>

        </div>
    )
}


const mapStateToProps = (state:any) =>{
    return {
      dataTableRedux:state.dataAlta
  
     
        
        
        
    }
  }
  
  
  
  
  const mapDispatchToProps = (dispatch:any) =>{
    return {
            fetchDataChart: ()=>  dispatch(fetchDataChart()),
      
    }
  }
  
  
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(UpdateRoleManagement)
