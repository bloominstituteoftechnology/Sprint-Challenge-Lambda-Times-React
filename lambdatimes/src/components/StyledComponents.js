import styled from "styled-components";

const StyledTopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
;`      

const StyledContainter = styled.div`
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
;`

const StyledContainterLeft = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;

    > span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
    }
;`

const StyledContainterCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;

    > span {
    cursor: pointer;
    margin-right: 5%;
    }

    > span:last-child {
        margin-right: 0;
    }

    > span:hover {
        text-decoration: underline;
    }
;`

const StyledContainterRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;

    > span {
        cursor: pointer;
    }
;`

const StyledHeader = styled.div`
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

    > h1 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
    }

    > span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    }
;`

const StyledDate = styled.span`
    margin-left: 25px;
    flex: 1;
;`


const StyledTemp = styled.span`
    text-align: right;
    margin-right: 25px;
    flex: 1;
;`



export {StyledTopBar, StyledContainter, StyledContainterLeft, StyledContainterCenter, StyledContainterRight, StyledHeader, StyledDate, StyledTemp};