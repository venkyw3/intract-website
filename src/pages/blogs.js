import Layout from 'components/layout/Layout'

export default function Blogs() {

	
	return (
		<>
		<Layout page = "blogs" aos = {true}>
			<div class='container pt-5 pb-lg-5 pb-md-4 pb-2 my-5 py-5'>
				<div class="row pt-5 pb-4 pb-lg-5 mb-2 mt-1 mt-sm-2 my-xl-3">
					<div class="col-md-7">
						<h1 class="display-3 fw-bold text-uppercase mb-0">Blog about life, work and business</h1>
					</div>
					<div class="col-md-5 col-lg-4 offset-lg-1 pt-3 pt-md-2">
						<p class="mb-0">A lot of useful information about health, beauty, travel and life in our blog. Simple and accessible about all important aspects of life.</p>
					</div>
				</div>
				<BlogGrid />
				<BlogGrid />
				<BlogGrid />
			</div>
		</Layout>
		</>
	)
}


const BlogGrid = () => {
	return (
		<div class="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
          	<div class="col-md-7 col-lg-6 mb-4 mb-md-0">
				<a class="d-block position-relative" href="portfolio-single-v1.html">
              		<div class="bg-info rounded-5 position-absolute top-0 start-0 w-100 h-100 aos-init aos-animate" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
					<img class="d-block position-relative zindex-2 mx-auto aos-init aos-animate" src="/assets/img/portfolio/list/06.png" width="636" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250" />
				</a>
			</div>
          	<div class="col-md-5 col-xl-4 offset-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-duration="400" data-aos-offset="70">
            	<div class="ps-md-3 ps-lg-0">
              		<h2 class="h2">Development of an application for a national bank</h2>
              		<p class="fs-lg pb-3 pb-lg-4 mb-3">Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Morbi et massa fames ac scelerisque sit commodo dignissim.</p>
					<a class="btn btn-sm btn-outline-dark rounded-pill" href="portfolio-single-v1.html">Read the full story</a>
            	</div>
          	</div>
        </div>
	)
}