import React from "react";
import styled from "styled-components";

import NextLink from "./nextLink";

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 80px;
`;

const MenuBar = styled.nav`
    padding: 2px;
    display: flex;
    justify-content: center;
    width: 100%;

    @media (min-width: 600px) {
        padding: 2em 4em 4em;
        justify-content: flex-end;
        flex-grow: 1;
        width: auto;
    }
`;

const Banner = styled.nav`
    padding: 5px;
    display: flex;
    justify-content: center;
    width: 100%;

    > a {
        line-height: 1.25;
        font-size: 1.7em;
        font-family: Georgia;
    }

    @media (min-width: 600px) {
        justify-content: flex-start;
        padding: 2em 5em;
        width: auto;
    }
`;

const NavLink = styled(NextLink)`
    color: ${props => props.theme.colors.text};

    :hover {
        text-shadow: 0 0 0.1px black;
        text-decoration: underline;
    }
    + a {
        margin: 0 0 0 2em;
    }
`;

const Nav = () => (
  <Row>
    <Banner>
      <NextLink aria-label="Steven - Home">Steven</NextLink>
    </Banner>
    <MenuBar>
      <NavLink slug="blog" aria-label="blog">
        {"Blog"}
      </NavLink>
      <NavLink slug="work" aria-label="work">
        {"Works"}
      </NavLink>
    </MenuBar>
  </Row>
);

export default Nav;
