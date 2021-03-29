import React, { useEffect } from 'react'
import InfoBoard from '../InfoBoard/InfoBoard'

// GSAP
import gsap from 'gsap/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/all'; // Needed to describe styles through GSAP

export const MyKnowledge = () => {
    gsap.registerPlugin(ScrollTrigger)
        
    const scrollTriggerInfo = {
        trigger: '.my-knowledge',
        start: 'bottom',
        end: '+=10%',
        scrub: true,
        pin: true,
        markers: true
    }

    useEffect(() =>  {
        // gsap.to('.s', {
        //     scrollTrigger: scrollTriggerInfo,
        //     duration: 1,
        //     right: '-210px'
        // })

        gsap.to('#myKnowledgeTitle', {
            scrollTrigger: scrollTriggerInfo,
            // duration: 1,
            opacity: 1,
            y: 0
        })

        gsap.to('#myKnowledgeSubtitle', {
            scrollTrigger: scrollTriggerInfo,
            // duration: 1,
            opacity: 1,
            y: 0
        })
    }, [])

    return (
        <section className="my-knowledge main-content">
            <InfoBoard 
                title="My knowledge"
                idTitleAnimation="myKnowledgeTitle"
                subtitle={[
                    'Html',
                    'Css (sass/scss, less)',
                    'Js (es6+)',
                    'Unit тестирование (Jest)',
                    'React js',
                    'Gulp',
                    'Git',
                    'English (Pre-intermediate)'
                ]}
                idSubtitleAnimation="myKnowledgeSubtitle"
            />
        </section>
    )
}
