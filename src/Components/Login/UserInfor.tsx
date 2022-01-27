import React from 'react'
import SlideBar from '../SlideBar'
import belllogo from '../../style/img/bell.svg'
import avatarsmalllogo from '../../style/img/avtarsmall.svg'
import avatarlargelogo from '../../style/img/avatarlarge.svg'
import cameralogo from '../../style/img/camera.svg'
import bellActive from '../../style/img/bellActive.svg'

export default function UserInfor() {

    const userData= [
        {
            name: 'Tên người dùng',
            value : 'Lê Quỳnh Ái Vân'
        },
        {
            name: 'Tên Tên đăng nhập  ',
            value : 'lequynhaivan01'
        }
        ,
        {
            name: 'Số điện thoại ',
            value : '0767375921'
        }
        ,
        {
            name: 'Mật khẩu',
            value : '311940211'
        }
        ,
        {
            name: 'Email:',
            value : 'adminSSO1@domain.com'
        }
        ,
        {
            name: 'Vai trò:',
            value : 'Kế toán'
        }
    ]

    const [show , setShow] = React.useState(false)

    return (
        <div className="UserInfor">
               

                
             
                    <div className="userInforRight">
                            <span className="userDetailMess">
                                Thông tin cá nhân
                            </span>

                    
                            <div className="UserInforDetailandAvatar">
                                    <div className="UserInforbell">
                                        <img src={ show ? bellActive : belllogo  } alt="" onClick={()=>setShow(!show)}/>
                                        
                                        { show && (
                                                 <div className="UserInforbellList">
                                                 <div className="UserInforbellLissTitle"><span>Thông báo</span></div>
                                                     <ul className="UserInforbellUL">
                                                         <li>
                                                             <div className="UserInforbellliFirst">Người dùng: Nguyễn Thị Thùy Dung</div>
                                                             <div className="UserInforbellliSecond">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                                         </li>
                                                         <li>
                                                             <div className="UserInforbellliFirst">Người dùng: Nguyễn Thiên Chinh</div>
                                                             <div className="UserInforbellliSecond">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                                         </li>
                                                         <li>
                                                             <div className="UserInforbellliFirst">Người dùng: Võ Thị Kim Liên</div>
                                                             <div className="UserInforbellliSecond">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                                         </li>
                                                         <li>
                                                             <div className="UserInforbellliFirst">Người dùng: Hoàng Nguyễn Quốc Huy</div>
                                                             <div className="UserInforbellliSecond">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                                         </li>
                                                         <li>
                                                             <div className="UserInforbellliFirst">Người dùng: Võ Ngọc Lan Anh</div>
                                                             <div className="UserInforbellliSecond">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                                         </li>
                                                         <li>
                                                             <div className="UserInforbellliFirst">Người dùng: Nguyễn Thị Trúc Anh</div>
                                                             <div className="UserInforbellliSecond">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                                         </li>
                                                         <li>
                                                             <div className="UserInforbellliFirst">Người dùng: Nguyễn Thị Trúc Anh</div>
                                                             <div className="UserInforbellliSecond">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                                         </li>
                                                         <li>
                                                             <div className="UserInforbellliFirst">Người dùng: Nguyễn Thị Trúc Anh</div>
                                                             <div className="UserInforbellliSecond">Thời gian nhận số: 12h20 ngày 30/11/2021</div>
                                                         </li>
                                                         
                                                     </ul>
                                             </div>
                                        )}
                                        
                                       
                                        
                                    </div>
                                    <div className="UserInforDetailAvatarandInfor">
                                            <div className="UserInforDetailAvatar">
                                                <img src={avatarsmalllogo} alt="" />
                                            </div>
                                            <div className="UserInforDetailAvatarInfor">
                                                <span className="helloUser">
                                                    Xin Chào
                                                </span>
                                                <span className="UserInforName">
                                                Lê Quỳnh Ái Vân
                                                </span>
                                            </div>
                                    </div>
                                </div>
                  </div>

                <div className="UserMoreDetail">
                        <div className="UserMoreDetailIMGandname">
                            <div className="UserMoreDetailIMG">
                                    <img src={avatarlargelogo} alt="" />
                            </div>
                            <span className="UserMoreDetailName">
                                    Lê Quỳnh Ái Vân 
                            </span>
                            <div className="UserinforCamera">
                                <img src={cameralogo} alt="" />
                            </div>
                            
                        </div>

                        <div className="UserInforDetailItemS">
                               
                               
                                
                                {
                                    userData.map( (user,index) => {
                                        return (
                                            <div key={index} className="UserInforDetailItem">
                                                    <span className="UserInforDetailItemName">
                                                        {user.name}
                                                    </span>
                                                    <div className="UserInforDetailItemValue">
                                                        <span>{user.value}</span>
                                                    </div>
                                        </div>
                                        )
                                    })
                                }
                        </div>

                </div>


               </div>
        
    )
}
