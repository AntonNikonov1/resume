import React from 'react'

export const Attribute = ({ attrinute, attrinuteValue }) => (
    <span className="attribute">
        <span>{attrinute}</span>
        <span className="equal-sign">=</span>
        <span className="attribute-value">"{attrinuteValue}"</span>
    </span>
)
