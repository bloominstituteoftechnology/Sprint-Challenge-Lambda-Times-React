import React from 'react';
import styled from 'styled-components';



export const TopBar1 = styled.div`
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
`;

export  const TopBarContainerLeft = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`;

export const TopBarContainerLeftSpan = styled.div`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`;

export const TopBarContainerCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`;

export const TopBarContainerCenterSpan = styled.div`
cursor: pointer;
  margin-right: 5%;
`;

export const TopBarContainerRight = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
`;

export const TopBarContainerRightSpan = styled.div`
cursor: pointer;
`;

const TopBarCss = () => {
    return (
    <TopBar1></TopBar1>,
    <TopBarContainer></TopBarContainer>,
    <TopBarContainerLeft></TopBarContainerLeft>,
    <TopBarContainerLeftSpan></TopBarContainerLeftSpan>,
    <TopBarContainerCenter></TopBarContainerCenter>,
    <TopBarContainerCenterSpan></TopBarContainerCenterSpan>,
    <TopBarContainerRight></TopBarContainerRight>,
    <TopBarContainerRightSpan></TopBarContainerRightSpan>
    )
}

export default TopBarCss;