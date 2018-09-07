import React from 'react';
// import styled from 'styled-components';
import {TopBar1, TopBarContainer, TopBarContainerLeft, TopBarContainerLeftSpan, TopBarContainerCenter, TopBarContainerRight, TopBarContainerRightSpan, TopBarContainerCenterSpan} from './TopBarCss';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (

    <TopBar1 key="top-bar">
      <TopBarContainer key="container">
          <TopBarContainerLeft key="container-left">
            <TopBarContainerLeftSpan>TOPICS</TopBarContainerLeftSpan>
            <TopBarContainerLeftSpan>SEARCH</TopBarContainerLeftSpan>
          </TopBarContainerLeft>
              <TopBarContainerCenter key="container-center">
                <TopBarContainerCenterSpan>GENERAL</TopBarContainerCenterSpan>
                <TopBarContainerCenterSpan>BROWNBAG</TopBarContainerCenterSpan>
                <TopBarContainerCenterSpan>RANDOM</TopBarContainerCenterSpan>
                <TopBarContainerCenterSpan>MUSIC</TopBarContainerCenterSpan>
                <TopBarContainerCenterSpan>ANNOUNCEMENTS</TopBarContainerCenterSpan>
              </TopBarContainerCenter>
          <TopBarContainerRight key="container-right">
            <TopBarContainerRightSpan>LOG IN</TopBarContainerRightSpan>
          </TopBarContainerRight>
      </TopBarContainer>
    </TopBar1>
  )
}

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

export default TopBar;