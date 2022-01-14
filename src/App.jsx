import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import UserInfor from './Components/Login/UserInfor'
import DashBorad from './Components/DashBorad'
import SlideBar from './Components/SlideBar'
import {Routes , Route , Link , } from 'react-router-dom'



function App() {
  return (
    <div className="App">
        <Routes>
           <Route exact path="*" element={<Login />}></Route>
        </Routes>
        
        
        <DashBorad/>
    </div>
  );
}

export default App;
