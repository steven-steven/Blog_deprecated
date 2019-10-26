import React from "react";
import styled from "styled-components";

import Page from "../components/page";
import Nav from "../components/nav";
import Main from "../components/main";
import Footer from "../components/footer";
import Avatar from "../components/avatar";

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
    font-family: ${props => props.theme.fonts.engText};
    text-align: justify;
    text-justify: inter-word;
    font-size: 0.9em;
`;

const IndoDescription = styled.p`
    text-align: justify;
    text-justify: inter-word;
    font-family: ${props => props.theme.fonts.indoText};
    font-size: 0.8em;
`;

const LineThroughText = styled.span`
    text-decoration: line-through;
`;

const AnimatedWord = styled.span`
    color: white;
    background-color: black;
    ::after {
        content: "";
        animation: spin 10s linear infinite;
    }
    @keyframes spin {
        0% {
            content: "PROGRAMMING";
        }
        10% {
            content: "LEARNING";
        }
        20% {
            content: "TABLE TENNIS";
        }
        30% {
            content: "BASKETBALL";
        }
        40% {
            content: "SHOUNEN MANGA";
        }
        50% {
            content: "THE ENVIRONMENT";
        }
        60% {
            content: "RUNNING";
        }
        70% {
            content: "YOU";
        }
        80% {
            content: "BEING MYSELF";
        }
        90% {
            content: "LISTENING TO MUSIC";
        }
        100% {
            content: "TO CHILL";
        }
    }
`;

const Home = () => (
    <Page title={"Steven - my current iteration"}>
        <Nav />
        <Main>
            <Content>
                <Row>
                    <StyledAvatar slug={"avatar_hello.png"} />
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
                    Waterloo. In today&apos;s age where the world runs on code,
                    I always feel challenged to innovate, learn, and share.
                    <br />
                    This site is about me, about my experiences, about my
                    thoughts, about the world around me, and about everything I
                    feel like sharing.
                    <br />
                    Hit me up. Always happy to get a
                    <LineThroughText> coffee </LineThroughText>
                    bubble tea anytime.
                </EngDescription>
                <IndoDescription>
                    Nama lengkap, Steven. Gw lahir dan dibesarkan di Indonesia,
                    dan pada saat lulus SMA gw terbang ke Kanada untuk mengambil
                    jurusan Computer Engineering di University of Waterloo.
                    Tidak lama setelah menduduki tahun pertama, gw langsung
                    terjun ke dunia yang tak pernah kuketahui. Dalam masa dimana
                    dunia terkendali oleh kode, gw tertantang untuk terus
                    berkreasi, belajar, dan berbagi.
                    <br />
                    Situs ini tentang gw, tentang pengalaman gw, tentang
                    pemikiran gw, tentang dunia disekitar gw, dan tentang apa
                    saja yang ingin kubagi. Kontek2an aja. Gw akan selalu
                    bersedia untuk berbincang.
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
