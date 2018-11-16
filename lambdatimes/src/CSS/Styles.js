import React from "react";
import styled from "styled-components";

const TopBarParContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: fixed;
  height: 43px;
  background-color: #333;
`;

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 12px;
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 10px;
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 12px;
  font-weight: bold;
`;

const Spans = styled.span`
  ${props =>
    props.left
      ? `
      cursor: pointer;
      margin-right: 25%;
      font-weight: bold;
      `
      : null}
  ${props =>
    props.center
      ? `
     cursor: pointer;
     margin-right: 5%;
     &:hover{
       text-decoration: underline;
     }
     &:last-child {
       margin-right: 0;
     }
     `
      : null}
  ${props =>
    props.right
      ? `
      cursor: pointer;
      `
      : null}
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 120px;
  margin-top: 45px;
  padding-bottom: 15px;
`;

const HeaderHigh = styled.h1`
  font-size: 58px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const HeaderSpan = styled.span`
  ${props =>
    props.date
      ? `
    align-self: flex-end;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-left: 25px;
    flex: 1;
    `
      : null}
  ${props =>
    props.temp
      ? `
      align-self: flex-end;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1px;
      text-align: right;
      margin-right: 25px;
      flex: 1;
      `
      : null}
`;

export {
  TopBarParContainer,
  TopBarContainer,
  ContainerLeft,
  ContainerCenter,
  ContainerRight,
  Spans,
  HeaderDiv,
  HeaderHigh,
  HeaderSpan
};
