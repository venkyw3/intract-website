import React, {useEffect, useRef} from 'react'
import Swiper, {Pagination, Autoplay} from 'swiper'
Swiper.use([Pagination, Autoplay]);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function Blogs() {


    const swiper = useRef(null)
    const swiperMe = useRef(null)

    useEffect(() => {
        swiperMe.current = new Swiper(swiper.current, {
            spaceBetween: 24,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 }
            }
        })

    }, [])

  return (
    <section class="container pb-5 mb-2 mb-lg-3 mb-xl-4 mb-xxl-5 mt-5 pt-5">
        <h2 class="h1 pb-3 pb-lg-4 text-center pt-4">Editor's picks</h2>
            <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" ref = {swiper}>
                <div class="swiper-wrapper" id="swiper-wrapper-3893ae770a8a226d" aria-live="polite" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                    <article class="swiper-slide h-auto" role="group" aria-label="1 / 3" style={{width: "416px", marginRight: "24px"}}>
                        <div class="card border-0 bg-dark">
                            <div class="card-body pb-4">
                                <div class="d-flex align-items-center mb-4 mt-n1">
                                    <span class="fs-sm text-muted">12 hours ago</span>
                                    <span class="fs-xs opacity-20 mx-3">|</span>
                                    <a class="badge text-nav fs-xs border" href="#">Fashion</a>
                                </div>
                                <h3 class="h4 card-title"><a href="blog-single-v1.html">The fashion for eco bags with vintage prints</a></h3>
                                <p class="card-text">Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque...</p>
                            </div>
                            <div class="card-footer pt-3">
                                <a class="d-flex align-items-center text-decoration-none pb-2" href="#">
                                    <img class="rounded-circle" src="/assets/img/avatar/11.jpg" width="48" alt="Post author" />
                                    <h6 class="ps-3 mb-0">Lillia Black</h6>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article class="swiper-slide h-auto" role="group" aria-label="2 / 3" style={{width: "416px", marginRight: "24px"}}>
                        <div class="card border-0 bg-dark">
                            <div class="card-body pb-4">
                                <div class="d-flex align-items-center mb-4 mt-n1">
                                    <span class="fs-sm text-muted">12 hours ago</span>
                                    <span class="fs-xs opacity-20 mx-3">|</span>
                                    <a class="badge text-nav fs-xs border" href="#">Inspiration</a>
                                </div>
                                <h3 class="h4 card-title"><a href="blog-single-v2.html">How to look for inspiration for new goals</a></h3>
                                <p class="card-text">Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque...</p>
                            </div>
                            <div class="card-footer pt-3">
                                <a class="d-flex align-items-center text-decoration-none pb-2" href="#">
                                    <img class="rounded-circle" src="/assets/img/avatar/05.jpg" width="48" alt="Post author" />
                                    <h6 class="ps-3 mb-0">Darlene Robertson</h6>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article class="swiper-slide h-auto" role="group" aria-label="3 / 3" style={{width: "416px", marginRight: "24px"}}>
                        <div class="card border-0 bg-dark">
                            <div class="card-body pb-4">
                                <div class="d-flex align-items-center mb-4 mt-n1">
                                    <span class="fs-sm text-muted">July 16, 2022</span>
                                    <span class="fs-xs opacity-20 mx-3">|</span>
                                <a class="badge text-nav fs-xs border" href="#">Travel</a></div>
                                <h3 class="h4 card-title"><a href="blog-single-v3.html">Destinations to inspire and restore resources</a></h3>
                                <p class="card-text">Nec gravida senectus donec vivamus quam urna facilisis viverra eget in suspendisse...</p>
                            </div>
                            <div class="card-footer pt-3"><a class="d-flex align-items-center text-decoration-none pb-2" href="#">
                                <img class="rounded-circle" src="/assets/img/avatar/08.jpg" width="48" alt="Post author" />
                                <h6 class="ps-3 mb-0">Guy Hawkins</h6></a></div>
                        </div>
                    </article>
                </div>
            </div>
            <div class="text-center pt-4 mt-2 mt-lg-0 pt-lg-5 pb-sm-2 pb-md-4">
                <a class="btn btn-primary" href="blog-grid-sidebar.html">Read all articles</a>
            </div>
      </section>
  )
}

export default Blogs


// "
//       {
//        
//     "