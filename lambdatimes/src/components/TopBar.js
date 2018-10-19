import React from 'react';
import styledComponent from 'styled-components'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  const TopContainer = styledComponent.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  `;

  const MainContainer = styledComponent.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
    }
  }
  `;

  const LeftContainer = styledComponent.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  > span
  {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
  `;
  
  const CenterContainer = styledComponent.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  > span
  {
    cursor: pointer;
    margin-right: 5%;
    &:last-child
    {
      margin-right: 0;
    }
    &: hover
    {
      text-decoration: underline;
    }
  }
  `;

  const RightContainer = styledComponent.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  > span
  {
    cursor: pointer;
  }
  `;

  return (
    <TopContainer>
      <MainContainer>
        <LeftContainer>
          <span>TOPICS</span><span>SEARCH</span>
        </LeftContainer>
        <CenterContainer>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </CenterContainer>
        <RightContainer>
          <span>LOG IN</span>
        </RightContainer>
      </MainContainer>
    </TopContainer>          
  )
}

export default TopBar;