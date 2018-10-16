import React from 'react';
import styled from 'styled-components';

const _TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

//Could make one container and use attributes to distinguish left, right, center if I were so inclined

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const LeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const CenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
  
  &:last-child {
      margin-right: 0;
  }
`;

const RightSpan = styled.span`
    cursor: pointer;
`;

const TopBar = () => {
    return (
        <_TopBar>
            <Container>
                <ContainerLeft>
                    <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
                </ContainerLeft>
                <ContainerCenter>
                    <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan>ANNOUNCEMENTS</CenterSpan>
                </ContainerCenter>
                <ContainerRight>
                    <RightSpan>LOG IN</RightSpan>
                </ContainerRight>
            </Container>
        </_TopBar>
    )
}

export default TopBar;