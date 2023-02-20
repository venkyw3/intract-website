import Head from "next/head";

const Meta = ({page}) => {
    return ( 
       <Head>
            <meta charSet="utf-8" />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={seo_config[page].description} />
            <meta name="keywords" content={seo_config[page].keywords} />
            
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@intract_buzz" />
            <meta name="twitter:creator" content="@intract_buzz" />
            
            <meta property="og:title" content={seo_config[page].title} />
            <meta property="og:description" content={seo_config[page].description} />
            <meta property="og:url" content={seo_config[page].url} />
            <meta property="og:type" content='website' />
            <meta property="og:site_name" content="Intract" />
            
            <link rel="canonical" href={seo_config.website} />
            <link rel="icon" href="/favicon.ico" />

            <title>{seo_config.title}</title>
       </Head>
     );
}


export default Meta;



const seo_config = {
    twitter: {
        handle: '@intract_buzz',
        site: '@intract_buzz',
        cardType: 'summary',
    },
    website: 'https://www.intract.buzz/',
    title: 'Intract | Web3 Marketing Tools for NFT, DeFi & GameFi',
    site_name: 'Intract',
    home: {
        url: "https://www.intract.buzz/",
        title: 'Intract | Web3 Marketing Tools for NFT, DeFi & GameFi',
        description: 'Grow your DeFi, GameFi & NFT projects using our marketing tools - token gating, airdrop & CRM analytics.',
        type: 'website',
        keywords: ''
    },
    gate3: {
        url: "https://www.intract.buzz/products/gate3",
        title: 'Discord bot to token gate your Web3 community',
        description: "Link wallet to Discord, and offer exclusive communication & perks to your holders - a Collab.Land alternative.",
        type: 'website',
        keywords: ''
    },
    crm3: {
        url: "https://www.intract.buzz/products/intract",
        title: 'Web3 CRM & blockchain analytics for DeFi, GameFi & NFT communities',
        description: "Web 3.0 Hubspot & Salesforce - Discord & on-chain analytics of wallets, segmentation & marketing automation.",
        type: 'website',
        keywords: ''
    },
    community: {
        url: "https://www.intract.buzz/community",
        title: 'DAO for Web3 marketing heads, community managers & growth hackers',
        description: "DAO for Web3 marketing heads, community managers & growth hackers",
        type: 'website',
        keywords: ''
    },
    blogs: {
        url: "https://www.intract.buzz/blogs",
        title: 'Intract | Build lasting customer relationships through words that resonate',
        description: "Talk to your customers with personalized marketing copies and maximize LTV. Intract helps you build lasting customer relationships through words that resonate, powered by buzz.  ",
        type: 'website',
        keywords: ''
    },
    bitkraft: {
        url: "https://www.intract.buzz/bitkraft",
        title: 'Intract | Build lasting customer relationships through words that resonate',
        description: "Talk to your customers with personalized marketing copies and maximize LTV. Intract helps you build lasting customer relationships through words that resonate, powered by buzz.  ",
        type: 'website',
        keywords: ''
    }
}