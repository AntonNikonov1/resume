import React, { useEffect } from 'react'
import InfoBoard from '../InfoBoard/InfoBoard';
import hacker from '../../svg/Hacker.svg'

// GSAP
import gsap from 'gsap/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/all'; // Needed to describe styles through GSAP

export const AboutMe = () => {
    gsap.registerPlugin(ScrollTrigger)
        
    const scrollTriggerInfo = {
        trigger: '.about-me',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
        pin: true,
        markers: true
    }

    useEffect(() =>  {
        gsap.to('.about-me__hacker-icon', {
            scrollTrigger: scrollTriggerInfo,
            // duration: 10,
            opacity: 0
            // right: '-210px'
        })

        gsap.to('#aboutMeTitle', {
            scrollTrigger: scrollTriggerInfo,
            // duration: 10,
            opacity: 1,
            y: 0
        })

        gsap.to('#aboutMeSubtitle', {
            scrollTrigger: scrollTriggerInfo,
            // duration: 10,
            opacity: 1,
            y: 0
        })
    }, [])
 
    return (
        <section className="about-me">
            <InfoBoard 
                title="Shortly about myself:"
                idTitleAnimation="aboutMeTitle"
                subtitle={[
                    'Finished frontend courses at Den It',
                    'React development for two months,',
                    'Have experience working in a team and with git'
                ]}
                idSubtitleAnimation="aboutMeSubtitle"
                checkMark
            />

            <object 
                data={hacker} 
                type="image/svg+xml"
                className="about-me__hacker-icon"
                >    
            </object>
        </section>
    )
}
