import React from "react";
// import styled from "styled-components";

import journalData from "../../data/journals";

import JournalEntry from "./journalEntry";

const Journals = () => (
    <ul>
        {journalData.map(article => (
            <JournalEntry article={article} key={article.slug} />
        ))}
    </ul>
);

export default Journals;
