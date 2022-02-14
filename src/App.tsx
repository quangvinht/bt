// import logo from './logo.svg';
import {useEffect,useState} from 'react'
import './App.css';
import Login from './Components/Login'
import UserInfor from './Components/Login/UserInfor'
import DashBorad from './Components/DashBorad'
import MenuBar from './Components/MenuBar'
import SlideBar from './Components/SlideBar'

import LoginForm from './Components/Login/loginForm'
import GetUser from './Components/Login/getUser'
import GetNewPassWord from './Components/Login/GetNewPassWord'
import Service from './Components/Service'
import AddService from './Components/AddService'
import UpdateService from './Components/UpdateService'
import DetailService from './Components/DetailService'
import RoleManagement from './Components/RoleManagement';
import AddRoleManageMent from './Components/AddRoleManagement'
import UpdateRoleManagement from './Components/UpdateRoleManagement'
import UserDiary from './Components/UserDiary'
import Equiment from './Components/Equiment'
import AddEquiment from './Components/AddEquiment'
import DetailEquiment from './Components/DetailEquiment'
import UpdateEquiment from './Components/UpdateEquiment'
import NumberLevel from './Components/NumberLevel'
import AddNumberLevel from './Components/AddNumberLevel'
import DetailNumberLevel from './Components/DetailNumberLevel'
import SlideBarNumberLevel from './Components/SlideBarNumberLevel'
import Report from './Components/Report'
import UserList from './Components/UserList'
import AddUserList from './Components/AddUserList'
import UpdateUserList from './Components/UpdateUserList'
import {Provider} from 'react-redux'
import store from './redux/store'
import Test from './Test'

import {Routes , Route , Link , } from 'react-router-dom'



function App(){
  

  //UpdateRoleManagement:
  const [dataChild , setDataChild] = useState('')

  const callbackFunction = (childData: any) => {
      setDataChild(childData);
  }
 //



 const [messageNumberLevel, setMessageNumberLevel] = useState('')

 const MessageFromNumberLevel = (childData: any) =>{
    setMessageNumberLevel(childData)
    
 }

 
  return (
    
    <div className="App">
      
        
              
             
              

        
        
        <Routes>
                <Route  path={ '/'||"/login/login"} element={<LoginForm />}></Route>
                <Route  path="/login/forgot-password" element={<GetUser />}></Route>
                <Route  path="/login/new-password" element={<GetNewPassWord />}></Route>
          
          <Route  path="/dashboard" element={<><SlideBar/><DashBorad /><MenuBar /></>}></Route>
            
          
          <Route  path={'/user-infor' } element={<><SlideBar /><UserInfor /></>}></Route>

          <Route  path={'/service' } element={<><SlideBar /><Service /></>}></Route>
          <Route  path={'/service/add-service' } element={<><SlideBar /><AddService /></>}></Route>
          <Route  path={'/service/detail-service' } element={<><SlideBar /><DetailService /></>}></Route>
          <Route  path={'/service/detail-service/update-service' } element={<><SlideBar /><UpdateService /></>}></Route>
          <Route  path={'/system/role-management' } element={<><SlideBar /><RoleManagement parentCallback={callbackFunction} /></>}></Route>
          <Route  path={'/system/role-management/add-role-management' } element={<><SlideBar /><AddRoleManageMent /></>}></Route>
       
          <Route  path={'/system/role-management/update-role-management' } element={<><SlideBar /><UpdateRoleManagement value={dataChild}/></>}></Route>
          <Route  path={'/system/user-diary' } element={<><SlideBar /><UserDiary/></>}></Route>


          <Route  path={'/equiment' } element={<><SlideBar /><Equiment/></>}></Route>
          <Route  path={'/equiment/add-equiment' } element={<><SlideBar /><AddEquiment/></>}></Route>
          <Route  path={'/equimeequimentnt/detail' } element={<><SlideBar /><DetailEquiment/></>}></Route>
          <Route  path={'/equimeequimentnt/detail/update-equiment' } element={<><SlideBar /><UpdateEquiment/></>}></Route>

          <Route  path={'/number-level' } element={<><SlideBar /><NumberLevel parentCallbackNL={MessageFromNumberLevel}/></>}></Route>
          <Route  path={'/number-level/add-number-level' } element={<><SlideBar /><AddNumberLevel/></>}></Route>
          <Route  path={'/number-level/detail-number-level' } element={<><SlideBar /><DetailNumberLevel value={messageNumberLevel}/></>}></Route>
          <Route  path={'/number-level/add-number-level-no-account' } element={<><SlideBarNumberLevel /><AddNumberLevel/></>}></Route>
          

          <Route  path={'/report' } element={<><SlideBar /><Report /></>}></Route>

          <Route  path={'/user-list' } element={<><SlideBar /><UserList /></>}></Route>
          <Route  path={'/user-list/add-user' } element={<><SlideBar /><AddUserList /></>}></Route>
          <Route  path={'/user-list/update-user' } element={<><SlideBar /><UpdateUserList /></>}></Route>

       
       </Routes>
        



       
       


    </div>
    
  );
}

export default App;
