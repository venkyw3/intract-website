import Layout from 'components/layout/Layout'
import Hero from 'components/gate3/Hero';
import Stats from 'components/gate3/Stats';
import CallToAction from 'components/gate3/CallToAction';
import HowItWorks from 'components/gate3/HowItWorks';
import ValueProps from 'components/gate3/ValueProps';

export default function Gate3() {

	

	return (
		<>
		<Layout page = "gate3" aos = {true}>
			<Hero />
			<ValueProps />
			<HowItWorks />
			<Stats />
			<CallToAction />
		</Layout>
		</>
	)
}


