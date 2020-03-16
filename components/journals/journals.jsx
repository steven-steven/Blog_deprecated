import React from "react";
// import styled from "styled-components";

import journalData from "../../data/journals";

import JournalEntry from "./journalEntry";

const Journals = () => (
    <>
        2020
        <ul>
            {journalData[2020].map(article => (
                <JournalEntry article={article} key={article.slug} />
            ))}
        </ul>
        2019
        <ul>
            {journalData[2019].map(article => (
                <JournalEntry article={article} key={article.slug} />
            ))}
        </ul>
    </>
);

export default Journals;
