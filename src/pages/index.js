import React, { useState, useEffect } from 'react'

import Layout from 'components/layout/Layout'
import Signup from 'components/home/Signup';
import Features2 from 'components/home/Features2';
import Demo from 'components/home/Demo';
import Customers from 'components/home/Customers';
import Hero from 'components/home/Hero';
import Integrations from 'components/home/Integrations';
import About from 'components/home/About';
import Testimonials from 'components/home/Testimonials';

import ExitIntent from "components/layout/ExitIntent"
import ExitIntentModal from "components/layout/ExitIntentModal"
import Investors from 'components/home/Investors';
import Hero2 from 'components/intract/Hero';


export default function Home() {


    const [showPopup, setShowPopup] = useState(null)
    const [time, setTime] = useState(0);



    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(prev => prev + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])



    useEffect(() => {
        const removeExitIntent = ExitIntent({
            threshold: 0,
            eventThrottle: 100,
            onExitIntent: () => {
                time > 2 ? setShowPopup(prev => (prev === null || prev) ? true : false) : ''
            },
        })
        return () => {
            removeExitIntent()
        }
    })

    return (
        <Layout page="home" aos={true}>
            <Hero />
            <Investors />
            {/* <Investors /> */}
            {/* <About /> */}
            {/* <Features /> */}
            {/* <Integrations /> */}
            <Demo />
            <Features2 />
            <Customers />
            {/* <Testimonials /> */}
            {/* <Signup /> */}

            {/* <ExitIntentModal show={showPopup} setShow = {setShowPopup}/> */}
        </Layout>
    )
}
