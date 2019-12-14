import React from 'react';
import styled from 'styled-components';

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

const LineThroughText = styled.span`
    text-decoration: line-through;
`;

const AnimatedWord = styled.span`
    color: white;
    background-color: black;
    ::after {
        content: '';
        animation: spin 10s linear infinite;
    }
    @keyframes spin {
        0% {
            content: 'PROGRAMMING';
        }
        10% {
            content: 'LEARNING';
        }
        20% {
            content: 'TABLE TENNIS';
        }
        30% {
            content: 'BASKETBALL';
        }
        40% {
            content: 'SHOUNEN MANGA';
        }
        50% {
            content: 'THE ENVIRONMENT';
        }
        60% {
            content: 'RUNNING';
        }
        70% {
            content: 'YOU!';
        }
        80% {
            content: 'PROBLEM SOLVING';
        }
        90% {
            content: 'LISTENING TO MUSIC';
        }
        100% {
            content: 'TO CHILL';
        }
    }
`;

const Home = () => (
    <Page title={'Steven - my current iteration'}>
        <Nav />
        <Main>
            <Content>
                <Row>
                    <StyledAvatar slug={'avatar_hello.png'} />
                    <p>
                        &nbsp;I LOVE&nbsp;
                        <AnimatedWord />
                        &nbsp;
                    </p>
                </Row>
                <hr />
                <h3>About</h3>
                <EngDescription>
                    Hi My name is Steven. I grew up in Indonesia, and moved into
                    Canada to study Computer Engineering at University of
                    Waterloo.
                    <br />
                    This site is about my reflection, experiences, thoughts, and
                    the world around me. I don&apos;t have a cat to talk about, but I hope this
                    blog will still be interesting to you.
                    <br />
                    Hit me up with any random thoughts. Always happy to get a
                    &nbsp;
                    <LineThroughText> coffee </LineThroughText>
                    &nbsp; bubble tea anytime.
                </EngDescription>
                <IndoDescription>
                    Nama lengkap, Steven. Saya lahir dan dibesarkan di
                    Indonesia, dan pada saat lulus SMA saya terbang ke Kanada
                    untuk mengambil jurusan Computer Engineering di University
                    of Waterloo.
                    <br />
                    Ketertarikan saya untuk berkreasi, belajar, dan berbagi
                    mendorong saya untuk membuat blog ini.
                    <br />
                    <br />
                    Gua sih gk punya kucing peliharaan, tapi gua harap blog ini
                    tetap akan menarik bagi siapapun yang membacanya. Jangan
                    lupa komen like sapskribe :)
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
