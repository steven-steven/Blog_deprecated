import React from "react";
import styled from "styled-components";

import Link from "../nextLink";
import Time from "../time";

const StyledLi = styled.li`
    :hover {
        font-weight: bold;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: underline;
    font-size: small;
`;

const JournalEntry = ({ article }) => (
    <StyledLi>
        <Time>{article.date}</Time>
        <StyledLink slug={`blog/${article.slug}`}>{article.title}</StyledLink>
    </StyledLi>
);

export default JournalEntry;
