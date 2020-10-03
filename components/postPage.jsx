import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { withRouter } from 'next/router'

import Footer from './footer';
import Nav from './nav';
import Page from './page';
import { DiscussionEmbed } from 'disqus-react';

import P from './elements/p';
import A from './elements/a';
import Blockquote from './elements/blockquote';
import Code from './elements/code';
import Em from './elements/em';
import H1 from './elements/h1';
import H2 from './elements/h2';
import H3 from './elements/h3';
import Img from './elements/img';
import Li from './elements/li';
import Ol from './elements/ol';
import Strong from './elements/strong';
import Ul from './elements/ul';

const components = {
    a: A,
    blockquote: Blockquote,
    em: Em,
    h1: H1,
    h2: H2,
    h3: H3,
    img: Img.small,
    largeImg: Img.large,
    li: Li,
    ol: Ol,
    pre: Code,
    strong: Strong,
    ul: Ul,
    p: P
};

const Main = styled.main`
    max-width: 600px;
    margin: 0 auto;
    padding: 1em;

    @media (min-width: 768px) {
        max-width: 700px;
    }
`;

const Post = ({ children, meta, router }) => (
    <Page title={`${meta.title} - Steven`}>
        <Nav />
        <Main>
            <MDXProvider components={components}>
                <article>{children}</article>
            </MDXProvider>
            <br/>
            <hr/>
            <DiscussionEmbed
                shortname='blog-zlm7tpahgt'
                config={
                    {
                        url: 'https://stevenwhat.me' + router.pathname,
                        identifier: router.pathname.substring(router.pathname.lastIndexOf('/') + 1),
                        title: meta.title,
                    }
                }
            />                 
        </Main>
        <Footer />
    </Page>
);

export default withRouter(Post);
