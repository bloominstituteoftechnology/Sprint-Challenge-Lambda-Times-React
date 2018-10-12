import React from 'react';
import styled from 'styled-components'
import {
  TopBarDiv,
  TopBarContainer,
  ContainerLeft,
  ContainerLeftSpan,
  ContainerCenter,
  ContainerCenterSpan,
  ContainerRight,
  ContainerRightSpan,
} from './StyledTopBar';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

// const TopBar = () => {
//   return (
//     <div className="top-bar">
//       <div className="container">
//         <div className="container-left">
//           <span>TOPICS</span><span>SEARCH</span>
//         </div>
//         <div className="container-center">
//           <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
//         </div>
//         <div className="container-right">
//           <span>LOG IN</span>
//         </div>
//       </div>
//     </div>
//   )
// }
const TopBar = () => {
  return (
    <TopBarDiv >
      <TopBarContainer >
        <ContainerLeft >
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan><ContainerCenterSpan>BROWNBAG</ContainerCenterSpan><ContainerCenterSpan>RANDOM</ContainerCenterSpan><ContainerCenterSpan>MUSIC</ContainerCenterSpan><ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </ContainerRight>
      </TopBarContainer >
    </TopBarDiv>
  )
}

export default TopBar;

