import React from "react";
import styled from "styled-components";

import NextLink from "./nextLink";

const StyledFooter = styled.footer`
    text-align: center;
    font-size: small;
`;

const Container = styled.span`
    width: 80%;
    display: inline-block;
`;
const StyledHr = styled.hr`
    height: 0.5px;
`;

const Footer = () => (
    <StyledFooter>
        <Container>
            <StyledHr />
            <span>© </span>
            <NextLink aria-label="Steven - Home">Steven</NextLink>
            <span> 2019 </span>
        </Container>
    </StyledFooter>
);

export default Footer;
