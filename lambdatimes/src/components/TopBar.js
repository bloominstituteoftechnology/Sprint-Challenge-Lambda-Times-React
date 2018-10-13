import React from 'react'
import {TopBarSection, TopBarContainer, ContainerLeft, ContainerCenter, ContainerRight} from './Content/TopBar-styled.js';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarSection>
      <TopBarContainer>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          <span>LOG IN</span>
        </ContainerRight>
      </TopBarContainer>
    </TopBarSection>
  )
}

export default TopBar;

