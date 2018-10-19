import React from 'react'
import styled from 'styled-components'

const TopBarWrapper = styled.div`
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
    @media (min-width: 1280px) {
      width: 1280px;
  }
`;

const TBContainerLeft = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;


const TBContainerLeftText = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const TBContainerCenter = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const TBContainerCenterText = styled.span `
  cursor: pointer;
  margin-right: 5%;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`
const TBContainerRight = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const TBContainerRightText = styled.span `
  cursor: pointer;
`
const TopBar = () => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <TBContainerLeft>
          <TBContainerLeftText>TOPICS</TBContainerLeftText><TBContainerLeftText>SEARCH</TBContainerLeftText>
        </TBContainerLeft>
        <TBContainerCenter>
          <TBContainerCenterText>GENERAL</TBContainerCenterText><TBContainerCenterText>BROWNBAG</TBContainerCenterText><TBContainerCenterText>RANDOM</TBContainerCenterText><TBContainerCenterText>MUSIC</TBContainerCenterText><TBContainerCenterText>ANNOUNCEMENTS</TBContainerCenterText>
        </TBContainerCenter>
        <TBContainerRight>
          <TBContainerRightText>LOG IN</TBContainerRightText>
        </TBContainerRight>
      </TopBarContainer>
    </TopBarWrapper>
  )
}

export default TopBar;