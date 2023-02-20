import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/autoplay";


const Testimonials = () => {
  return (
    <section class="container pt-5 pb-sm-3 mt-2 mt-sm-4 mb-2 mb-md-3 mb-lg-4 mb-xxl-5 ">
        <h2 class="h1 text-center mt-5">Recent case study</h2>
        <p class="pb-4 lead mb-md-2 mb-lg-3 text-center">You'll find our favorite recent projects below</p>
        <div class="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
            <div class="col-md-7 col-lg-7 mb-4 mb-md-0">
                <div class="card border-0 bg-dark">
                    <div class="card-body">
                        <figure>
                            <blockquote class="blockquote">
                                <p>
                                    The team at Intract was instrumental in helping us run our highly successful whitelist campaign. 
                                    Their platform is robust and user-friendly, and their team is extremely responsive and helpful.
                                    We couldn't have done it without them!
                                </p>
                            </blockquote>
                            <figcaption class="blockquote-footer align-items-center">
                                <div class="d-flex align-items-center">
                                    <img src="/assets/img/home/moe.jpg" class="rounded-circle" width="60" alt="Moe" />
                                    <div class="ps-3">
                                        <div class="h6 mb-1">Moe Iman</div>
                                        <div class="fs-sm text-muted">Mean DAO</div>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="col-md-5 col-xl-5 aos-init" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
                <div class="pl-md-3 pl-lg-2 px-5">
                    <h2 class="h4 mb-lg-4">Automated whitelisting of 10k holders for Eternal Dragons</h2>
                    <ul class="list-unstyled pb-1 pb-lg-2 mb-3">
                        <li class="d-flex pb-1 mb-2"><i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Ran on-chain quests to automatically identify & reward HODLers, 130,000+ real time transactions tracked</li>
                        <li class="d-flex pb-1 mb-2"><i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Prevented scam attempts with 99% accuracy during whitelist contests through data dashboard</li>
                        <li class="d-flex pb-1 mb-2"><i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Collected 6,000+ wallets via a secure connection & linked Discord to engage community</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Testimonials



let logos = [{
    img: '/assets/img/landing/creative-agency/team/02.jpg'
}, {
    img: '/assets/img/landing/creative-agency/team/02.jpg'
}, {
    img: '/assets/img/landing/creative-agency/team/02.jpg'
}, {
    img: '/assets/img/landing/creative-agency/team/02.jpg'
}, {
    img: '/assets/img/landing/creative-agency/team/02.jpg'
}, {
    img: '/assets/img/landing/creative-agency/team/02.jpg'
}, {
    img: '/assets/img/landing/creative-agency/team/02.jpg'
}]


const swiperOptions = {
    "breakpoints": {
      "30": {
        "slidesPerView": 2
      },
      "600": {
        "slidesPerView": 2
      },
      "768": {
        "slidesPerView": 3
      },
      "840": {
        "slidesPerView": 3
      },
      "1000": {
        "slidesPerView": 3
      },
      "1200": {
        "slidesPerView": 3
      }
    }
}