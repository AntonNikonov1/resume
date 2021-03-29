import React, { useRef } from 'react'
import hacker from '../../svg/Hacker.svg'

export const Hacker = (props) => {
    return (
        <object 
            data={hacker} 
            {...props} 
            type="image/svg+xml"
            >    
        </object>
    )
}