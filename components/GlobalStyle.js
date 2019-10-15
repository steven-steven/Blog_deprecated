import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.colors.body};
        color: ${props => props.theme.colors.text};
        font-size: 15px;
        font-weight: 400;
        line-height: 1.65;
        text-rendering: optimizeLegibility;
    }
`;

export default GlobalStyle;
