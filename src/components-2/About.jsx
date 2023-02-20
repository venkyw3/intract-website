import LINKs from 'content/links'
import React from 'react'

const About = () => {
  return (
    <section class="container position-relative py-5 my-lg-3 my-xl-4 my-xxl-5">
        <div class="position-absolute aos-init aos-animate" style={{marginLeft: "-12.7%", marginTop: '-12%', zIndex: '-1'}} data-aos="zoom-in" data-aos-duration="500" data-aos-offset="300" data-disable-parallax-down="lg">
            <svg class="d-none d-lg-block" width="500" height="500" viewBox="0 0 500 500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style = {{color: 'rgba(210, 202, 239, 0.09)'}}>
                <circle cx="250" cy="250" r="250"></circle>
            </svg>
        </div>
        <div class="row pt-2 py-md-4">
            <div class="col-lg-10 col-xl-9">
                <h1>For the community, by the community</h1>
                <p class="lead text-dark pb-md-2 pb-lg-3 mb-2">
                    We are a think-tank of the foremost growth experts laying the brickwork for projects to grow and thrive in the new web3 paradigm for years to come.
                </p>
                <a class="btn btn-lg btn-link px-0" href = {LINKs.litepaper} target="_blank" rel="noopener">Our vision<i class="ai-arrow-right ms-2"></i></a>
            </div>
        </div>
    </section>
  )
}

export default About