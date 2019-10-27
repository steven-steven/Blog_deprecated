import React from "react";

import Experiences from "../components/work/experiences";
// import Projects from "../components/work/projects";
import Page from "../components/page";
import Main from "../components/main";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Index = () => (
    <Page title={"Steven - Projects"}>
        <Nav />
        <Main>
            Experiences:
            <Experiences />
            {/* Projects:
            <Projects /> */}
        </Main>
        <Footer />
    </Page>
);

export default Index;
