import React from 'react';
import styled from 'styled-components';



export const Header1 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
background-color: #fff;
border-bottom: 1px solid lightgrey;
width: 100%;
height: 120px;
margin-top: 44px;
padding-bottom: 15px;
`;

export const HeaderHOne = styled.h1`
font-size: 60px;
font-family: Didot, serif;
font-weight: bold;
flex: 8;
text-align: center;
color: #000;
`;

export const HeaderSpanDate = styled.span`
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;
margin-left: 25px;
flex: 1;
`;

export const HeaderSpanTemp = styled.span`
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;
text-align: right;
margin-right: 25px;
flex: 1;
`;


const HeaderCss = () => {
    return (
        <Header1></Header1>,
        <HeaderHOne></HeaderHOne>,
        <HeaderSpanDate></HeaderSpanDate>,
        <HeaderSpanTemp></HeaderSpanTemp>
    )
};

export default HeaderCss;