import { CheckOutlined } from '@ant-design/icons'
import React from 'react'

const InfoBoard = ({ 
    title,
    idTitleAnimation,
    subtitle,
    idSubtitleAnimation,
    checkMark
}) => (
    <div>
        <h2 className="title" id={idTitleAnimation}>{title}</h2>

        <ul className="subtitle-list" id={idSubtitleAnimation}>
            {
                subtitle.map((subtitleItem) => (
                    <li className="subtitle-item" key={subtitleItem}>
                        {
                            checkMark 
                                ? <CheckOutlined className="check-icon" /> 
                                : null
                        }
                        <span>{subtitleItem}</span>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default InfoBoard
