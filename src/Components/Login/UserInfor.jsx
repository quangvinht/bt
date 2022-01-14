import React from 'react'
import SlideBar from '../SlideBar'
import belllogo from '../../style/img/bell.svg'
import avatarsmalllogo from '../../style/img/avtarsmall.svg'
import avatarlargelogo from '../../style/img/avatarlarge.svg'
import cameralogo from '../../style/img/camera.svg'

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


    return (
        <div className="UserInfor">
                <SlideBar/>

                
               <div className="UserInforDetail">
                    <div className="userInforRight">
                            <span className="userDetailMess">
                                Thông tin cá nhân
                            </span>

                    
                            <div className="UserInforDetailandAvatar">
                                    <div className="UserInforbell">
                                        <img src={belllogo} alt="" />
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
        </div>
    )
}
