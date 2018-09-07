import React from 'react';
import LoginModal from './LoginModal';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
import {
  TopBarDiv, 
  ContainerDiv, 
  ContainerLeftDiv, 
  ContainerCenterDiv, 
  ContainerRightDiv, 
} from './TopBarStyles';

const TopBar = (props) => {
  return (
    <TopBarDiv>
      <ContainerDiv>
        <ContainerLeftDiv>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeftDiv>
        <ContainerCenterDiv>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenterDiv>
        <ContainerRightDiv>
          { localStorage.getItem('lambdaTimesLoggedIn') ? <button onClick = { props.handleLogOut }>LOG OUT</button> : <LoginModal buttonLabel = 'LOGIN' handleSubmit = { props.handleSubmit } /> }
        </ContainerRightDiv>
      </ContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;
