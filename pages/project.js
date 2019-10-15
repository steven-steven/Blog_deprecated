import React from "react";

import Projects from "../components/projects/projects";
import Page from "../components/page";
import Main from "../components/main";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Index = () => (
    <Page title={"Steven - Projects"}>
        <Nav />
        <Main>
            <Projects />
        </Main>
        <Footer />
    </Page>
);

export default Index;
