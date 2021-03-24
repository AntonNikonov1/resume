import React from 'react'

export const Comment = ({ children }) => (
    <span className="comment">

        <span className="comment__left-side">
            <span className="left-arrow">
                &lt;
            </span>
            <span>
                !-- 
            </span>
        </span>

        <span className="comment__text">{children}</span>

        <span className="comment__right-side">
            <span>
                --
            </span>
            <span className="right-arrow">
                &gt;
            </span>
        </span>

    </span>
)