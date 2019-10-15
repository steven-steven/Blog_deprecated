import Head from "next/head";
import React from "react";

import GlobalStyle from "./GlobalStyle";

// TODO: fill in meta-tags, domain name and current path, description, imag, google analytics..
const Page = ({ children, title = "Steven" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                <link href="/styles/react-sticky-header.css" rel="stylesheet" />
            </Head>
            <GlobalStyle />
            {children}
        </>
    );
};

export default Page;
