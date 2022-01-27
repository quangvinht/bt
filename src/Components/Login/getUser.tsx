import './LoginStyle.css'
import logo from './image/alteMedia.png'
import {Routes , Route , Link} from 'react-router-dom'
import logoright from './image/Frame.png'
import {useState,useRef,useEffect ,useContext} from 'react'
import Context from '../../store/Context'

function GetUser() {

  
    
    const value = useContext(Context);
    
    const valueFirebase= value.userss

    const [email , setEmail] = useState('')
    const [ gotoNewpassword , setGotoNewpassword] = useState(false)

    const emails = valueFirebase.map ( (data:any)=>{
            return data.email
    })
    
    
    
   

       const handleCheckEmail = () =>{
            emails.includes(email) ? setGotoNewpassword(true) : setGotoNewpassword(false)
        }

    



    return (
        <div className="getUser">
             <div className="loginLeft">
                <div className="imgAlta">
                    <img src={logo} />
                </div>

               <div className="resetPassword">
                   <span>Đặt lại mật khẩu</span>
                   <span>Vui lòng nhập email để đặt lại mật khẩu của bạn *</span>
               </div>

               <input className= 
               { !gotoNewpassword ? 'inputUsername active' : 'inputUsername '}  
                    value={email}
                    onChange={ e=> setEmail(e.target.value)}
               />
               <div className="buttonGetUser">
               <Link to="/">
                   <button className="buttonCancel">
                       Hủy
                       </button>
                       </Link>

                 {gotoNewpassword ? 
                 
                 ( 
                     <Link to="/login/new-password"> 
                   <button className="loginButton2 "
                        onClick={handleCheckEmail}
                   >Tiếp tục</button> 
                   </Link> 
                 )
                   
                   : ( 
                    <button className="loginButton2 "
                        onClick={handleCheckEmail}
                    >Tiếp tục</button>
                   )} 
               </div>
            </div>

            <div className="loginRight">
            <div className="imgSystemUser">
                <img src={logoright}/>
            </div>
            

        </div>
    </div>
    )
}

export default GetUser ;