import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file



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

const Span1 = styled.div`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const Span2 = styled.div`
  cursor: pointer;
  margin-right: 5%;
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

const Span3 = styled.div`
  cursor: pointer;
`;


const TopBar = () => {
  return (
    <TopBarWrapper>
      <Container>
        <ContainerLeft>
          <Span1>TOPICS</Span1><Span1>SEARCH</Span1>
        </ContainerLeft>
        <ContainerCenter>
          <Span2>GENERAL</Span2><Span2>BROWNBAG</Span2><Span2>RANDOM</Span2><Span2>MUSIC</Span2><Span2>ANNOUNCEMENTS</Span2>
        </ContainerCenter>
        <ContainerRight>
          <Span3>LOG IN</Span3>
        </ContainerRight>
      </Container>
    </TopBarWrapper>
  )
}

export default TopBar;