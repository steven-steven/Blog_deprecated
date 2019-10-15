import React from "react";
import styled from "styled-components";

import Link from "../nextLink";

const StyledLi = styled.li`
    :hover {
        text-shadow: 0 0 0.1px black;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: underline;
    font-size: small;
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
        <StyledLink slug={`project/${project.slug}`}>
            {project.title}
        </StyledLink>
        <Description>{project.blurb}</Description>
    </StyledLi>
);

export default ProjectEntry;
