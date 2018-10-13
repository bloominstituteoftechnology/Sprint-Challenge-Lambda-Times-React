import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {

  const TopBar = styled.div`  
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
    
    @media (min-width: 1280px) {
      .top-bar .container {
        width: 1280px;
      }
    }
    
    
  `;

  const ContainerLEFT = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
  
  `;

  const ContainerLEFT_span = styled.div`
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

  const ContainerCenter_span = styled.div`
    cursor: pointer;
    margin-right: 5%;
   
  `;

  const ContainerRIGHT = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold; 
  
  `;

  const ContainerRIGHT_span = styled.div`
    cursor: pointer;
  
  `;


  return (
    <TopBar>
      <Container>

        <ContainerLEFT>
           <ContainerLEFT_span>
              TOPICS
           </ContainerLEFT_span>
          <ContainerLEFT_span>
              SEARCH
          </ContainerLEFT_span>
        </ContainerLEFT>

        <ContainerCenter>
          <ContainerCenter_span>
            GENERAL
          </ContainerCenter_span>
          <ContainerCenter_span>
            BROWNBAG
          </ContainerCenter_span>
          <ContainerCenter_span>
            RANDOM
          </ContainerCenter_span>
          <ContainerCenter_span>
            MUSIC
          </ContainerCenter_span>
          <ContainerCenter_span>
            ANNOUNCEMENTS
          </ContainerCenter_span>
        </ContainerCenter>

        <ContainerRIGHT>
          <ContainerRIGHT_span>
            LOG IN
          </ContainerRIGHT_span>
        </ContainerRIGHT>

      </Container>
    </TopBar>
  )
};

export default TopBar;