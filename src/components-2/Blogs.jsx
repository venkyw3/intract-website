import React from 'react'

const Blogs = () => {
  return (
    <section class="container pt-5 mt-5 pb-sm-3 mt-2 mt-sm-4 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
        <h2 class="h1 text-center">Recent blogs</h2>
        <p class="pb-4 mb-md-2 mb-lg-3 text-center">Take your growth hacking to the next level with our free resources and blogs.</p>
        <div class="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
            <div class="col-md-7 col-lg-6 mb-4 mb-md-0">
                <a class="d-block position-relative" href="https://mirror.xyz/0xd8e06d311355B18acbC9C4f4436Bc6aEfA4f8b70/ZI5IQHY2Re8O5ytFYGnvJbWGr88I6CLwKkVB0zOMHNo" target = "_blank">
                    <div class="bg-primary rounded-5 position-absolute top-0 start-0 w-100 h-100 aos-init" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
                    <img class="d-block position-relative zindex-2 mx-auto aos-init" src="/assets/img/cookie.png" width="636" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250" />
                </a>
            </div>
            <div class="col-md-5 col-xl-4 offset-lg-1 aos-init" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
                <div class="ps-md-3 ps-lg-0">
                    {/* <img class="d-none d-dark-mode-block mb-2 mb-lg-3" src="/assets/img/cookie.jpg" alt="Champion" /> */}
                    <h2 class="h2">Cookies - the past, present, and future</h2>
                    <p class="fs-sm pb-3 pb-lg-4 mb-3">What are cookies and how do they work? What are they used for? Understand their history and how they’re relevant in the context of web3 growth.</p>
                    <a class="btn btn-sm btn-outline-dark rounded-pill" href="https://mirror.xyz/0xd8e06d311355B18acbC9C4f4436Bc6aEfA4f8b70/ZI5IQHY2Re8O5ytFYGnvJbWGr88I6CLwKkVB0zOMHNo" target = "_blank">Read more</a>
                </div>
            </div>
        </div>
        <div class="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
            <div class="col-md-7 col-lg-6 mb-4 mb-md-0">
                <a class="d-block position-relative" href="https://mirror.xyz/0xd8e06d311355B18acbC9C4f4436Bc6aEfA4f8b70/pLr-Lj3pEVjBOm4gwZcWWwpbgigtNI23K08C2iQy5Kc" target = "_blank">
                    <div class="bg-primary rounded-5 position-absolute top-0 start-0 w-100 h-100 aos-init" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
                    <div class='py-3 py-lg-6'>
                        <img class="d-block position-relative zindex-2 mx-auto aos-init " src="/assets/img/demarketing.png" width="336" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250" />
                    </div>

                </a>
            </div>
            <div class="col-md-5 col-xl-4 offset-lg-1 aos-init" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
                <div class="ps-md-3 ps-lg-0">
                    {/* <img class="d-none d-dark-mode-block mb-2 mb-lg-3" src="/assets/img/cookie.jpg" alt="Champion" /> */}
                    <h2 class="h2">The shift to a decentralized digital marketing ecosystem</h2>
                    <p class="fs-sm pb-3 pb-lg-4 mb-3">Understand the top challenges of today’s centralized digital marketing ecosystem, like attribution, the explosion of CAC, and the fine line between privacy and personalization - and why decentralization can save us all.</p>
                    <a class="btn btn-sm btn-outline-dark rounded-pill" href="https://mirror.xyz/0xd8e06d311355B18acbC9C4f4436Bc6aEfA4f8b70/pLr-Lj3pEVjBOm4gwZcWWwpbgigtNI23K08C2iQy5Kc" target = "_blank">Read more</a>
                </div>
            </div>
        </div>
  </section>
  )
}

export default Blogs