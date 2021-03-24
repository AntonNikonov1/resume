import React from 'react'
import Typist from 'react-typist'

export const Welcome = () => (
    <section className="welcome" >  
        <Typist cursor={{show: false}}>
            <h1 className="welcome__title" >
                <span>
                    <span>&lt;</span>
                    <span>Welcome</span>
                        <span className="attribute">
                            <span>name</span>
                            <span className="equal-sign">=</span>
                            <span className="attribute-value">"Anton"</span>
                        </span>
                        <span className="attribute">
                            <span>surname</span>
                            <span className="equal-sign">=</span>
                            <span className="attribute-value">"Nikonov"</span>
                        </span>
                    <span>&gt;</span>
                </span>
            </h1>

            <span className="comment">
                <span className="comment__left-side">
                    <span className="left-arrow">
                        &lt;
                    </span>
                    <span>
                        !-- 
                     </span>
                </span>

                <span className="comment__text">Creative frontend developer</span>

                <span className="comment__right-side">
                    <span>
                        --
                    </span>
                    <span className="right-arrow">
                        &gt;
                    </span>
                </span>
            </span>
        </Typist>
    </section>
)
