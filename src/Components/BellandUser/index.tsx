import React from 'react'
import './BellandUser.css';

import bell from '../../style/img/bell.svg';
import avtarsmall from '../../style/img/avtarsmall.svg'





export default function BellandUser() {
    return (
        <div className="BellandUser">
            <div className="BellandUserbell">
                    <img src={bell} alt="" />
            </div>

            <div className="BellandUseruser">
                        <div className="BellandUseruseravatar">
                            <img src={avtarsmall} alt="" />
                        </div>
                        <div className="BellandUseruserhiandinfor">
                                <span className="BellandUseruserhiandinfor_hi">Xin Chào</span>
                                <span className="BellandUseruserhiandinfor_name">Lê Quỳnh Ái Vân</span>
                        </div>
            </div>

        </div>
    )
}
