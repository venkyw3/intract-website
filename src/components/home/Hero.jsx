import React from 'react'
import dynamic from 'next/dynamic';
import LINKs from 'content/links';
import Link from 'next/link';
const Jarallax = dynamic(() => import('./Jarallax'), { ssr: false });


function Hero() {

  return (
    <section class="container-fluid py-5 mt-4 px-sm-4 px-md-5">
        <div class="dark-mode bg-dark rounded-5 position-relative overflow-hidden py-5 px-3 px-sm-4 px-xl-5 mt-2 mx-md-n3 mx-lg-auto" style={{maxWidth: "1660px"}}>
            <Jarallax />
            <div class="bg-white position-absolute top-0 start-0 w-100 h-100" style={{opacity: "2%"}}></div>
            <div class="container position-relative zindex-2 py-4 pt-lg-3 pt-xl-3 pt-xxl-3">
                <div class="row pt-md-3 pt-lg-5 justify-content-center">
                    <div class="col-lg-12 col-xxl-10 pb-lg-5 ">
                        <h1 class="display-1 text-center text-lg-center text-sm-large">  
                            <div class='d-none d-lg-block' >
                                <span class='gradient-text'>The ultimate growth platform built for & by the best marketers</span> in web3
                            </div>
                            <div class="d-block d-lg-none" style = {{fontSize: '3rem'}}>  
                                <span class='gradient-text'>The ultimate growth platform built for & by the best marketers</span> in web3
                            </div>
                        </h1>
                        <p className='text-center lead px-lg-5  mx-lg-auto' style={{maxWidth: "870px"}}>
                        Join our community of growth leaders to discover alpha & get free access to the best web3 growth platform out there
                        </p>
                        <div class="d-lg-flex justify-content-center mt-5 text-center">
                            <a class="btn btn-lg btn-primary rounded-pill btn-block w-100 w-lg-auto me-sm-4" href = {LINKs.gate3} target="_blank" rel="noopener">
                                Explore The Platform
                            </a>
                            <Link href = "/community#signup-form" passHref scroll = {false}>
                                <a class="btn btn-lg btn-primary rounded-pill  w-100 w-lg-auto mt-3 mt-lg-0"> 
                                Join Our Community
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Hero

