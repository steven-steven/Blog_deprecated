import styled from "styled-components";

const Main = styled.main`
    flex: 1;
    margin: 0 auto;
    max-width: 690px;
    width: 100%;
    color: ${props => props.theme.primary};
    margin-bottom: 1.5em;
    padding: 1.5em;
`;

export default Main;
