import styled from 'styled-components';

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

`;

const Span= styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
 `;

 const StyledH1 = styled.h1`
   font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
 `;

 const StyledTopBar = styled.div`
    width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
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

 const LeftContainer = styled.div`
   display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
 `;

 const LeftSpan = styled.span`
    cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
 `;

 const CenterContainer = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
 `;

 const CenterSpan = styled.span`
   cursor: pointer;
  margin-right: 5%;
 `;

 const RightContainer = styled.div`
   display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
 `;

 const LogIn = styled.span`
   cursor: pointer;
 `;

export {
    StyledHeader,
    Span,
    StyledH1,
    StyledTopBar,
    TopBarContainer,
    LeftContainer,
    LeftSpan,
    CenterContainer,
    CenterSpan,
    RightContainer,
    LogIn
}