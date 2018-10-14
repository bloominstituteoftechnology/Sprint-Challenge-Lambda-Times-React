import React from 'react';
import styled from 'styled-components';


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const TopBarComp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: fixed;
  height: 40px;
  background-color: #333;
  z-index: 100;
`

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: white;
  letter-spacing: 1.3px;
  padding: 0 10px;
`

const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: none;
  flex: 1;
  font-size: 12px;
  span {
    cursor: pointer;
    margin-right: 25.2%;
    font-weight: bold;
}
`

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  span {
    cursor: pointer;
    margin-right: 5%;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 12px;
  font-weight: bold;
  span {
    cursor: pointer;
  }
`

const TopBar = () => {
  return (
    <TopBarComp>
      <TopBarContainer>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
          </ContainerCenter>
        <ContainerRight>
          <span> LOGIN</span>
        </ContainerRight>
      </TopBarContainer>
    </TopBarComp>
  )
}

export default TopBar;