import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


const Header = styled.div`
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

const ContainerL = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const ContainerC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const Span = styled.span`
  margin-right: 5%;
  ${ContainerC}:hover & {
  text-decoration: underline;
}
`;

const ContainerR = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const TopBar = () => {
  return (
    <Header>
        <Container>
            <ContainerL>
                <Span> TOPICS </Span><span> SEARCH </span>
            </ContainerL>
          <ContainerC>
              <Span>
              <span> GENERAL </span><span> BROWN BAG </span><span> RANDOM </span><span> MUSIC </span>
              <span> ANNOUNCEMENTS </span>
            </Span>
          </ContainerC>
              <ContainerR>
                  <span>LOG IN</span>
              </ContainerR>
          </Container>
    </Header>
  )
}

export default TopBar;