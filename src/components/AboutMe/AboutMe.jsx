import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
// import '../../svg'

export const AboutMe = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <section 
            // data-aos="fade-down-left"
            className="about-me"
        >
            <h2 className="title" data-aos="fade-down">Мое обучение</h2>
            
            <ul className="subtitle-list" data-aos="fade-up">
                <li className="subtitle-item">Закончил курсы frontend в Den It</li>
                <li className="subtitle-item">Обучаюсь заочно в Польском вузе на IT</li>
            </ul>

             <img 
                src="svg/haker.svg" 
                alt="hacker"
                data-aos="fade-left"
            />
        </section>
    )
}
