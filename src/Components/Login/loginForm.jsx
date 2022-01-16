import {useState,useRef,useEffect ,useContext} from 'react'
import Context from '../../store/Context'
import './LoginStyle.css'
import {Routes , Route , Link} from 'react-router-dom'
import alertCicrle from './image/alert-circle.png'
import GetUser from './getUser'
import logo from './image/alteMedia.png'
import logoright from './image/Group341.png'
import db from '../../firebase.config';



function LoginForm () {

  const value = useContext(Context)
  

    
    
     
      const [path,setPath] = useState('')
      


    
    const [error,setError] = useState( value.error )

  
   
    const [userName,setUserName] = useState( value.users.name)
    const [userPassword,setUserPassword] = useState( value.users.password )
    
   const userData = []
   const passwordData = []

  for (const i of value.userss) {
       userData.push(i.name)
       passwordData.push(i.password)
  }
 
  
    
   
    const handleLogin = () => {

       
       

        const userObject = {
            password : userPassword,
            name : userName,
           
        }
        
       const data = value.userss.find( i=> {

        return   i.name === userObject.name && i.password === userObject.password
          

    } ); 
    
        !data ? setError(true) : setError(false )

        data ? setPath('/user-infor') : setPath('/')
      
       
        
}

    
    

   return(
    <><div className="loginForm">
    <div className="loginLeft">
        <div className="imgAlta">
            <img src={logo} />
        </div>
        <div className="inputUser">
            Tên đăng nhập*:
            <input type="text"
                className={error ? 'active' : undefined}
               
                value={userName}
                onChange={e => setUserName(e.target.value)} 
                />
        </div>
        <div className="inputPassword">
            Mật khẩu*:
            <input type="password"
                className={error ? 'active' : undefined}
               
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)} 
                />
        </div>

        {error ? (
            <p className="forgotPassword">
                <img src={alertCicrle} className="alertCircle" />
                <span className="warning">Sai mật khẩu hoặc tên đăng nhập</span>
            </p>

        )

            :

            undefined}


           
                        
                         
            <Link to={path}>
                    <button className="loginButton"

                     onClick={handleLogin}



                        >Đăng nhập</button> 
             </Link>
                                
     
                 

        

        {error &&    
        <Link className="linktag" to="/login/forgot-password">
            <span className=" fogetPassword2">

            
             Quên mật khẩu
                

             </span>
         </Link>}

    </div>
    <div className="loginRight">
        <div className="imgSystem">
            <img src={logoright} />
        </div>
        <span className="system">Hệ thống</span>
        <span className="QLXH">QUẢN LÝ XẾP HÀNG</span>

    </div>


</div>


  


    </>
    )
}

export default LoginForm