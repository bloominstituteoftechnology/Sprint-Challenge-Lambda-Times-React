import React from "react";
import styled from "styled-components";

export const TopBarDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
`;

export const TopBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
`
export const ContainerLeft = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
`
export const ContainerLeftSpan = styled.span`
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
`
export const ContainerCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
`
export const ContainerCenterSpan = styled.span`
    cursor: pointer;
    margin-right: 5%;
    :hover{text-decoration: underline;}
`
export const ContainerRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
`
export const ContainerRightSpan = styled.span`
    cursor: pointer;
`

