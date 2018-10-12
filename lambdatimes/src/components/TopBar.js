import React from "react";
import * as styl from "../Styles/Styles";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <styl.TopBarDiv>
      <styl.ContainerDiv>
        <styl.ContainerLeftDiv>
          <styl.LeftSpan>TOPICS</styl.LeftSpan>
          <styl.LeftSpan>SEARCH</styl.LeftSpan>
        </styl.ContainerLeftDiv>
        <styl.ContainerCenterDiv>
          <styl.CenterSpan>GENERAL</styl.CenterSpan>
          <styl.CenterSpan>BROWNBAG</styl.CenterSpan>
          <styl.CenterSpan>RANDOM</styl.CenterSpan>
          <styl.CenterSpan>MUSIC</styl.CenterSpan>
          <styl.CenterSpan>ANNOUNCEMENTS</styl.CenterSpan>
        </styl.ContainerCenterDiv>
        <styl.ContainerRightDiv>
          <styl.RightSpan>LOG IN</styl.RightSpan>
        </styl.ContainerRightDiv>
      </styl.ContainerDiv>
    </styl.TopBarDiv>
  );
};

export default TopBar;
