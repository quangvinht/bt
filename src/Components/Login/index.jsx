import {useState,useRef} from 'react'
import './LoginStyle.css'
import {Routes , Route , Link , } from 'react-router-dom'
import alertCicrle from './image/alert-circle.png'
import GetUser from './getUser'
import logo from './image/alteMedia.png'
import logoright from './image/Group341.png'

import LoginForm from './loginForm'

import GetNewPassWord from './GetNewPassWord'

import UserInfor from './UserInfor'



function Login (value) {
    
   


    return (
        
        <Routes>
                
                {/* <Route exact path='/' element={<LoginForm value={value} />}></Route> */}
                <Route exact path="/login/login" element={<LoginForm />}></Route>
                <Route exact path="/login/forgot-password" element={<GetUser />}></Route>
                <Route exact path="/login/new-password" element={<GetNewPassWord />}></Route>
                
                

        </Routes>
        
        
    )
}

export default Login