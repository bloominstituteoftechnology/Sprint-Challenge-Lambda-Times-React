import styled from "styled-components"

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

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;

    @media (min-width: 1280px) {
        width: 1280px;
    }
    `;

export const SubContainer = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    ${props => (props.center ? 
        `justify-content: center
        flex: 3
        font-size: 9px` 
        : null)}
    ${props => (props.right ? 
        `justify-content: flex-end
        flex: 1
        font-weight: bold`
         : null)}
    `;

export const SubContainerSpan = styled.span`
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
    ${props => (props.center ? 
        `margin-right: 5%
        font-weight: none` 
        : null)}
    ${props => (props.right ? `margin-right: 0` : null)}
    `;

export const HeaderDiv = styled.div`
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
        width: 1280px;
    }
    `;

export const HeaderText = styled.h1`
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
    `;

export const HeaderSpan = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    flex: 1;
    ${props => (props.date ? `margin-left: 25px` : null)}
    ${props => (props.temp ? 
        `margin-right: 25px 
        text-align: right` 
        : null)}
    `;