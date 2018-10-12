import React from 'react';
import * as styles from './styleComponents.js';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <styles.TopBar>
      <styles.Container>
        <styles.ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </styles.ContainerLeft>
        <styles.ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </styles.ContainerCenter>
        <styles.ContainerRight>
          <span>LOG IN</span>
        </styles.ContainerRight>
      </styles.Container>
    </styles.TopBar>
  )
}

export default TopBar;