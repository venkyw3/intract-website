import LINKs from 'content/links';
import React from 'react'

const Hero = () => {

	const joinOurCommunity = () => {
		try{

			let ele = document.getElementById("signup-form");
			ele.scrollIntoView({
				behavior:"smooth"
			})

		} catch(err){
			console.log(err)
		}
	}
  	
	return (
    <section class="">
        <div class="container pt-2 pt-sm-4 pb-sm-2 pb-md-4 py-xl-5 mt-5 mb-5 pb-5">
          	<div class="row align-items-center py-5 mt-md-2 my-lg-3 my-xl-4 my-xxl-5">
            	<div class="col-lg-5 order-lg-2 d-flex justify-content-center justify-content-lg-end mb-4 mb-md-5 mb-lg-0 pb-3 pb-md-0">
              		<div class="parallax me-lg-n4 me-xl-n5" >
                		<div class="parallax-layer" data-depth="0.1" >
                    		<img src="/assets/img/community/good_vibes.png" alt="Layer" />
                		</div>
              		</div>
				</div>
            	<div class="col-lg-7 order-lg-1">
              		<h1 class="display-3 text-center text-lg-start pb-sm-2 pb-md-3">
					  	Join our Web 3.0 marketing DAO
						<svg class="d-inline-block heartbeat text-danger ms-3" width="52" height="38" viewBox="0 0 52 38" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    		<path d="M52,6.3c0.8-12.6-18.6-4-24.8,1.6c-0.4,0.4-1.1,0.4-1.5,0.1C9.9-2.7-2,1.5,0.3,10c1.5,5.6,16.2,20.4,25.5,27.7c0.4,0.3,1,0.3,1.4,0C36.7,29.5,51.2,19.1,52,6.3z"></path>
                		</svg>
					</h1>
              		<p class="lead text-center text-lg-start pb-xl-2 mx-auto mx-lg-0 mb-3" >
					  We are building a community (read cult 😛) of digital marketers, community managers & growth hackers in Web 3.0
					</p>
					<div class="d-lg-flex mt-5 ">
						<a class="btn btn-lg btn-primary rounded-pill btn-block w-100 w-lg-auto me-sm-4" href = {LINKs.litepaper} target="_blank" rel="noopener">
							Read our Litepaper
						</a>
						<a class="btn btn-lg btn-outline-info rounded-pill  w-100 w-lg-auto mt-3 mt-lg-0" onClick={() => joinOurCommunity()}> 
							Join our Community
						</a>
					</div>
            	</div>
          	</div>
        </div>
	</section>
  )
}

export default Hero