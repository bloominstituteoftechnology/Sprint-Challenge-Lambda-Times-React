import React from 'react';
import Styled from 'styled-components';

export const TabContainer = Styled.div`
    width: 100%;
    padding: 5px 0;
    display: flex;
`;

export const TabItem = Styled.div`
    font-weight: bold;
    letter-spacing: 2px;
    /* display: flex;
    justify-content: space-around; */
    background-color: black;
    color: white;
    padding: 2px 10px;
    margin: 0 5px;
    cursor: pointer;
`;

export const TabActive = Styled.div`
    font-weight: bold;
    letter-spacing: 2px;
    background-color: white;
    color: black;
    text-decoration: underline;
    padding: 2px 10px;
    border: 1px solid black;
    margin: 0 5px;
    cursor: pointer;
`;

export const Topics = Styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: white;

`;