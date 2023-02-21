import React from 'react'
import dynamic from 'next/dynamic';
import LINKs from 'content/links';

const Features = () => {
    return (
        <section class="container pb-4 mb-2 my-lg-3 my-xl-4 my-xxl-5"> {/*pt-5*/ }
             {/* <div class="bg-primary"> */}
            <div class="container dark-mode position-relative zindex-5"> {/*pt-5 mt-4 mt-lg-5*/}
             <div class="row justify-content-center text-center pt-md-2 pt-lg-0 pt-xl-2 pb-5 mb-md-2">
                    <div class="col-lg-10 col-xl-10 col-xxl-9">
                        <span class="badge bg-faded-light fs-sm text-white px-3 mb-4">Take your community building to the next level</span>
                        <h2 class="display-2 fw-bolder mb-sm-4">Data analytics for your web3 growth hacking</h2>
                        <p class="pb-3 mb-3 mb-lg-4 lead">The complete web3 CRM to understand, acquire and engage your users</p>
                        <a class="btn btn-lg btn-primary" href={LINKs.calendly} target="_blank" rel="noopener">Consult our Web3 Growth Experts</a>
                    </div>
                </div>
            <div class=" rounded-4 p-2 mx-auto" >
                <div class="overflow-hidden d-none d-lg-block" style={{ borderRadius: "calc(var(--ar-border-radius) * 1.25)" }}>
                    <img src="/assets/img/intract/dashboard.png" alt="Dashboard Dark Mode" />
                </div>
                <div class="overflow-hidden d-block d-lg-none" >
                    <img src="/assets/img/intract/dashboard-mobile.png" alt="Dashboard Dark Mode" />
                </div>
            </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default Features