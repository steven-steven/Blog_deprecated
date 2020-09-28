import React from 'react';
import styled from 'styled-components';
import TextLoop from "react-text-loop";

import Page from '../components/page';
import Nav from '../components/nav';
import Main from '../components/main';
import Footer from '../components/footer';
import Avatar from '../components/avatar';

const StyledAvatar = styled(Avatar)`
    height: 80px;
    vertical-align: middle;
    width: 80px;
`;

const Content = styled.div`
    padding: 0 24px;
`;

const Row = styled.div`
    margin: 0 auto;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const EngDescription = styled.p`
    font-family: ${(props) => props.theme.fonts.engText};
    text-align: justify;
    text-justify: inter-word;
    font-size: 0.9em;
`;

const IndoDescription = styled.p`
    text-align: justify;
    text-justify: inter-word;
    font-family: ${(props) => props.theme.fonts.indoText};
    font-size: 0.8em;
`;

const loopTexts = ["PROGRAMMING", "TABLE TENNIS", "BASKETBALL", "MANGA", "UKULELE", "DRAWING", "PROBLEM SOLVING", "LEARNING", "SHARING"]

const Home = () => (
    <Page title={'Steven - my current iteration'}>
        <Nav />
        <Main>
            <Content>
                <Row>
                    <StyledAvatar slug={'avatar_hello.png'} />
                    <p>
                        &nbsp;I ENJOY&nbsp;
                        {/* eslint-disable-next-line react/no-children-prop */}
                        <TextLoop children={loopTexts} interval={2000} springConfig={{ stiffness: 70, damping: 20 }} />
                        &nbsp;
                    </p>
                </Row>
                <hr />
                <h3>About</h3>
                <EngDescription>
                    Hi I am Steven.

                    I study Computer Engineering at the University of Waterloo. Having been through 6 internships in the tech industry, I felt like a programming career has always been something I&apos;d enjoy pursuing.
                    However, now that I&apos;m about to graduate in the upcoming 2021, it&apos;s beginning to feel surreal. What will I be in 5 years time?
                    <br />
                    This site a reflection of the experiences and thoughts of the world around me. I&apos;m a man with many flaws. 
                    One of them I believe is being not too good of a writer. I think this blog will help me overcome that as I continue to write and write and write. Hopefully it gets better over time.
                    Regardless, I enjoy writing.
                    <br />
                    I'm not entirely sure what this blog means to you reading it. It could just end up being a bunch of ramblings of insignificant brain-farts. But I hope you can get something positive out of it.
                </EngDescription>
                <hr />
                <IndoDescription>
                    <h3>Tentang Blog ini</h3>
                    Jujur sehabis 5 tahun sekolah di Kanada, mindset untuk berbicara ataupun menulis dalam Bahasa Indonesia mulai dikabuti oleh interaksi sehari-hari yang 90% berbahasa Inggris. 
                    Bukannya lupa, namun mungking terkadang sulit untuk menstrukturkan kalimat yang benar dan lancar.
                    Bahkan lebih parahnya lagi, mungkin setelah pulang ke Indonesia nantinya, saya tidak akan lagi dianggap anak millenial yang GAUL, apapun itu artinya.
                    <br />
                    Sebagai seorang programmer sekaligus manusia yang amat sangat amatir, saya senang untuk terus berkreasi dan belajar hal baru setiap harinya. Pengalaman-pengalaman ini lah yang ingin kutuangkan dalam blog ini, dan saya berharap akan membawa dampak yang positif kepada siapapun itu pembacanya.
                    <br />
                    Terlebih lagi, sekalian blog ini akan dijadikan platform dimana saya terus latihan untuk menulis.
                </IndoDescription>
                <hr />
                <h3>Contact Me</h3>
                <EngDescription>
                    Email: steven.infinity29@gmail.com
                    <br />
                    LinkedIn:&nbsp;
                    <a href="https://www.linkedin.com/in/steven-steven1999/">
                        https://www.linkedin.com/in/steven-steven1999/
                    </a>
                    <br />
                    Github:&nbsp;
                    <a href="https://github.com/steven-steven">
                        https://github.com/steven-steven
                    </a>
                </EngDescription>
            </Content>
        </Main>
        <Footer />
    </Page>
);

export default Home;
