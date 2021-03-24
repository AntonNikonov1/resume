import React from 'react'

export const Tag = ({ children }) => {
    return (
        <span className="tag">
            <span className="left-arrow">&lt;</span>
            <span>{children} </span>
            <span className="right-arrow">/&gt;</span>
        </span>
    )
}
