import {useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import logo from './image/alteMedia.png'
import logoright from './image/Frame.png'

export default function GetNewPassWord() {

    const [password,setPassword] = useState('')
    const [rePassword , setRePassword] = useState('')

    const [path , setPath] = useState('/login/new-password')

   

    const handlePasswordChange= () => {
        
      if( password !='' && rePassword !='' && password == rePassword){
          setPath('/user-infor')
      }
      else{
          setPath('/login/new-password')
      }

       
        
    }

    return (
        <div className="NewPassword">
            <div className="loginLeft">

                <div className="imgAlta">
                    <img src={logo} />
                </div>
                <span className="dlmkm">Đặt lại mật khẩu mới</span>
                <div className="passWord">
                    <span>Mật khẩu:</span>
                    <input type="password"
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                    />
                </div>

                <div className="RepassWord">
                    <span>Nhập lại mật khẩu:</span>
                    <input type="password"
                        value={rePassword}
                        onChange={e=> setRePassword(e.target.value)}
                    />
                </div>
                
               <Link to={path}> 
                <button className="ApplyButton "
                        onClick={handlePasswordChange}
                    >Xác nhận</button>
                    </Link>
            </div>

            <div className="loginRight">
            <div className="imgSystemUser">
                <img src={logoright}/>
            </div>
            

        </div>
        </div>
    )
}
