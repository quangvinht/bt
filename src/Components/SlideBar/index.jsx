import React from 'react'
import './Slidebar.css'

import logo from '../Login/image/alteMedia.png'
import dashboradlogo from '../../style/img/dashboradlogo.png'
import computerlogo from '../../style/img/computer.svg'
import servicelogo from '../../style/img/service.svg'
import numberlogo from '../../style/img/number.svg'
import reportlogo from '../../style/img/report.svg'
import settinglogo from '../../style/img/setting.svg'
import morelogo from '../../style/img/more.svg'
import logoutlogo from '../../style/img/logout.svg'

export default function SlideBar() {
    return (
        <div className="SlideBar">
              <div className="SlidebarIMG">
                  <img src={logo}/>
              </div>
              <div className="slibarDetail">
                  <div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={dashboradlogo} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                          Dashboard
                      </span>
                  </div>
                  <div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={computerlogo} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                      Thiết bị
                      </span>
                  </div> <div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={servicelogo} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                      Dịch vụ
                      </span>
                  </div> <div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={numberlogo} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                      Cấp số
                      </span>
                  </div> <div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={reportlogo} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                      Báo cáo
                      </span>
                  </div> <div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={settinglogo} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                            Cài đặt hệ thống
                            <div className="settingMore">
                                <img src={morelogo} alt="" />
                            </div>
                      </span>
                  </div>

                 
              </div>
              <div className="slidebarButton">
                      <div className="slidebarButtonimg">
                          <img src={logoutlogo} alt="" />
                      </div>
                      <span> Đăng xuất</span>
                  </div>
        </div>
    )
}
