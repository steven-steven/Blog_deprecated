import styled from "styled-components";

const Main = styled.main`
    flex: 1;
    margin: 0 auto;
    color: ${props => props.theme.primary};
    margin-bottom: 1.5em;
    padding: 1.5em;

    @media (min-width: 768px) {
        max-width: 800px;
    }
`;

export default Main;
