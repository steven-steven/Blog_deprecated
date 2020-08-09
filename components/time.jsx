import React from "react";
import styled from "styled-components";

const StyledTime = styled.time`
    font-size: 0.9em;
    margin-right: 16px;
    font-weight: lighter;
    text-transform: uppercase;
    letter-spacing: 0.04em;
`;

const CustomTime = ({ children }) => {
    const date = new Date(`${children}`.replace(/-/g, '\/'));
    const displayDate = date.toDateString();

    return <StyledTime dateTime={date.toISOString()}>{displayDate}</StyledTime>;
};

export default CustomTime;
