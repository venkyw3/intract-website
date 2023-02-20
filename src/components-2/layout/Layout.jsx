import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer2'
import Meta from './Meta'
import Aos from 'aos'
import 'aos/dist/aos.css'; 
import { Toaster } from 'react-hot-toast'

function Layout({children, aos, page}) {

    useEffect(() => {
        if(aos){
            Aos.init()
        }
	}, [])


   

    return (
        <>
            <Toaster />
            <Meta page = {page}/>
            <Navbar />
            <div class='' >
                {children}
            </div>
            <Footer />
            
        </>
    )
}

export default Layout;