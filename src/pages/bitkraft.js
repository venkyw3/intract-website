import Customers from 'components/bitkraft/Customers'
import Integrations from 'components/bitkraft/Integrations'
import CallToAction from 'components/bitkraft/CallToAction'
import Layout from 'components/layout/Layout'
import LINKs from 'content/links'

export default function Blogs() {

	
	return (
		<>
		<Layout page = "bitkraft" aos = {true}>
            <CallToAction />
            <Customers />
            <Integrations />
		</Layout>
		</>
	)
}


