import React from 'react'
import dynamic from 'next/dynamic';
import LINKs from 'content/links';
import Link from 'next/link';
const Jarallax = dynamic(() => import('./Jarallax'), { ssr: false });


function Hero() {

  return (
    <section class="  d-flex min-vh-100 position-relative overflow-hidden" style={{backgroundColor: 'black'}}>
        <div class='position-absolute' style = {{right: '0px'}}>
            <img class='background-image' src = "https://images.unsplash.com/photo-1591711584791-455de896b1e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        </div>
        <div class="container d-flex flex-column justify-content-center position-relative zindex-2 pt-sm-3 pt-md-4 pt-xl-5 pb-1 pb-sm-3 pb-lg-4 pb-xl-5">
            <div class="row flex-lg-nowrap align-items-center pb-5 pt-2 pt-lg-4 pt-xl-0 mt-lg-4 mt-xl-0">
                <div class="col-lg-12 text-center text-lg-center ">
                    <h1 class="display-1">  
                        <div class='text-white' style = {{fontSize: '90px'}}>
                            Building <span class='gradient-text'>Future of<br/> Marketing</span> in Web3
                        </div>
                    </h1>
                    <div class='d-flex justify-content-center text-white'>
                        <p className='lead ' style={{maxWidth: '900px'}}>
                            We’re an exclusive community (read cult 😛) of marketers, growth hackers, and thought leaders in Web3 - here to define the future of marketing.
                        </p>
                    </div>
                    <div class="d-flex justify-content-center justify-content-lg-center pt-4">
                        <div class="text-center">
                            <a class="btn btn-lg btn-primary rounded-pill  w-sm-auto" href="#">Read our litepaper</a>
                            <a class="btn btn-lg btn-primary rounded-pill ms-3 w-sm-auto" href="#">Join our community</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Hero

