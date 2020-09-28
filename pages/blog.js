import React, { useState } from 'react';

import Journals from "../components/journals/journals";
import Page from "../components/page";
import Main from "../components/main";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Select from 'react-select';
import tagOptions from "../data/tagOptions";

const customStyles = {
    control: (base, state) => ({
      ...base,
      'min-height': '35px',
    }),
};

const Index = () => {
    const [filters, setFilters] = useState([]);

    return (
        <Page title={"Steven - Blog"}>
            <Nav />
            <Main>
                Filter:
                <Select
                    isMulti
                    name="tags"
                    options={tagOptions}
                    value={filters}
                    styles={customStyles}
                    onChange={(selected)=>setFilters(selected)}
                />
                <br/>
                <Journals filters={filters}/>
            </Main>
            <Footer />
        </Page>
    )
};

export default Index;
