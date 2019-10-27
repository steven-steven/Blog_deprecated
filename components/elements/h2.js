import React from "react";
import styled from "styled-components";

const H2 = styled.h1`
    color: ${(props) => props.theme.text};
    font-weight: bold;
    line-height: 1.25;
    letter-spacing: -0.5px;
    text-rendering: geometricPrecision;
    font-size: 1.5em;
    margin: 1.5em 0 0em;

    @media (min-width: 768px) {
        font-size: 1.5em;
    }
`;

const createId = (text) => text.toLowerCase().replace(/ /g, "-");

const TaggedH2 = ({ children }) => <H2 id={createId(children)}>{children}</H2>;

export default TaggedH2;
