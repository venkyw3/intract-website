import React from 'react'

function Integrations() {
  return (
    <section class="container overflow-hidden  mt-4 mt-md-3 mt-lg-2 mt-xl-4 mt-xxl-5 pb-5 ">
        <div class="row align-items-center mt-2 pt-2 pt-sm-4 pt-lg-5">
          <div class="col-md-5 text-center text-md-start pe-md-5 pe-lg-0 pe-xxl-4 ps-xl-5 mb-5 mb-md-0">
            <h2 class="h1 pb-3 pb-xl-2 mb-lg-4 mb-xl-5">Integrate with all your favorite tools & blockchains in just a few clicks.</h2>
          </div>
          <div class="col-md-7 col-lg-6 offset-lg-1">
            <div class="position-relative mx-auto" style={{maxWidth: "510px"}}>
                <img class="d-block d-dark-mode-none" src="/assets/img/illustrations/circle-gray-1.png" style={{animation: "rotate-cw 100s linear infinite"}} alt="Circle" />
                <img class="d-none d-dark-mode-block" src="/assets/img/illustrations/circle-light-1.png" style={{animation: "rotate-cw 100s linear infinite"}} alt="Circle" />
                <img class="d-block d-dark-mode-none position-absolute top-0 start-0" src="/assets/img/illustrations/circle-gray-2.png" style={{animation: "rotate-ccw 50s linear infinite"}} alt="Circle" />
                <img class="d-none d-dark-mode-block position-absolute top-0 start-0" src="/assets/img/illustrations/circle-light-2.png" style={{animation: "rotate-ccw 50s linear infinite"}} alt="Circle" />
                <img class="position-absolute top-0 start-0 zindex-2 aos-init aos-animate" src="/assets/img/brands/polygon.png" data-aos="fade" data-aos-duration="600" data-aos-offset="250" data-aos-delay="1200" alt="Icon" />
                <img class="position-absolute top-0 start-0 zindex-2 aos-init aos-animate" src="/assets/img/brands/ether.png" data-aos="fade" data-aos-duration="600" data-aos-offset="250" data-aos-delay="450" alt="Icon" />
                <img class="position-absolute top-0 start-0 zindex-2 aos-init aos-animate" src="/assets/img/brands/avalanche.png" data-aos="fade" data-aos-duration="600" data-aos-offset="250" data-aos-delay="600" alt="Icon" />
                <img class="position-absolute top-0 start-0 zindex-2 aos-init aos-animate" src="/assets/img/brands/binance.png" data-aos="fade" data-aos-duration="600" data-aos-offset="250" data-aos-delay="750" alt="Icon" />
                <img class="position-absolute top-0 start-0 zindex-2 aos-init aos-animate" src="/assets/img/brands/immutablex.png" data-aos="fade" data-aos-duration="600" data-aos-offset="250" data-aos-delay="900" alt="Icon" />
                <img class="position-absolute top-0 start-0 zindex-2 aos-init aos-animate" src="/assets/img/brands/solana.png" data-aos="fade" data-aos-duration="600" data-aos-offset="250" data-aos-delay="1050" alt="Icon" />
                <img class="position-absolute top-0 start-0 zindex-2 aos-init aos-animate" src="/assets/img/brands/discord.png" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250" alt="Icon" />
                <img class="position-absolute top-0 start-0 zindex-2 aos-init aos-animate" src="/assets/img/brands/twitter.png" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250" data-aos-delay="150" alt="Icon" />
                <img class="position-absolute top-0 start-0 zindex-2 aos-init aos-animate" src="/assets/img/brands/metamask.png" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250" data-aos-delay="300" alt="Icon" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Integrations