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
`

const ContainerL = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

const ContainerC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  text-decoration: underline;
`
const Span = styled.span`
margin-right: 5%;
`


const ContainerR = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const TopBar = () => {
  return (
    // <div className="top-bar">
    <Header>
      {/* <div className="container"> */}
      <Container>
        {/* <div className="container-left"> */}
      <ContainerL>
          <span>TOPICS</span><span>SEARCH</span>
       </ContainerL>   
        {/* </div> */}

        {/* <div className="container-center"> */}
        <ContainerC>
          <Span>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
         </Span>
        </ContainerC>
        {/* </div> */}

        {/* <div className="container-right"> */}
      <ContainerR>
          <span>LOG IN</span>
      </ContainerR>    
        {/* </div> */}
        </Container>

      {/* </div> */}
    </Header>
    // </div>
  )
}

export default TopBar;