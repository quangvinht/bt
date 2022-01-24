import React from 'react'
import './DashBorad.css'
import SlideBar from '../SlideBar'
import LevelChart from '../LevelChart'
import Chart from '../Chart'
import MenuBar from '../MenuBar'

export default function DashBorad() {
    return (
        <div className="DashBorad">

            

            

                <div className="DashBoradTitle">
                    DashBoard
                </div> 
                
                <LevelChart/>

                <Chart/>
                
                
                
            
                

                


           
            
            
            

        </div>
    )
}
