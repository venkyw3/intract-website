import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from 'utilis/analytics';



class CustomDocument extends Document {
  
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      	<Html lang="en-US" class='dark-mode'>
			<Head>
				<link rel="icon" type="image/gif/png" href="/assets/icon/apple-touch-icon.png" />
				<link rel="apple-touch-icon" href="/assets/icon/apple-touch-icon.png"></link>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-V6TEDGD1PV"></script>
				<script dangerouslySetInnerHTML={{__html : GA_SCRIPT}} />
				<script dangerouslySetInnerHTML={{__html : HOTJAR_SCRIPT}} />
			</Head>
			<body>
				<div class='bg-tile-top-lg bg-neutral-600'>
					<Main />
				</div>
				<NextScript />
			</body>
      	</Html>
    );
  }
}

export default CustomDocument;



const GA_SCRIPT = `
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-V6TEDGD1PV');
`

const HOTJAR_SCRIPT = `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3225576,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`
