import Link from 'next/link'
import React from 'react'

function Features() {
  return (
    <div className='mt-5'>
        <section class="pt-4 bg-info rounded m-lg-4">
            <div class="container py-md-2 my-5">
                <h2 class="h1 text-center pt-1 pt-sm-4">The complete web3 growth toolkit</h2>
                <p class="text-center lead mx-auto pb-3 mb-3 mb-lg-5" style={{maxWidth: "900px"}}>
                Our tools help you run the most effective & data-backed growth campaigns across all channels such as communities, partnerships, Twitter, KOLs and much more.
                </p>
                <div class="row g-4 pb-2 pb-sm-4 mb-sm-2">
                    <div class="col-md-5">
                        <div class="card border-0 h-100">
                            <div class="card-body">
                                <img class="d-none d-dark-mode-block" src="/assets/img/home/features-gate3.png" alt="Image"/>
                                <div class="pt-3 mt-2 mt-lg-3">
                                    <h3>Token Gating</h3>
                                    <p class="mb-0"> 
                                        Offer exclusive communication & perks for your verified token holders in the community.
                                    </p>
                                    <Link href = "/products/gate3" passHref>
                                        <a class="btn btn-link p-0 mt-3">Get started<i class="ai-arrow-right ms-2"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="card border-0 h-100">
                            <div class="card-body overflow-hidden">
                                <div class="d-sm-flex align-items-center">
                                    <span class="d-block order-sm-2 flex-shrink-0 " >
                                        <img src="/assets/img/home/features-crm.png" className = 'py-4 py-lg-0' width="297" alt="Image"/>
                                    </span>
                                    <div class="order-sm-1 pe-sm-3 me-xl-4">
                                        <h3>Analytics CRM</h3>
                                        <p class="pb-3 mb-1 mb-xl-3">
                                            Community-first CRM and analytics tool to collect off-chain & on-chain data, build member segments and engage your community.
                                        </p>
                                        <Link href = "/products/intract" passHref>
                                            <a class="btn btn-link p-0">Get started<i class="ai-arrow-right ms-2"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="card border-0 h-100">
                            <div class="card-body overflow-hidden">
                                <div class="">
                                    <div class="d-block order-sm-2 flex-shrink-0 py-2 py-lg-n4" >
                                        {/* <img class="d-none d-dark-mode-block" src="/assets/img/home/features-airdrops.png" width="300" alt="Image"/> */}
                                        <img class="d-none d-dark-mode-block mb-auto " src="/assets/img/home/coming-soon.png" alt="Image" style = {{maxHeight: '200px', marginLeft:"auto", marginRight:"auto"}}/>
                                        
                                    </div>
                                    <div class="order-sm-1 pe-sm-3 me-xl-4">
                                        <h3 class='mt-3'>Growth Hacking</h3>
                                        <p class="pb-3 mb-1 mb-xl-3">
                                        You can attribute incoming users, measure ROI, CAC & LTV for all your campaigns, weed out bots and scale value-for-money partnerships.
                                        </p>
                                        <Link href = "https://calendly.com/nishank-intract/30min"  passHref>
                                            <a class="btn btn-link p-0" target="_blank">Book a demo<i class="ai-arrow-right ms-2"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="card border-0 h-100 d-flex align-items-center">
                            <div class="card-body d-flex flex-column align-items-center">
                                {/* <img class="d-none d-dark-mode-block mb-auto" src="/assets/img/home/coming-soon.png" alt="Image" style = {{maxHeight: '300px'}}/> */}
                                <img class="d-none d-dark-mode-block" src="/assets/img/home/features-airdrops.png" width="300" alt="Image"/>
                                <div class="pt-3 mt-2 mt-lg-3">
                                    <h3>Exciting products coming along</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Features