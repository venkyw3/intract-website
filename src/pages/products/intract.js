import Layout from 'components/layout/Layout'
import Hero from 'components/intract/Hero';
import Features from 'components/intract/Features';
import CallToAction from 'components/intract/CallToAction';
import Client from 'components/intract/Client';
import CaseStudies from 'components/intract/CaseStudies';

export default function Intract() {

	return (
		<Layout page = "crm3" aos = {true}>
			<Hero />
			<Client />
			<Features />
			{/* <CaseStudies /> */}
			<CallToAction />
		</Layout>
	)
}


