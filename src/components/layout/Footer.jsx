import React from 'react'
import Link from 'next/link'
import LINKs from 'content/links';

const Footer =  () => {
  return (
    <footer class="footer bg-dark dark-mode position-relative py-5 ">
        <div class="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: "rgba(255, 255, 255, .02)"}}></div>
            <div class="container position-relative zindex-2 pb-xl-2 pt-2 pt-sm-3 pt-xl-4 pt-xxl-5">
                <div class="row pb-5 pt-md-3 pt-lg-4 mb-md-3 mb-lg-4">
                    <div class="col-md-6 col-xxl-5 pb-3 pb-md-0 mb-2 mb-sm-3 mb-md-0">
                        <div class='mb-3'>
                            <div class='btn-shine'>Get early access</div>
                        </div>
                        <div class="h1 pb-3">Book a call and get <span class='gradient-text'> free 15 days access</span> to our products.</div>
                        <a class="btn btn-outline-light" href="https://calendly.com/intract/partnerships?utm_source=website" target="_blank" rel="noopener">Schedule a call</a>
                    </div>
                    <div class="col-md-5 col-xl-4 offset-md-1 offset-xl-2 offset-xxl-3">
                        <div class="row ">
                            {/* <div class="col-6">
                                <ul class="nav flex-column pb-4 mb-2 pb-md-5 mb-lg-1">
                                    <li class="nav-item mt-1">
                                        <span class="fw-bold">Products</span>
                                    </li>
                                    <li class="nav-item mt-1">
                                        <Link href = "/products/gate3" passHref>
                                            <a class="nav-link py-1 px-0">Gate3</a>
                                        </Link>
                                    </li>
                                    <li class="nav-item mt-1">
                                        <Link href = "/products/intract" passHref>
                                            <a class="nav-link py-1 px-0">Community Analyticsss</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                            <div class='col-8'>
                                <ul class="nav flex-column pb-4 mb-2 pb-md-5 mb-lg-1">
                                    <li class="nav-item mt-1">
                                        <span class="fw-bold">Sitemap</span>
                                    </li>
                                    <li class="nav-item mt-1">
                                        <Link href = "/community" passHref>
                                            <a class="nav-link py-1 px-0">Community</a>
                                        </Link>
                                    </li>
                                    <li class="nav-item mt-1">
                                        <Link href = {LINKs.litepaper} passHref>
                                            <a class="nav-link py-1 px-0">Vision</a>
                                        </Link>
                                    </li>
                                    <li class="nav-item mt-1">
                                        <Link href = "/blogs" passHref>
                                            <a class="nav-link py-1 px-0">Blogs</a>
                                        </Link>
                                    </li>
                                    {/* <li class="nav-item mt-1">
                                        <Link href = "/blogs" passHref>
                                            <a class="nav-link py-1 px-0">Blogs</a>
                                        </Link>
                                    </li> */}
                                </ul>
                                <div class="d-flex">
                                    <a class="btn btn-secondary btn-icon btn-sm btn-linkedin rounded-circle me-3" target="_blank" rel="noopener" href="https://www.linkedin.com/company/intract-buzz/">
                                        <i class="ai-linkedin"></i>
                                    </a>
                                    <a class="btn btn-secondary btn-icon btn-sm btn-twitter rounded-circle me-3" target="_blank" rel="noopener" href="https://twitter.com/IntractBuzz">
                                        <i class="ai-twitter"></i>
                                    </a>
                                    {/* <a class="btn btn-secondary btn-icon btn-sm btn-discord rounded-circle me-3" target="_blank" rel="noopener" href="https://discord.gg/RUJueNaPEZ">
                                        <i class="ai-discord"></i>
                                    </a> */}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <p class="fs-sm mb-0"><span class="opacity-70">© All rights reserved. Made by </span>Intract</p>
        </div>
    </footer>
  )
}

export default Footer