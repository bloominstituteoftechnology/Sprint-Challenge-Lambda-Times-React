import styled from 'styled-components';

//APP

export const AppStyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f1f1f1;
    color: #333;
    font-family: 'PT Sans', sans-serif;
`;

//CONTENT

export const ContentContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;

//TABS

export const TabsStyle = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

@media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

export const TabsTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

//TAB

export const TabStyle = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  &:hover{
    text-decoration: underline;
  }

  ${props => props.selected ? `background-color: #fff; color: #333; border: 2px solid #333;` : null }
`;

//TopBar.js

export const TopBarStyle = styled.div`
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

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

export const LeftSpan = styled.span`
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
`;

export const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
`;

export const CenterSpan = styled.span`
    cursor: pointer;
    margin-right: 5%;

    &:hover{
        text-decoration: underline;
    }
    
    &:last-child{
        margin-right: 0;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
`;

export const RightSpan = styled.span`
    cursor: pointer;
`;


//Header.js

export const HeaderStyle = styled.div`
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

export const HeaderDate = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;

  margin-left: 25px;
  flex: 1;
`;

export const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

export const HeaderTemp = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;

  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

//LOGIN

export const LoginStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    height: 40vh;
    border: 2px solid rgb(51,51,51);
    margin: 10vh auto;
`;

export const LoginHeader = styled.h1`
  align-self: center;
`;

export const LoginInput = styled.input`
    width: 70%;
    height: 3vh;
    margin-bottom: 15px;
    align-self: center;
    background-color: cornsilk;
`;

export const LoginSubmit = styled.button`
    width: 30%;
    height: 4vh;
    align-self: center;
    border-radius: 6px;
    margin-top: 15px;
    font-size: 16px;
    
    &:hover{
        background-color: lightblue;
    }
`;

//CAROUSEL

export const CarouselStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

@media (min-width: 1200px) {
    width: 1200px;
  }
`;

export const CarouselLeftButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);

  &:hover{
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

export const CarouselRightButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);

  &:hover{
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

export const CarouselImg = styled.img`
  width: 100%;
  display: none;
`;

