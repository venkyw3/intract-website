import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Meta from './Meta'
import Aos from 'aos'
import 'aos/dist/aos.css'; 
import { Toaster } from 'react-hot-toast'

function Layout({children, aos, page}) {

    const [size, setSize] = useState('0px');

    useEffect(() => {
        if(aos){
            Aos.init()
        }
	}, [])

    useEffect(() => {
        if (window.innerWidth < 720) {
            setSize('75px')
        } else {
            setSize('50px')
        }
    }, [])

   

    return (
        <>
            <Toaster />
            <Meta page = {page}/>
            <Navbar />
            <div class='' style = {{marginTop: size}}>
                {children}
            </div>
            <Footer />
            
        </>
    )
}

export default Layout;