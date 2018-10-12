import React from 'react';
import { 
  TopBarStyled,
  TopBarContainer,
  ContainerCenter,
  ContainerLeft,
  ContaianerRight,
  TopBarText
} from './TopBarParts'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarStyled>
      <TopBarContainer>
        <ContainerLeft>
          <TopBarText left>TOPICS</TopBarText><TopBarText left>SEARCH</TopBarText>
        </ContainerLeft>
        <ContainerCenter>
          <TopBarText center>GENERAL</TopBarText><TopBarText center>BROWNBAG</TopBarText><TopBarText>RANDOM</TopBarText><TopBarText center>MUSIC</TopBarText><TopBarText center>ANNOUNCEMENTS</TopBarText>
        </ContainerCenter>
        <ContaianerRight>
          <TopBarText right>LOG IN</TopBarText>
        </ContaianerRight>
      </TopBarContainer>
    </TopBarStyled>
  )





  // return (
  //   <div className="top-bar">
  //     <div className="container">
  //       <div className="container-left">
  //         <span>TOPICS</span><span>SEARCH</span>
  //       </div>
  //       <div className="container-center">
  //         <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
  //       </div>
  //       <div className="container-right">
  //         <span>LOG IN</span>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default TopBar;