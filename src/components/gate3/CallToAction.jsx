import LINKs from 'content/links'
import React from 'react'

const CallToAction = () => {
  return (
    <section class="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5 mb-5">
        <div class="bg-primary rounded-5 mt-2 mt-sm-4 mt-lg-5">
            <img class="position-absolute top-50 start-0 translate-middle-y d-none d-md-block" src="/assets/img/gate3/bg.svg" width="186" alt="Background flower" />
            <div class="row position-relative zindex-2 align-items-center">
                <div class="col-md-7 col-lg-5 offset-lg-1">
                    <div class="text-center text-md-start py-5 px-4 px-sm-5 pe-md-0 ps-lg-4 ps-xl-5">
                        <div class="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                            <span class="bg-white opacity-70 me-2 d-none d-md-block" style={{width: "40px", height: "1px", marginTop: "-1px"}}></span>
                            <span class="fs-xs fw-semibold text-white opacity-70 text-uppercase">Creating Exclusivity</span>
                        </div>
                        <h2 class="display-5 text-white pb-2 pb-sm-3">Get your web3 community started</h2>
                        <a class="btn btn-outline-light fs-base" href={LINKs.gate3} target = "_blank">Get started for free</a>
                    </div>
                </div>
                <div class='col-auto'></div>
                <div class="col d-flex">
                    <img class="d-lg-flex ms-auto d-none" src="/assets/img/gate3/coins.webp" width="634" alt="Image" style = {{margin: '-120px 0 -120px 0'}}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CallToAction