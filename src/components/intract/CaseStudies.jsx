import React from 'react'

const CaseStudies = () => {
  return (
    <section class="container pt-5 pb-sm-3 mt-2 mt-sm-4 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
        <h2 class="h1 text-center">Recent case studies</h2>
        <p class="pb-4 mb-md-2 mb-lg-3 text-center">Below you'll find handpicked recent projects we are most proud of</p>
        <div class="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
          <div class="col-md-7 col-lg-6 mb-4 mb-md-0"><a class="d-block position-relative" href="portfolio-single-v1.html">
              <div class="bg-danger rounded-5 position-absolute top-0 start-0 w-100 h-100 aos-init" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
              <img class="d-block position-relative zindex-2 ms-auto aos-init" src="/assets/img/portfolio/list/08.png" width="636" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250" />
                </a></div>
          <div class="col-md-5 col-xl-4 offset-lg-1 aos-init" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div class="ps-md-3 ps-lg-0">
              <h2 class="h4 mb-lg-4">Automated whitelisting of 10k holders for Eternal Dragons</h2>
              <ul class="list-unstyled pb-1 pb-lg-2 mb-3">
                <li class="d-flex pb-1 mb-2"><i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Ran complex on chain quests to identify & award HODLers without going to Solscan, 30k real time transactions tracked</li>
                <li class="d-flex pb-1 mb-2"><i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Prevent scam attempts with 90% accuracy during whitelisting contests through on chain dashboard</li>
                <li class="d-flex pb-1 mb-2"><i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Collect 6k+ wallets via a secure connection & create discord link to engage holders</li>
              </ul>
              {/* <a class="btn btn-sm btn-outline-dark rounded-pill" href="portfolio-single-v1.html">Read the full story</a> */}
            </div>
          </div>
        </div>
      </section>
  )
}

export default CaseStudies