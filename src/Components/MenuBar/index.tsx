
import { useState } from 'react';
import './Menubar.css'
import DatePicker from 'sassy-datepicker';
import bell from '../../style/img/bell.svg'
import avatarsmalllogo from '../../style/img/avtarsmall.svg'
import circle90 from '../../style/img/circle90.svg'
import circle76 from '../../style/img/circle76.svg'
import circle86 from '../../style/img/circle86.svg'
import computerorange from '../../style/img/computerorange.svg'
import serviceblue from '../../style/img/serviceblue.svg'
import numbergreen from '../../style/img/numbergreen.svg'

declare global {
      interface Window { process: any; }
  }

export default function Menubar() {

    const [date, setDate] = useState(new Date());
    const onChange = (newDate:any) => {
        console.log(`New date selected - ${newDate.toString()}`);
        setDate(newDate);
      };
    
      window.process = {
        env: {
          NODE_ENV: 'development',
       },
     };


    return (
        <div className="Menubar">

            <div className="MenubarUser">
                  <div className="MenubarUserBell">
                      <img src={bell} alt="" />
                  </div>
                  <div className="MenuBarUserInfor">
                      <div className="MenuBarUserInforIMG">
                          <img src={avatarsmalllogo} alt="" />
                      </div>
                      <div className="MenuBarUserInforDetail">
                          <span className="menuBaruserhello">
                                Xin Chào
                          </span>
                          <span className="menuBarusername">
                              Lê Quỳnh Ái Vân
                          </span>
                      </div>
                  </div>
            </div>

            <div className="menuBarOverView">
                <span className="menuBarOverViewTitle">
                  Tổng quan
                </span>
                <div className="menuBarOverViewList">

                      <div className="menuBarOverViewItem">

                          <div className="menuBarOverViewItemCircle">
                              <img src={circle90} alt="" />
                          </div>

                          <div className="menuBarOverViewItemFirst">
                              <span className="menuBarOverViewItemFirstNumber">
                                    4.221
                              </span>
                              <div className="menuBarOverViewItemNumberMonitor">
                                    <div className="menuBarOverViewItemFirstMinotor">
                                      <img src={computerorange} alt="" />
                                    </div>
                                    <span className="menubarItemtextMonitor">
                                            Thiết bị
                                    </span>
                              </div>
                            
                          </div>
                          
                          <div className="menuBarOverViewItemSecond">
                                <div className="menuBarpointandnumber">
                                      <span className="pointorange"> .</span> 
                                        <span className="menubarpointnumbertotextmonitor">
                                        Đang hoạt động
                                        </span>
                                      <span className="menuBarPointtoNumber">3.799</span>
                                </div>

                                <div className="menuBarpointandnumber">
                                      <span className="pointgray"> .</span> 
                                        <span className="menubarpointnumbertotextmonitor">
                                        Ngưng hoạt động
                                        </span>
                                      <span className="menuBarPointtoNumber">422</span>
                                </div>
                          </div>



                      </div>

                       <div className="menuBarOverViewItem">

                          <div className="menuBarOverViewItemCircle">
                              <img src={circle76} alt="" />
                          </div>

                          <div className="menuBarOverViewItemFirst">
                              <span className="menuBarOverViewItemFirstNumber">
                                    276
                              </span>
                              <div className="menuBarOverViewItemNumberMonitor">
                                    <div className="menuBarOverViewItemFirstMinotor">
                                      <img src={serviceblue} alt="" />
                                    </div>
                                    <span className="menubarItemtextMonitor" style={{color:"blue"}}>
                                            Dịch vụ
                                    </span>
                              </div>
                            
                          </div>
                          
                          <div className="menuBarOverViewItemSecond">
                                <div className="menuBarpointandnumber">
                                      <span className="pointorange" style={{backgroundColor:"blue"}}> .</span> 
                                        <span  className="menubarpointnumbertotextmonitor">
                                        Đang hoạt động
                                        </span>
                                      <span style={{color:"blue"}} className="menuBarPointtoNumber">210</span>
                                </div>

                                <div className="menuBarpointandnumber">
                                      <span className="pointgray"> .</span> 
                                        <span className="menubarpointnumbertotextmonitor">
                                        Ngưng hoạt động
                                        </span>
                                      <span style={{color:"blue"}} className="menuBarPointtoNumber">66</span>
                                </div>
                          </div>



                      </div>

                      <div className="menuBarOverViewItem">

                          <div className="menuBarOverViewItemCircle">
                              <img src={circle86} alt="" />
                          </div>

                          <div className="menuBarOverViewItemFirst">
                              <span className="menuBarOverViewItemFirstNumber">
                                    4.221
                              </span>
                              <div className="menuBarOverViewItemNumberMonitor">
                                    <div className="menuBarOverViewItemFirstMinotor">
                                      <img src={numbergreen} alt="" />
                                    </div>
                                    <span className="menubarItemtextMonitor" style={{color:"#35C75A"}}>
                                            Dịch vụ
                                    </span>
                              </div>
                            
                          </div>
                          
                          <div className="menuBarOverViewItemSecond">
                                <div className="menuBarpointandnumber">
                                      <span className="pointorange" style={{backgroundColor:"#35C75A"}}> .</span> 
                                        <span  className="menubarpointnumbertotextmonitor">
                                        Đã sử dụng
                                        </span>
                                      <span style={{color:"#35C75A"}} className="menuBarPointtoNumber">210</span>
                                </div>

                                <div className="menuBarpointandnumber">
                                      <span className="pointgray"> .</span> 
                                        <span className="menubarpointnumbertotextmonitor menubarFix">
                                        Đang chờ
                                        </span>
                                      <span style={{color:"#35C75A"}} className="menuBarPointtoNumber">66</span>
                                </div>

                                <div className="menuBarpointandnumber">
                                      <span  style={{backgroundColor:"#F178B6"}} className="pointgray"> .</span> 
                                        <span className="menubarpointnumbertotextmonitor menubarFix2">
                                        Bỏ qua
                                        </span>
                                      <span style={{color:"#35C75A"}} className="menuBarPointtoNumber">66</span>
                                </div>
                          </div>



                      </div>

                </div>
            </div>
                
            <DatePicker className="Datapicker" onChange={onChange} selected={date} />
        </div>
    )
}
