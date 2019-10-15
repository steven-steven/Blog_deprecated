import styled from "styled-components";

const H1 = styled.h1`
    color: ${props => props.theme.text};
    font-weight: bold;
    line-height: 1.25;
    letter-spacing: -1px;
    text-rendering: geometricPrecision;
    font-size: 32px;
    margin: 0;
    line-height: 1.35;

    @media (min-width: 768px) {
        font-size: 2.5em;
    }
`;

export default H1;
