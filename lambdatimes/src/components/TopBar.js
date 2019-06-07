import React from 'react';
import { TopBarWrapper, TopBarContainer, TBContainerLeft, TBContainerCenter, TBContainerRight } from '../CSS/Styles';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <TBContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </TBContainerLeft>
        <TBContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </TBContainerCenter>
        <TBContainerRight>
          <span>LOG IN</span>
        </TBContainerRight>
      </TopBarContainer>
    </TopBarWrapper>
  )
}

export default TopBar;