import React from 'react'

function Stats(){
  return (
    <section class="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5 mb-5 pb-5">
        <div class="row pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-xxl-2 mt-md-3 mt-lg-0">
            <div class="col-lg-5 mb-5 mb-lg-0">
                <div class="h2 text-center text-lg-start pb-md-2 pb-xl-0 mb-4 mb-xl-5">
                    Brands like Adidas, Gucci, and The Hundreds are finding tokens are a great way to reward their superfans.
                </div>
                <div class='h1 text-center text-lg-start'>
                     Now it's your turn.
                </div>
            </div>
            <div class="col-lg-7 col-xl-6 offset-xl-1">
                <div class="row row-cols-1 row-cols-sm-2 g-3 g-md-4">
                    <div class="col">
                        <div class="d-flex flex-column h-100 bg-faded-primary rounded-3 text-center p-4">
                            <div class="h3 display-5 mt-1 mb-0">1,000+</div>
                            <div class="fs-lg mb-1">Verification per day</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="d-flex flex-column h-100 bg-faded-info rounded-3 text-center p-4">
                            <div class="h3 display-5 mt-1 mb-0">100,000</div>
                            <div class="fs-lg mb-1">Wallets connected</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="d-flex flex-column h-100 bg-faded-warning rounded-3 text-center p-4">
                            <div class="h3 display-5 mt-1 mb-0">100+</div>
                            <div class="fs-lg mb-1">Active Communities</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="d-flex flex-column h-100 bg-faded-danger rounded-3 text-center p-4">
                            <div class="h3 display-5 mt-1 mb-0">10+</div>
                            <div class="fs-lg mb-1">Countries</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Stats