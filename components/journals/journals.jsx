import React from "react";
// import styled from "styled-components";

import journalData from "../../data/journals";

import JournalEntry from "./journalEntry";

const displayEntries = (filters, journals)=>{
    // filter journals
    return journals.filter(article => {
        if (filters){
            for (let i = 0; i<filters.length; i+=1){
                if(!article.tags || !article.tags.includes(filters[i].value)){
                    return false;
                }
            }
        }
        return true;
    }).map(article => (
        <JournalEntry article={article} key={article.slug} />
    ))
}

const Journals = ({filters=[]}) => {
    const journal2020 = displayEntries(filters, journalData[2020]);
    const journal2019 = displayEntries(filters, journalData[2019]);
    return (
        <>
            {journal2020.length > 0 && (
                <>
                    2020
                    <ul>
                        {journal2020}
                    </ul>
                </>
            )}
            {journal2019.length > 0 && (
                <>
                    2019
                    <ul>
                        {journal2019}
                    </ul>
                </>
            )}
        </>
    )
};

export default Journals;
