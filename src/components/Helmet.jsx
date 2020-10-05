import React from 'react';
import { Helmet } from 'react-helmet';

function HelmetF(props) {
    const { description, profileUrl, contextUrl, title } = props
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={contextUrl ? contextUrl : 'noindex'} />
            <meta name="AdsBot-Google" content="index" />
            <link rel="canonical" content={profileUrl}/>
        </Helmet>
    );
}

export default HelmetF;