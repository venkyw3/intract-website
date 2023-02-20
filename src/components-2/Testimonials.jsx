import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const Testimonials = () => {
    return (
        <section class="position-relative pt-5 mt-lg-3 mt-xl-4 mt-xxl-5 mb-5 pb-5">
            <div class="position-absolute w-100 start-0 bottom-0 overflow-hidden">
                <div
                    class="text-primary opacity-10"
                    style={{ width: "3840px", height: "250px" }}
                >
                    <svg
                        width="3840"
                        height="250"
                        viewBox="0 0 3840 250"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3840,32.1V250H0V32.1c72.5,0,112.1-17.4,271.6,5.5c199.3,28.5,206,34.7,378.4,29c172.4-5.7,287.8-34.5,418.9-34.5S1317,55.2,1430,48.4c113-6.8,176.5-37.9,248-45.9c15.4-1.7,33-2.6,51.8-2.6c68.4,0.1,166.7,14,223.1,23.4c84.8,6.6,128.1,27.8,288.5,43.5c199.8,19.5,156.2,5.5,328.6-0.2c172.4-5.7,287.8-34.5,418.9-34.5c131.1,0,248.1,23.1,361.1,16.3c113-6.8,176.5-37.9,248-45.9c15.4-1.7,33-2.6,51.8-2.6C3718.2,0,3800.9,11.2,3840,32.1z"></path>
                    </svg>
                </div>
            </div>
            <div class="container position-relative zindex-2 pb-3 pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-md-3 mt-xxl-2 mb-3 mb-lg-4">
                <div class="text-center mx-auto" style={{ maxWidth: "600px" }}>
                    <h2 class="h1">Loved by growth leaders</h2>
                    <svg
                        class="d-inline-block heartbeat text-danger"
                        width="52"
                        height="38"
                        viewBox="0 0 52 38"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M52,6.3c0.8-12.6-18.6-4-24.8,1.6c-0.4,0.4-1.1,0.4-1.5,0.1C9.9-2.7-2,1.5,0.3,10c1.5,5.6,16.2,20.4,25.5,27.7c0.4,0.3,1,0.3,1.4,0C36.7,29.5,51.2,19.1,52,6.3z"></path>
                    </svg>
                </div>
            </div>
            <div class="container pe-0">
                {/* <Swiper 
                modules={[Autoplay]}
                // slidesPerView={3}
                breakpoints = {swiperOptions.breakpoints}
                loop={true}
                freeMode={true}
                speed={3000}
                className="swiper-container " 
                autoplay={{
                    // delay: 1,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false
                }}
            >
              <SwiperSlide className="py-3">
                    
                </SwiperSlide>
              <SwiperSlide className="py-3">
                    
                </SwiperSlide>
              <SwiperSlide className="py-3">
                    
                </SwiperSlide>
            </Swiper> */}

                <div className="row">
                    <div className="col-12 col-lg-4 mb-lg-0 mb-3 ">
                        <div class="card border-0 bg-white text-dark mx-4">
                            <div class="card-body">
                                <div class="d-flex align-items-center mt-n2 mb-2">
                                    <div
                                        class="rounded-circle bg-faded-danger d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "50px",
                                            height: "50px"
                                        }}
                                    >
                                        <img
                                            src={testimonials[0].avatar}
                                            class=""
                                            width="80"
                                            alt={testimonials[0].name}
                                            style={{ borderRadius: "50px" }}
                                        />
                                    </div>
                                </div>
                                <p
                                    class="fw-bold fs-4"
                                    style={{ color: "black" }}
                                >
                                    “{testimonials[0].testimonial}”
                                </p>
                                <div
                                    class="fw-bold fs-6"
                                    style={{ color: "black" }}
                                >
                                    -- {testimonials[0].name}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 mb-lg-0 mb-3">
                        <div class="card border-0 bg-white text-dark mx-4">
                            <div class="card-body">
                                <div class="d-flex align-items-center mt-n2 mb-2">
                                    <div
                                        class="rounded-circle bg-faded-danger d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "50px",
                                            height: "50px"
                                        }}
                                    >
                                        <img
                                            src={testimonials[1].avatar}
                                            class=""
                                            width="80"
                                            alt={testimonials[1].name}
                                            style={{ borderRadius: "50px" }}
                                        />
                                    </div>
                                </div>
                                <p
                                    class="fw-bold fs-4"
                                    style={{ color: "black" }}
                                >
                                    “{testimonials[1].testimonial}”
                                </p>
                                <div
                                    class="fw-bold fs-6"
                                    style={{ color: "black" }}
                                >
                                    -- {testimonials[1].name}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 mb-lg-0 mb-3">
                        <div class="card border-0 bg-white text-dark mx-4">
                            <div class="card-body">
                                <div class="d-flex align-items-center mt-n2 mb-2">
                                    <div
                                        class="rounded-circle bg-faded-danger d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "50px",
                                            height: "50px"
                                        }}
                                    >
                                        <img
                                            src={testimonials[2].avatar}
                                            class=""
                                            width="80"
                                            alt={testimonials[2].name}
                                            style={{ borderRadius: "50px" }}
                                        />
                                    </div>
                                </div>
                                <p
                                    class="fw-bold fs-4"
                                    style={{ color: "black" }}
                                >
                                    “{testimonials[2].testimonial}”
                                </p>
                                <div
                                    class="fw-bold fs-6"
                                    style={{ color: "black" }}
                                >
                                    -- {testimonials[2].name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events" >
            <div class="swiper-wrapper" aria-live="polite" >
                <div class="swiper-slide w-auto swiper-slide-duplicate swiper-slide-duplicate-prev" style={{marginRight: '24px'}}>
                <div class="card-hover text-center" style="max-width: 306px;">
                    <img class="d-block rounded-5 mb-4" src="assets/img/landing/creative-agency/team/02.jpg" alt="Image" />
                    <h3 class="h5 mb-1">Alisa Black</h3>
                    <p class="text-muted mb-2">Head of marketing</p>
                </div>
              </div>
              </div>
          </div> */}
            </div>
        </section>
    );
};

export default Testimonials;

const swiperOptions = {
    breakpoints: {
        30: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        840: {
            slidesPerView: 3
        },
        1000: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 3
        }
    }
};

const testimonials = [
    {
        name: "Hang Zhang",
        avatar: "https://intract-dashboard-files.s3.ap-south-1.amazonaws.com/landing-page/hangZ.jpeg",
        testimonial:
            "The community spirit of HoG is wonderful. The folks here are all web3 growth experts who’re not only helpful but also leave you with great food for thought."
    },
    {
        name: "Irakli Budia",
        avatar: "https://intract-dashboard-files.s3.ap-south-1.amazonaws.com/landing-page/irakli.jpeg",
        testimonial:
            "The community has pretty laid-back vibes where people can easily reach out to fellow members. They discuss, ideate, and even build together. The best place for growth hackers."
    },
    {
        name: "Moe Iman",
        avatar: "https://intract-dashboard-files.s3.ap-south-1.amazonaws.com/landing-page/moe.jpeg",
        testimonial:
            "Top tier industry alpha on web3 growth, right from the ones who define the space. Along with guides, playbooks, hacks, and whatnot. HoG is the hub of everything growth and marketing."
    }
];
