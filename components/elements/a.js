import styled from "styled-components";

const A = styled.a`
    color: ${props => props.theme.accent};
    cursor: pointer;
    text-decoration: none;
    transition: color 0.15s ease;

    &:hover {
        color: ${props => props.theme.primary};
    }
`;

export default A;
