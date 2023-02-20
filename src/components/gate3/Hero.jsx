import React from 'react'
import dynamic from 'next/dynamic';
import LINKs from 'content/links';

const Parallex = dynamic(() => import('./Parallex'), { ssr: false });


const Hero2 = () => {
    return (
        <section class="position-relative overflow-hidden pt-5">
            <div class="container position-relative zindex-2 pt-4 pt-sm-5 mt-2 mt-sm-0 mt-md-2 mt-lg-3 mt-xl-4 mt-xxl-5">
                <div class="row justify-content-center py-4">
                    <div class="col-lg-11 col-xl-10 text-center pb-2 pb-sm-3 mb-lg-2 mb-xl-3">
                        <h1 class="display-1 fw-normal mb-0 d-none d-lg-block" style={{fontSize: '80px'}}>
                            <span class="fw-bold">Simplest way to build <span className='fw-bolder gradient-text'>token gated communities</span></span>
                        </h1>
                        <h1 class="display-1 fw-normal mb-0 d-block d-lg-none">
                            <span class="fw-bold">Simplest way to build <span className='fw-bolder gradient-text'>token gated communities</span></span>
                        </h1>
                        <p className='fs-3 mt-3 px-lg-4'>Finding it difficult to talk to your token holders in the noise of discord? Want to discourage flippers & give perks to those who HODL?</p>
                        <a class="btn btn-lg btn-primary rounded-pill btn-block w-100 w-lg-auto mt-3" href = {LINKs.gate3} target="_blank" rel="noopener">
                            Get Started for Free
                        </a>
                    </div>
                </div>
                <Parallex />
            </div>
      </section>
  )
}

export default Hero2


