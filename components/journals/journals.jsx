import React from "react";
// import styled from "styled-components";

import journalData from "../../data/journals";

import JournalEntry from "./journalEntry";

const displayEntries = (filters, journals) => {
  // filter journals
  return journals.filter(article => {
    if (filters) {
      for (let i = 0; i < filters.length; i += 1) {
        if (!article.tags || !article.tags.includes(filters[i].value)) {
          return false;
        }
      }
    }
    return true;
  }).map(article => (
    <JournalEntry article={article} key={article.slug} />
  ))
}

const Journals = ({ filters = [] }) => {
  const journal2024 = displayEntries(filters, journalData[2024]);
  const journal2023 = displayEntries(filters, journalData[2023]);
  const journal2022 = displayEntries(filters, journalData[2022]);
  const journal2021 = displayEntries(filters, journalData[2021]);
  const journal2020 = displayEntries(filters, journalData[2020]);
  const journal2019 = displayEntries(filters, journalData[2019]);
  return (
    <>
      {journal2024.length > 0 && (
        <>
          2024
          <ul>
            {journal2024}
          </ul>
        </>
      )}
      {journal2023.length > 0 && (
        <>
          2023
          <ul>
            {journal2023}
          </ul>
        </>
      )}
      {journal2022.length > 0 && (
        <>
          2022
          <ul>
            {journal2022}
          </ul>
        </>
      )}
      {journal2021.length > 0 && (
        <>
          2021
          <ul>
            {journal2021}
          </ul>
        </>
      )}
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
