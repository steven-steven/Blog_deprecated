import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
    padding: 8px;
    :hover {
        text-shadow: 0 0 0.5px black;
    }
`;

const Description = styled.p`
    margin: 0 0 0 16px;
    display: inline-block;

    font-size: 0.8em;
    font-weight: lighter;
    letter-spacing: 0.04em;
`;

const Date = styled.p`
    margin: 0 0 0 16px;
    display: inline-block;

    font-size: 0.8em;
    quotes: "(" ")";
    letter-spacing: 0.04em;
`;

const ExperienceEntry = ({ experience }) => (
    <StyledLi>
        <Description>{experience.company}</Description>
        <Description>{experience.title}</Description>
        <Date>
            <q>{experience.date}</q>
        </Date>
    </StyledLi>
);

export default ExperienceEntry;
