import React from "react";

import Journals from "../components/journals/journals";
import Page from "../components/page";
import Main from "../components/main";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Index = () => (
    <Page title={"Steven - Blog"}>
        <Nav />
        <Main>
            <Journals />
        </Main>
        <Footer />
    </Page>
);

export default Index;
