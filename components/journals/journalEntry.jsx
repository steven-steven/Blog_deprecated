import React from "react";
import styled from "styled-components";

import Link from "../nextLink";
import Time from "../time";

const StyledLi = styled.li`
    padding: 8px;
    :hover {
        text-shadow: 0 0 0.5px black;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: underline;
`;

const JournalEntry = ({ article }) => (
    <StyledLi>
        <Time>{article.date}</Time>
        <StyledLink slug={`blog/${article.slug}`}>{article.title}</StyledLink>
    </StyledLi>
);

export default JournalEntry;
