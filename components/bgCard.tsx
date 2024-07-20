// components/BackgroundCard.js
import React from 'react';
import Head from 'next/head'; // For setting the page title and meta tags
// Import local styles

const BackgroundCard = () => {
    return (
        <div className="bgImage">
            <Head>
                <title>Full Width Background with Centered Card</title>
                <meta name="description" content="Full width background with centered card using Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bgCard">
                <h2>Centered Card Content</h2>
                <p>This is some content inside the centered card.</p>
            </div>
        </div>
    );
}

export default BackgroundCard;
