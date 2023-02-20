import React, {useState, useEffect} from 'react'
import Layout from 'components/layout/Layout'
import Hero from 'components-2/Hero'
import CallToAction from 'components-2/CallToAction'
import About from 'components-2/About'
import ValueProps from 'components-2/ValueProps'
import Testimonials from 'components-2/Testimonials'
import Investors from 'components-2/Investors'
import Blogs from 'components-2/Blogs'
// import Tracking from 'components-2/Tracking'
import Customers from 'components-2/Customers'
import dynamic from 'next/dynamic';
const Tracking = dynamic(() => import('../components-2/Tracking'), { ssr: false });

const Home = () => {



	return (
		<Layout page = "home" aos = {true}>
			<Hero />
			{/* <Investors /> */}
			<About />
			<ValueProps />
			<Customers />
			<Testimonials />
			<Blogs />
			<CallToAction />
			<Tracking />
		</Layout>
	)
}

export default Home




// import Layout from 'components-2/layout/Layout'
// import Hero from 'components-2/community/Hero';
// import ContactForm from 'components-2/community/ContactForm';
// import ValueProps from 'components-2/community/ValueProps';



// export default function Community() {

// 	return (
// 		<Layout page = "community" aos = {true}>
// 			<Hero />
// 			<ValueProps />
// 			<ContactForm />
// 		</Layout>
// 	)
// }
