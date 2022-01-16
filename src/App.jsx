import logo from './logo.svg';
import {useEffect} from 'react'
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



import {Routes , Route , Link , } from 'react-router-dom'



function App() {

 
 


  return (
    <div className="App">
      
        
              
              {/* <Login/> */}

        
        
        <Routes>
                <Route exact path={ '/'||"/login/login"} element={<LoginForm />}></Route>
                <Route exact path="/login/forgot-password" element={<GetUser />}></Route>
                <Route exact path="/login/new-password" element={<GetNewPassWord />}></Route>
          
          <Route exact path="/dashboard" element={<><SlideBar/><DashBorad /><MenuBar /></>}></Route>
            
          
          <Route exact path={'/user-infor' } element={<><SlideBar /><UserInfor /></>}></Route>

          <Route exact path={'/service' } element={<><SlideBar /><Service /></>}></Route>
          <Route exact path={'/service/add-service' } element={<><SlideBar /><AddService /></>}></Route>
          <Route exact path={'/service/detail-service' } element={<><SlideBar /><DetailService /></>}></Route>
          <Route exact path={'/service/detail-service/update-service' } element={<><SlideBar /><UpdateService /></>}></Route>
        </Routes>
        



       
       


    </div>
  );
}

export default App;
