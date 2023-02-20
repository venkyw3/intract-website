import React from 'react'
import Image from 'next/image'
import LINKs from 'content/links'
import Link from 'next/link'

function Signup() {
    return (
        <section class="pt-2 pt-md-0">
            <div class="position-relative pt-lg-3 pt-xl-4 pt-xxl-5">
                <div class="bg-primary position-absolute top-0 start-0 w-100 h-100 rounded-5 d-md-none" data-aos="zoom-in" data-aos-duration="700" data-aos-offset="300"></div>
                <div class="bg-primary position-absolute top-0 start-0 w-100 h-100 d-none d-md-block" style={{borderRadius: "5rem 5rem 0 0"}} data-aos="zoom-in" data-aos-duration="700" data-aos-offset="300"></div>
                <div class="container dark-mode px-4 px-sm-5 px-md-0 position-relative zindex-2 pt-md-4 pt-lg-5 pb-sm-2 pb-md-3 pb-xl-4 pb-xxl-5">
                    <div class="row justify-content-center" data-aos="fade-up" data-aos-duration="500" data-aos-offset="300">
                        <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-11 text-center py-5">
                            <h2 class="display-4 mb-4">Excited to be part of the future of growth and want a whitelist to all our products?</h2>
                            <div class="d-sm-flex justify-content-center">
                                {/* <a class="btn btn-lg btn-warning rounded-pill w-100 w-sm-auto me-sm-4 mb-3 mb-sm-0" href={LINKs.gate3} target="_blank" rel="noopener">
                                    Get Started for Free
                                </a> */}
                                <Link href = "/community#signup-form" passHref scroll = {false}>
                                <a class="btn btn-lg btn-warning rounded-pill w-100 w-sm-auto" >
                                    Join our community
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="position-relative zindex-2 px-md-5">
                    <img class="d-none d-dark-mode-block mx-auto" src="/assets/img/home/dash-dark.png" width="1076" alt="Dashboard" />
                </div>
            </div>
      </section>
    )
}

export default Signup