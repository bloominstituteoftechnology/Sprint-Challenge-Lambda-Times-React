import React from 'react';
import {
  TopBarWrapper,
  TopBarContainer,
  TopBarContainerLeft,
  TopBarContainerCenter,
  TopBarContainerRight
} from './Styled/styled';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const clearStorage = () => {
  localStorage.clear();
  window.location.reload();
};

const TopBar = () => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <TopBarContainerLeft>
          <span>TOPICS</span>
          <span>SEARCH</span>
        </TopBarContainerLeft>
        <TopBarContainerCenter>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </TopBarContainerCenter>
        <TopBarContainerRight>
          <span onClick={clearStorage}>LOG OUT</span>
        </TopBarContainerRight>
      </TopBarContainer>
    </TopBarWrapper>
  );
};

export default TopBar;
