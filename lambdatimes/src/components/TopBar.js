import React from 'react';
import { StyledTopBar, Container, LinkContainers } from './Styled';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <StyledTopBar>
      {/* className="top-bar" */}
      <Container>
        {/* className="container" */}
        <LinkContainers flex={1} bold>
          {/* className="container-left" */}
          <span>TOPICS</span>
          <span>SEARCH</span>
        </LinkContainers>
        <LinkContainers flex={3} small justify="center">
          {/* className="container-center" */}
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </LinkContainers>
        <LinkContainers bold flex={1} justify="end">
          {/* className="container-right" */}
          <span>LOG IN</span>
        </LinkContainers>
      </Container>
    </StyledTopBar>
  );
};

export default TopBar;
