import React from 'react'
import dynamic from 'next/dynamic';
import LINKs from 'content/links';
import Link from 'next/link';
const Jarallax = dynamic(() => import('./Jarallax'), { ssr: false });


function Hero() {

  return (
    <section class="container-fluid py-5 mt-4 px-sm-4 px-md-5" >
        <div class="dark-mode bg-dark rounded-5 position-relative overflow-hidden py-5 px-3 px-sm-4 px-xl-5 mt-2 mx-md-n3 mx-lg-auto" style={{maxWidth: "1660px"}}>
            <Jarallax />
            <div class="bg-white position-absolute top-0 start-0 w-100 h-100" style={{opacity: "2%"}}></div>
            <div class="container position-relative zindex-2 py-4 pt-lg-3 pt-xl-3 pt-xxl-3">
                <div class="row pt-md-3 pt-lg-5 justify-content-center">
                    <div class="col-lg-12 col-xxl-10 pb-lg-5 ">
                        <h1 class="display-1 text-center text-lg-center text-xxl-large mx-n4 mx-lg-0">  
                            <div class='d-none d-lg-block' style = {{fontSize: '5rem'}}>  
                                A <span class='gradient-text'>club of the best growth minds</span> in Web3
                            </div>
                            <div class="d-block d-lg-none" style = {{fontSize: '3.4rem'}}>  
                                A <span class='gradient-text'>club of the best growth minds</span> in Web3
                            </div>
                        </h1>
                        <p className='text-center lead px-lg-5  mx-lg-auto' style={{maxWidth: "870px"}}>
                        Build your network, get the right alpha, and have priority access to the best growth tools in web3.
                        </p>
                        <div class="d-lg-flex justify-content-center mt-5 text-center">
                            <Link href = "/community#signup-form" passHref scroll = {false}>
                                <a class="btn btn-lg btn-primary rounded-pill btn-block w-100 w-lg-auto me-sm-4"> 
                                Join our Community
                                </a>
                            </Link>
                            <a class="btn btn-lg btn-outline-info rounded-pill  w-100 w-lg-auto mt-3 mt-lg-0" href = {LINKs.litepaper} target="_blank" rel="noopener">
                            {/* <a class="" href = {LINKs.litepaper} target="_blank" rel="noopener"> */}
                                <i className="ai-bulb fs-xl me-1 "></i>
                                Vision
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Hero

