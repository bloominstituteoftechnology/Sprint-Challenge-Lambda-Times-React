import React from "react";
import * as styl from "../Styles/Styles";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <styl.TopBar>
      <styl.Container>
        <styl.ContainerLeft>
          <styl.LeftSpan>TOPICS</styl.LeftSpan>
          <styl.LeftSpan>SEARCH</styl.LeftSpan>
        </styl.ContainerLeft>
        <styl.ContainerCenter>
          <styl.CenterSpan>GENERAL</styl.CenterSpan>
          <styl.CenterSpan>BROWNBAG</styl.CenterSpan>
          <styl.CenterSpan>RANDOM</styl.CenterSpan>
          <styl.CenterSpan>MUSIC</styl.CenterSpan>
          <styl.CenterSpan>ANNOUNCEMENTS</styl.CenterSpan>
        </styl.ContainerCenter>
        <styl.ContainerRight>
          <styl.RightSpan>LOG IN</styl.RightSpan>
        </styl.ContainerRight>
      </styl.Container>
    </styl.TopBar>
  );
};

export default TopBar;
