import React from "react";
import styled from "styled-components";

const H3 = styled.h1`
    color: ${props => props.theme.text};
    font-weight: bold;
    line-height: 1.25;
    letter-spacing: -0.5px;
    text-rendering: geometricPrecision;
    font-size: 16px;
    margin: 1em 0 0em;
    line-height: 1.25;

    @media (min-width: 768px) {
        font-size: 1.3em;
    }
`;

const createId = text => text.toLowerCase().replace(/ /g, "-");

const TaggedH3 = ({ children }) => <H3 id={createId(children)}>{children}</H3>;

export default TaggedH3;
