import React from "react";
import styled from "styled-components";

import Link from "../nextLink";

const StyledLi = styled.li`
    padding: 8px;
    :hover {
        text-shadow: 0 0 0.5px black;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: underline;
`;

const Description = styled.p`
    margin: 0 0 0 16px;
    display: inline-block;

    font-size: 0.8em;
    font-weight: lighter;
    letter-spacing: 0.04em;
`;

const ProjectEntry = ({ project }) => (
  <StyledLi>
    <StyledLink fullHref={`${project.link}`}>{project.title}</StyledLink>
    <Description>{project.blurb}</Description>
  </StyledLi>
);

export default ProjectEntry;
