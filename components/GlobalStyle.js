import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.colors.body};
        color: ${(props) => props.theme.colors.text};
        font-size: 13px;
        font-weight: 400;
        line-height: 1.65;
        text-rendering: optimizeLegibility;

        @media (min-width: 768px) {
            font-size: 18px;
        }
    }
    html {
        scroll-behavior: smooth;
    }
`;

export default GlobalStyle;
