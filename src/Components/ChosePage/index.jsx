import React from 'react'
import prevArrow from '../../style/img/prevArrow.svg'
import nextArrow from '../../style/img/nextArrow.svg'

import './ChosePage.css'

export default function ChosePage() {

    const chosePages = document.querySelectorAll('.ChosePage__Item')
    
    chosePages.forEach( (item) => {
        item.onclick = (e) =>{
                document.querySelector('.ChosePage__Item--active').classList.remove('ChosePage__Item--active')
                
                e.target.classList.add('ChosePage__Item--active')
        }
    })



    return (
        <div className="ChosePage">
                <div className="ChosePage__preArrow">
                    <img src={prevArrow} alt="" />
                </div>
                <div className="ChosePage__Item ChosePage__Item--active">1</div>
                <div className="ChosePage__Item">2</div>
                <div className="ChosePage__Item">3</div>
                <div className="ChosePage__Item">4</div>
                <div className="ChosePage__Item">5</div>
                <div className="ChosePage__Item--more">...</div>
                <div className="ChosePage__Item">10</div>
                <div className="ChosePage__preArrow">
                    <img src={nextArrow} alt="" />
                </div>
        </div>
    )
}
