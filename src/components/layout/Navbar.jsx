import React, { useState } from 'react'
import Link from 'next/link'
import LINKs from 'content/links';
import { useEffect } from 'react';

function Navbar() {

    const [show, setShow] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const [size, setSize] = useState('0px');

    // useEffect(() => {
    //     if (window.innerWidth < 720) {
    //         setSize('50px')
    //     } else {
    //         setSize('25px')
    //     }
    // }, [])


    return (
        <>
            {/* <a className='w-100 nav-link  px-4 bg-gradient  text-black d-flex align-items-center justify-content-center fixed-top  text-center  fs-sm' style = {{height: size}} href ={LINKs.litepaper} target="_blank" rel="noopener" >
            <span>
            😀 Learn about our vision, building approach & community perks by checking out{` `} 
                <span class='text-decoration-underline'>our Litepaper</span> 😀
            </span>
        </a> */}
            <header className="navbar navbar-expand-lg fixed-top bg-light" style={{ marginTop: size }}>
                <div className="container">
                    <Link href="/" passHref>
                        <a className="navbar-brand pe-sm-3" >
                            <span className="text-primary flex-shrink-0 me-2">
                                <img src="/assets/icon/logo.png" class='img-fluid' style={{ width: '40px' }} alt="Logo" />
                            </span>
                            Intract
                        </a>
                    </Link>
                    {/* <div class=" order-lg-2 me-3 me-lg-4 ms-auto">
                    <a class="btn btn-secondary btn-icon btn-sm btn-linkedin rounded-circle ms-3"  target="_blank" rel="noopener" href="https://www.linkedin.com/company/intract-buzz/">
                        <i class="ai-linkedin"></i>
                    </a>
                    <a class="btn btn-secondary btn-icon btn-sm btn-twitter rounded-circle ms-3"  target="_blank" rel="noopener" href="https://twitter.com/IntractBuzz">
                        <i class="ai-twitter"></i>
                    </a>
                    <a class="btn btn-secondary btn-icon btn-sm btn-discord rounded-circle ms-3"  target="_blank" rel="noopener" href="https://discord.gg/RUJueNaPEZ">
                        <i class="ai-discord"></i>
                    </a>
                </div> */}
                    {/* <Link href = "/community#signup-form" passHref scroll = {false}>
                    <a className="btn btn-outline-primary btn-sm rounded-pill fs-sm order-lg-3 d-none d-sm-inline-flex" >
                        Join our Community
                    </a>
                </Link> */}
                    {/* <a className="btn btn-primary btn-sm rounded-pill fs-sm order-lg-3 d-none ms-2 d-sm-inline-flex" href="https://gate3.intract.buzz?utm_source=website&utm_campaign=navbar" target="_blank" rel="noopener">
                    <i className="ai-login fs-xl me-2 ms-n1"></i>
                    Launch app
                </a> */}

                    <a className="btn btn-primary btn-sm rounded-pill fs-sm order-lg-3 d-none ms-2 d-sm-inline-flex" href="https://calendly.com/intract/partnerships?utm_source=website" target="_blank" rel="noopener">
                        <i className="ai-login fs-xl me-2 ms-n1"></i>
                        Schedule a call
                    </a>

                    <button className="navbar-toggler ms-sm-3" type="button" onClick={() => setShow(prev => !prev)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav className={`collapse navbar-collapse ${show && 'show'}`} id="navbarNav">
                        <ul className="navbar-nav navbar-nav-scroll me-auto" style={{ "--ar-scroll-height": "520px" }}>
                            {/* <li className="nav-item dropdown">
                                <a className='nav-link dropdown-toggle pointer' onClick={() => setShowProducts(prev => !prev)}>Products</a>
                                <div class={`dropdown-menu overflow-hidden ${showProducts && 'show'} p-0`}>
                                    <div class="d-lg-flex">
                                        <Link href="/products/intract" passHref>
                                            <a class="mega-dropdown-column " style={{ textDecoration: 'none' }}>
                                                <div class='p-4 py-5 d-none d-lg-block'>
                                                    <div className='h1 mb-1'>CRM3 <i class='ai-circle-arrow-right h3 mt-3'></i></div>
                                                    <div className='row no-gutters'>
                                                        <div className='col-8'>
                                                            <p className='fs-4 text-danger fw-bolder'>Community Analytics</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class='d-block d-lg-none ms-3 pt-2'>CRM3: Community Analytics</div>
                                            </a>
                                        </Link>
                                        <Link href="/products/gate3" passHref>
                                            <a class="mega-dropdown-column " style={{ textDecoration: 'none', borderLeft: '0.1px solid #5d5d5d' }}>
                                                <div class='p-4 py-5 d-none d-lg-block'>
                                                    <div className='h1 mb-1'>Gate3 <i class='ai-circle-arrow-right h3 mt-3'></i></div>
                                                    <div className='row no-gutters'>
                                                        <div className='col-8'>
                                                            <p className='fs-4 text-warning fw-bolder'>Token Gating</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class='d-block d-lg-none ms-3 pb-2'>Gate3: Token Gating</div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </li> */}
                            <li className="nav-item">
                                <div>
                                    <Link href="/community" passHref>
                                        <a className='nav-link'>Community</a>
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div>
                                    <a href={LINKs.litepaper} target="_blank" rel="noopener" className='nav-link'>Vision</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div>
                                    <a href={LINKs.blog} target="_blank" rel="noopener" className='nav-link'>Blog</a>
                                </div>
                            </li>
                        </ul>
                        <div className="d-sm-none p-3 mt-n3">
                            <a className="btn btn-primary w-100  mb-1" href = {LINKs.calendly} target="_blank" rel="noopener">
                                <i className="ai-login fs-xl me-2 ms-n1"></i>Schedule a call
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar;