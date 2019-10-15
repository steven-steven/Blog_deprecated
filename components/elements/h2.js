import styled from "styled-components";

const H2 = styled.h1`
    color: ${props => props.theme.text};
    font-weight: bold;
    line-height: 1.25;
    letter-spacing: -1px;
    text-rendering: geometricPrecision;
    font-size: 1.4em;
    margin: 2em 0 1em;
    line-height: 1.25;

    @media (min-width: 768px) {
        font-size: 36px;
    }
`;

export default H2;
