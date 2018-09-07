import React from 'react';
import LoginModal from './LoginModal';

import { Button } from 'reactstrap';

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
          { localStorage.getItem('lambdaTimesLoggedIn') ? <Button color="danger" onClick = { props.handleLogOut }>LOG OUT</Button> : <LoginModal buttonLabel = 'LOGIN' handleSubmit = { props.handleSubmit } footerMsg = { props.footerMsg } /> }
        </ContainerRightDiv>
      </ContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;
