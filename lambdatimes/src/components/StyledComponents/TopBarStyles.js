import React from 'react';
import styled from 'styled-components';

export const StyledTopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
`

export const StyledTopBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
`

export const StyledTopBarContainerLeft = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
`
export const StyledTopBarContainerCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
`

export const StyledTopBarContainerRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
`
export const StyledLeftSpan = styled.span`
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
`

export const StyledCenterSpan = styled.span`
    cursor: pointer;
    margin-right: 5%;
    &:hover {text-decoration: underline; }
`
export const StyledCenterSpanLast = styled(StyledCenterSpan)`
    margin-right: 0;
`

export const StyledRightSpan = styled.span`
    cursor: pointer;
`
