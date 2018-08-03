import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


let topBarOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

let topBarContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
}
@media (min-width: 1280px) {
  .top-bar .container {
    width: 1280px;
  }
`

let topBarContainerLeft = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`


let topBarContainerLeftSpan = styled.div `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

let topBarContainerCenter =styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`
let topBarContainerCenterSpan = styled.div `
  cursor: pointer;
  margin-right: 5%;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`


let topBarContainerRight = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

let topBarContainerRightSpan =styled.div `
  cursor: pointer;
  `





const TopBar = () => {
  return (
//    <div className="top-bar">
//      <div className="container">
//        <div className="container-left">
 //         <span>TOPICS</span><span>SEARCH</span>
//        </div>
//        <div className="container-center">
//          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
//        </div>
//        <div className="container-right">
//          <span>LOG IN</span>
//        </div>
//      </div>
//    </div>
//  )
//}



    <topBarOuter>
      <topBarContainer>
        <topBarContainerLeft>
          <topBarContainerLeftSpan>TOPICS</topBarContainerLeftSpan><topBarContainerLeftSpan>SEARCH</topBarContainerLeftSpan>
        </topBarContainerLeft>
      
        <topBarContainerCenter>
          <topBarContainerCenterSpan>GENERAL</topBarContainerCenterSpan>
          <topBarContainerCenterSpan>BROWNBAG</topBarContainerCenterSpan>
          <topBarContainerCenterSpan>RANDOM</topBarContainerCenterSpan>
          <topBarContainerCenterSpan>MUSIC</topBarContainerCenterSpan>
          <topBarContainerCenterSpan>ANNOUNCEMENTS</topBarContainerCenterSpan>
        </topBarContainerCenter>

        <topBarContainerRight><topBarContainerRightSpan>LOG IN</topBarContainerRightSpan></topBarContainerRight>
      </topBarContainer>
    </topBarOuter>
  )
}

export default TopBar;