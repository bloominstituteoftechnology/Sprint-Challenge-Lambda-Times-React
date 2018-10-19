import React from 'react';


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

function TopBar () {
  return (
    <topBar>
      <topBarContainer>
        <topBarContainerleft>
          <span>TOPICS</span><span>SEARCH</span>
        </topBarContainerleft>
        <topBarContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </topBarContainerCenter>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </topBarContainer>
    </topBar>
  )
}

export default TopBar;