import React from 'react'
import './LevelChart.css'
import calendar from '../../style/img/calendar.svg'
import arrowup from '../../style/img/arrowup.svg'
import calendargreen from '../../style/img/calendargreen.svg'
import calling from '../../style/img/calling.svg'
import tag from '../../style/img/tag.svg'
import arrowdown from '../../style/img/arrowdown.svg'



export default function index() {
    return (
        <div className="LevelChart">

                <span className="LevelChartTitle">
                        Biểu đồ cấp số
                </span>
                <div className="LevelChartList">

                        <div className="LevelChartItem">
                            <div className="LevelChartItemFirst">
                                
                                <div className="LevelChartItemFirstIMG">
                                    <img src={calendar} alt="" />
                                </div>

                                <span className="LevelChartItemFirstTitle">
                                        Số thứ tự đã cấp
                                </span>

                            </div>

                            <div className="LevelChartItemSecond">
                                <span className="LevelChartItemSecondNumber">
                                     4.221 
                                </span>
                                <div className="LevelChartItemSecondPercent">
                                        <div className="arrowUp">
                                            <img src={arrowup} alt="" />
                                        </div>

                                        <span>32,41%</span>
                                </div>
                            </div>


                        </div>

                        <div className="LevelChartItem">
                            <div className="LevelChartItemFirst">
                                
                                <div className="LevelChartItemFirstIMG">
                                    <img src={calendargreen} alt="" />
                                </div>

                                <span className="LevelChartItemFirstTitle">
                                Số thứ tự đã sử dụng
                                </span>

                            </div>

                            <div className="LevelChartItemSecond">
                                <span className="LevelChartItemSecondNumber">
                                3.721
                                </span>
                                <div className="LevelChartItemSecondPercent arrowDown">
                                        <div className="arrowUp">
                                            <img src={arrowdown} alt="" />
                                        </div>
                                        
                                        <span>32,41%</span>
                                </div>
                            </div>


                        </div>

                        <div className="LevelChartItem">
                            <div className="LevelChartItemFirst">
                                
                                <div className="LevelChartItemFirstIMG">
                                    <img src={calling} alt="" />
                                </div>

                                <span className="LevelChartItemFirstTitle">
                                Số thứ tự đang chờ
                                </span>

                            </div>

                            <div className="LevelChartItemSecond">
                                <span className="LevelChartItemSecondNumber">
                                468
                                </span>
                                <div className="LevelChartItemSecondPercent">
                                        <div className="arrowUp">
                                            <img src={arrowup} alt="" />
                                        </div>
                                        
                                        <span>56,41%</span>
                                </div>
                            </div>


                        </div>

                        <div className="LevelChartItem">
                            <div className="LevelChartItemFirst">
                                
                                <div className="LevelChartItemFirstIMG">
                                    <img src={tag} alt="" />
                                </div>

                                <span className="LevelChartItemFirstTitle">
                                Số thứ tự đã bỏ qua
                                </span>

                            </div>

                            <div className="LevelChartItemSecond">
                                <span className="LevelChartItemSecondNumber">
                                     32
                                </span>
                                <div className="LevelChartItemSecondPercent arrowDown">
                                        <div className="arrowUp">
                                            <img src={arrowup} alt="" />
                                        </div>
                                        
                                        <span>22,41%</span>
                                </div>
                            </div>


                        </div>

                </div>
                
        </div>
    )
}
