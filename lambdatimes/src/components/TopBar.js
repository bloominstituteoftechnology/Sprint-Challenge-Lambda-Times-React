import React from 'react';
import styled from 'styled-components';

const TopBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

const TopBarContainer = styled.div`
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
`

const TopBarLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

const TopBarLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const TopBarCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const TopBarCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`

const TopBarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const TopBarRightSpan = styled.span`
  cursor: pointer;
`

const TopBar = () => {
  return (
    <TopBarWrapper>

      <TopBarContainer>

        <TopBarLeft>
          <TopBarLeftSpan>TOPICS</TopBarLeftSpan><TopBarLeftSpan>SEARCH</TopBarLeftSpan>
        </TopBarLeft>

        <TopBarCenter>
          <TopBarCenterSpan>GENERAL</TopBarCenterSpan><TopBarCenterSpan>BROWNBAG</TopBarCenterSpan><TopBarCenterSpan>RANDOM</TopBarCenterSpan>
          <TopBarCenterSpan>MUSIC</TopBarCenterSpan><TopBarCenterSpan>ANNOUNCEMENTS</TopBarCenterSpan>
        </TopBarCenter>
        
        <TopBarRight>
          <TopBarRightSpan>LOG IN</TopBarRightSpan>
        </TopBarRight>

      </TopBarContainer>

    </TopBarWrapper>
  )
}

export default TopBar;