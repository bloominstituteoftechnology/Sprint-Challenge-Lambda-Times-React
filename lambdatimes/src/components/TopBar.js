import React from 'react';
import styled, {css} from 'styled-components';

const TopbarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
    @media (min-width: 1280px) {
      width: 1280px;      
      flex-direction: row;
      position: fixed;
      height: 44px;
      background-color: #333;
    } */
`

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
     width: 1280px;
  }
`

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`
const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  
`
const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

`

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    
      <TopbarContainer>
      {/* <div className="container"> */}
      <Container>
        {/* <div className="container-left"> */}
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
       </ContainerLeft>
        {/* </div> */}
        {/* <div className="container-center"> */}
        <ContainerCenter >
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        {/* </div> */}
        {/* <div className="container-right"> */}
        <ContainerRight>
          <span>LOG IN</span>
        </ContainerRight>  
        {/* </div> */}
        </Container> 
      {/* </div> */}
      </TopbarContainer>
    
  )
}

export default TopBar;