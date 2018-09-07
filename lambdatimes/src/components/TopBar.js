import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar2 = styled.div`
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

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContainCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const Span = styled.span`
  cursor: pointer;
  margin-right: 5%;
`;


const TopBar = () => {
  return (
    <TopBar2>
      <Container>
        <ContainerLeft>
          <Span>TOPICS</Span><Span>SEARCH</Span>
        </ContainerLeft>
        <ContainCenter>
          <Span>GENERAL</Span><Span>BROWNBAG</Span><Span>RANDOM</Span><Span>MUSIC</Span><Span>ANNOUNCEMENTS</Span>
        </ContainCenter>
        <ContainRight>
          <Span>LOG IN</Span>
        </ContainRight>
      </Container>
    </TopBar2>
  );
};

export default TopBar;
