import {useState , useEffect ,useRef} from 'react'
import './Slidebar.css'
import { Link  } from 'react-router-dom'
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

   
      const slidebars = document.querySelectorAll('.slibarDetailItem')
    
   

  
   


  slidebars.forEach( (slidebar:any) => {

    slidebar.onclick = function () {

        document.querySelector('.slibarDetailItem.activeSlidebar')!.classList.remove('activeSlidebar')
        
        this.classList.add('activeSlidebar')
        
                      
    }
})
   
  
    
    const [show ,setShow] = useState(false)

    const handleShow = () =>{
        setShow(!show)
        
    }




    return (
        <div className="SlideBar">
              <div className="SlidebarIMG">
                  <img src={logo}/>
              </div>
              <div className="slibarDetail activeSlidebar">
                
                
              
                  <Link to="/number-level"><div className="slibarDetailItem">
                      <div className="slibarDetailItemimg">
                          <img src={numberlogo} alt="" />
                      </div>
                      <span className="slibarDetailItemName">
                      Cấp số
                      </span>
                  </div> </Link>
                
                  
                  </div>
        </div>
    )
}
