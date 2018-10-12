import React from "react";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
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

   @media (min-width: 1280px) {
      .header {
        width: 1280px;
      }
    }
`

export const HeaderH = styled.h1`
font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
`

export const HeaderSpan = styled.span`
align-self: flex-end;
     font-size: 11px;
     font-weight: bold;
     letter-spacing: 1px;
`

export const HeaderDate = styled.span`
margin-left: 25px;
     flex: 1;
`
export const HeaderTemp = styled.span`
text-align: right;
     margin-right: 25px;
     flex: 1;
`
